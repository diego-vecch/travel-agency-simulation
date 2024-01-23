import PlaneIcon from "./Icons/PlaneIcon.tsx";
import { CardProps } from "../types/CardProps.ts";

export default function Card(
  { city, country, date, price, img, alt }: CardProps,
) {
  return (
    <div className="rounded-md overflow-hidden w-full relative md:h-80">
      <img
        className="relative h-full w-full overflow-hidden bg-fixed bg-cover bg-no-repeat object-cover"
        src={img}
        alt={alt}
        width={200}
        height={100}
      />
      <div
        className="absolute bottom-0 left-0 right-0 top-0 w-full h-full bg-fixed"
        style={{ backgroundColor: `rgba(${0}, ${0}, ${28}, ${0.47})` }}
      >
        <section className="text-sky-50 absolute top-4 bottom-4 left-2 right-2">
          <h2 className="absolute left-6 right-0 text-3xl">{city}</h2>
          <h2 className="absolute left-6 right-0 text-base top-8 text-gray-200">
            {country}
          </h2>
          <div className="absolute left-6 right-0 top-14 text-xl">
            <h3 className="inline-flex">{price} usd</h3>
          </div>
          <div className="absolute right-6 top-2">
            <PlaneIcon />
          </div>
          <section className="absolute left-6 bottom-10">
            <h3>{date}</h3>
          </section>
          <button className="absolute bottom-2 left-6 border-[1px] border-sky-50 rounded-lg px-2 hover:bg-sky-200 hover:text-sky-900">
            + Información
          </button>
        </section>
      </div>
    </div>
  );
}
