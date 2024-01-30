export type Time = {
  hour: number;
  minute: number;
};

export type State = "available" | "not available";

export interface Travel {
  city: string;
  country: string;
  date: Date;
  time: Time;
  price: number;
  state: State;
  id: string;
}

export interface InputTravel {
  city: string;
  country: string;
  date: string;
  time: Time;
  price: number;
  state: State;
}
