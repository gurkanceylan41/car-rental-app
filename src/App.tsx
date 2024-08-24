import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Filter from "./components/filter";
import Hero from "./components/hero";
import Searchbar from "./components/searchbar";
import fetchCars from "./utils/fetchCars";
import { CarType } from "./types";
import Warning from "./components/warning";
import Card from "./components/card";
import LoadMore from "./components/loadmore";
import { useSearchParams } from "react-router-dom";
import Year from "./components/filter/year";

const App = () => {
  const [params, setParams] = useSearchParams();

  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(5);
  const catalogueRef = useRef(null);

  useEffect(() => {
    // Urldeki bütün param'ları bir nesne haline getir
    const paramsObj = Object.fromEntries(params.entries());

    fetchCars({ limit, ...paramsObj })
      .then((data) => setCars(data))
      .catch(() => setIsError(true));
  }, [limit, params]);

  return (
    <div className="min-h-screen text-white bg-[rgb(23,23,23)]">
      <Header />

      <Hero catalogueRef={catalogueRef} />

      <div ref={catalogueRef} className="mt-12 padding-x padding-y">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Katoloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>
        <div className="home__filters">
          <Searchbar />

          <div className="home__filter-container">
            <Filter />
            <Year />
          </div>
        </div>

        {/* 
        * Araçları Listeleme
        1)Cars null ise > API'dan cevap gelmemiştir
        2)isError ture ise > API'dan hata gelmiştir
        3)Cars boş dizi ise > Aranılan kriterlere uygun veri yok
        4)Cars dolu ise > API'dan veriler gelmiştir
        */}

        {!cars ? (
          <Warning>Yükleniyor</Warning>
        ) : isError ? (
          <Warning>Üzgünüz bir sorun oluştu</Warning>
        ) : cars.length < 1 ? (
          <Warning>Aranılan kriterlere uygun araç bulunamadı</Warning>
        ) : (
          cars.length > 1 && (
            <section>
              <div className="home__cars-wrapper">
                {cars.map((car, i) => (
                  <Card car={car} key={i} />
                ))}
              </div>

              <LoadMore limit={limit} handleClick={() => setLimit(limit + 5)} />
            </section>
          )
        )}
      </div>
    </div>
  );
};

export default App;
