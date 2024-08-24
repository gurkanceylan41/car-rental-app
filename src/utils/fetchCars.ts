import { CarType } from "../types";

const options = {
  method: "GET",

  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
    "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
  },
};

// Fonksiyon asenkron olduğundan ve bir return değerine sahip olduğundan dolayo return tipini belirlerken sadece return edilen tipi "CarType[]" ifade etmek yerine bu fonksiyonun hata da döndürebilecğeinden ve asenkdron olduğunda dolayı bu tipi react'ın içerisnde bulnan Promise tipine generic olarak göndererek return tipini belirledik

type parameters = {
  limit: number;
  make?: string;
  model?: string;
  fuel_type?: string;
  year?: string;
};
const fetchCars = async ({
  limit,
  make = "bmw",
  model = "m4",
  fuel_type = "",
  year = "",
}: parameters): Promise<CarType[]> => {
  try {
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}&fuel_type=${fuel_type}&year=${year}`;

    const res = await fetch(url, options);

    const data = await res.json();

    console.log(data);
    return data;
  } catch (err) {
    throw new Error("Hata");
  }
};

export default fetchCars;
