export type TypeOfFly = "outward-journey" | "round-trip";

export type InfoTypeOfFly = {
  typeOfFly: TypeOfFly;
  dateDestinyCityReturn: string;
  dateOringCityReturn: string;
};

export type InfoTypeOfFlyBody = {
  typeOfFly: TypeOfFly;
  dateDestinyCityReturn: Date;
  dateOringCityReturn: Date;
};

export type InfoFly = {
  city: string;
  country: string;
  nameSearchParams: string;
  codeAiport: string;
  date: string;
};

export type InfoFlyReq = {
  city: string;
  country: string;
  nameSearchParams: string;
  codeAiport: string;
  date: Date;
  yyyymmdd: string;
};

export type Fly = {
  origin: InfoFly;
  destiny: InfoFly;
  typeOfFly: InfoTypeOfFly;
  nameCompany: string;
  price: number;
  state: string;
};

export type FlyBodyReq = {
  origin: InfoFlyReq;
  destiny: InfoFlyReq;
  typeOfFly: InfoTypeOfFlyBody;
  nameCompany: string;
  price: number;
  state: string;
  id: string;
};

export type InfoForDeleteFly = {
  typeFly: string;
  destiny: string;
  origin: string;
  dateComplete: string;
};

export type FlyResponse = {
  origin: InfoFlyReq;
  destiny: InfoFlyReq;
  typeOfFly: InfoTypeOfFlyBody;
  nameCompany: string;
  price: number;
  state: string;
  id: string;
};
