export type CardProps = {
  city: string;
  country?: string;
  date: string;
  price: number;
  description?: string;
  img: string;
  alt: string;
  id?: string;
};

export type CardResponse = {
  city: string;
  country: string;
  date: string;
  price: number;
  description: string;
  img: string;
  alt: string;
  _id: number;
  createdAt: string;
  updatedAt: string;
};
