export type CarType = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;
  displacement: number;
  drive: "rwd" | "fwd" | "awd" | "4wd";
  fuel_type: "gas" | "diesel" | " electricity";
  highway_mpg: number;
  make: string;
  model: string;
  transmission: "a" | "m";
  year: number;
};
