import { CarType } from "../types";
import { colors } from "./constants";

// Renkler için bir sayaç değişkeni
let colorCounter = 0;

const generateImage = (car: CarType, angle?: string): string => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model);
  url.searchParams.append("zoomType", "fullscreen");

  // Sıradaki rengi seç
  const color = colors[colorCounter];

  // Rengi URL'e ekle
  url.searchParams.append("paintId", color);

  // Sayaç artır, listenin sonuna ulaştıysa başa dön
  colorCounter = (colorCounter + 1) % colors.length;

  // Açı parametresi varsa URL'e ekle
  if (angle) {
    url.searchParams.append("angle", angle);
  }

  return url.href;
};

export default generateImage;
