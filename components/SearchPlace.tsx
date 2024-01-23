import {
  useContext,
  useEffect,
  useState,
} from "https://esm.sh/preact@10.19.2/hooks";
import { JSX } from "preact/jsx-runtime";
import { InfoTravels } from "../islands/ContextTravel.tsx";
import { CardInfoPreviewFly } from "./CardInfoPreviewFly.tsx";
import { FlyResponse } from "../types/FlyProps.ts";
export function SearchPlace(): JSX.Element {
  const [origin, setOrigin] = useState("");
  const [destiny, setDestiny] = useState("");
  const [typeFly, setTypeFly] = useState("");
  const [date, setDate] = useState("2025-01-01");
  const [data, setData] = useState<[FlyResponse] | []>([]);

  const [showSearch, setShowSearch] = useState(true);

  const { travelSearched, setTravelSearched } = useContext(InfoTravels);

  const [showTest, setShoeTest] = useState(true);

  const [styleBoxFlights, setStyleBoxFlights] = useState({
    boxCard: "",
    containerCards: "",
  });

  const handleOrigin = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    setOrigin((e.target as HTMLInputElement).value);
  };
  const handleDestiny = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    setDestiny((e.target as HTMLInputElement).value);
  };
  const handleTypeFly = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    setTypeFly((e.target as HTMLInputElement).value);
  };
  const handleDate = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    setDate((e.target as HTMLInputElement).value);
  };

  const searchFly = async (): Promise<void> => {
    const valueOrigin = origin.replace(/ /g, "-").toLowerCase();
    const valueDestiny = destiny.replace(/ /g, "-").toLowerCase();
    const baseUrl = "http://localhost:8000/api/search-travel";
    const urlForSearchFlight =
      `${baseUrl}/${typeFly}/${valueOrigin}/${valueDestiny}/${date}`;
    const info = await fetch(
      urlForSearchFlight,
    ).then((res) => res.json()).then((res) => {
      setTravelSearched(res);
      setData(res);
    });
    /* document.location.href = "/travel"; */
  };
  console.log("aaa", data);
  console.log("bbb", travelSearched);
  useEffect(() => {}, [data]);
  return (
    <div className="absolute bottom-0 left-0 right-0 top-5 h-full w-full overflow-hidden bg-fixed">
      <div className="flex flex-col gap-8 h-full items-center justify-center place-items-center">
        <div className="max-w-[720px] text-sky-900  bg-[#dcf1fe] bg-opacity-90 backdrop-blur-sm rounded-xl w-90 px-8 py-6 grid justify-center place-items-center">
          <h2 className="mb-0 text-3xl font-semibold ">
            Viaja con nosotros
          </h2>
          <p class="mt-2 mb-5 flex">
            (
            <h4 class="pr-1 font-semibold">Simulación</h4>
            <h4 class="pr-1">de agencia de viajes -</h4>

            <a className="cursor-pointer">
              <h4 class="text-sky-700 hover:underline">Portfolio José Feria</h4>
            </a>
            )
          </p>
          <div>
            <form class=" flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-y-5 md:gap-x-10">
              <label htmlFor="">
                Desde donde viaja:
                <input
                  list="places"
                  className="rounded pl-[3px] text-sky-950 bg-white focus:outline-none mt-1 pb-1 w-full"
                  type="text"
                  name="origin"
                  value={origin}
                  onChange={handleOrigin}
                />
              </label>
              <datalist className="mb-1" id="places">
                <option value="Buenos Aires" />
                <option value="Bariloche" />
                <option value="Rosario" />
                <option value="Madrid" />
                <option value="Barcelona" />
              </datalist>
              <label htmlFor="">
                Destino:
                <input
                  list="places"
                  className="rounded pl-[3px] text-sky-950 bg-white  focus:outline-none mt-1 pb-1 w-full"
                  type="text"
                  name="destiny"
                  value={destiny}
                  onChange={handleDestiny}
                />
              </label>
              <div class="flex items-center justify-between">
                <legend class="">Vuelo:</legend>
                <div class="flex gap-2 ">
                  <input
                    name="fly"
                    list="places"
                    className="cursor-pointer rounded text-sky-950 bg-slate-300 accent-sky-700 mt-0 focus:outline-none pb-1 w-4"
                    type="radio"
                    value="outward-journey"
                    checked={typeFly === "outward-journey"}
                    onChange={handleTypeFly}
                  />
                  <label htmlFor="">
                    Solo Ida
                  </label>
                </div>
                <div class="flex gap-2">
                  <input
                    name="fly"
                    list="places"
                    className="cursor-pointer rounded  text-sky-950 bg-slate-300 accent-sky-700 focus:outline-none pb-1 w-4"
                    value="round-trip"
                    type="radio"
                    checked={typeFly === "round-trip"}
                    onChange={handleTypeFly}
                  />
                  <label htmlFor="">
                    Ida y vuelta
                  </label>
                </div>
              </div>
              <div class="flex flex-col justify-between">
                <div class="flex justify-between items-center w-full">
                  <label htmlFor="" class="pr-2">
                    Fecha para el vuelo:
                  </label>
                  <input
                    type="date"
                    min="2025-01-01"
                    max="2025-01-31"
                    value={date}
                    onChange={handleDate}
                    class="cursor-pointer rounded bg-white px-3 focus:outline-none hover:bg-sky-50"
                  />
                </div>
              </div>
              <div class="w-full col-span-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(origin, destiny, typeFly, date);
                    searchFly();
                    setShowSearch(true);
                    setStyleBoxFlights({
                      boxCard: "show-card__div_growth-animation ",
                      containerCards: "container-cards__div_growth-animation",
                    });
                  }}
                  className="mb-2 mt-2 w-full bg-sky-600 bg-opacity-90 rounded border-2 border-sky-600 px-2 py-1 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-700 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-sky-800 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 "
                >
                  Buscar sugerencias
                </button>
              </div>
            </form>
          </div>
        </div>
        {showSearch && (
          <div
            className={`max-w-[720px] text-sky-900 bg-[#dcf1fe] bg-opacity-90 backdrop-blur-sm rounded-xl w-90 max-h-96 px-8 py-6 grid justify-center place-items-center ${styleBoxFlights.boxCard} overflow-hidden`}
          >
            <h2 className="mb-7 text-2xl font-semibold">
              Encontrá opciones para tu próximo viaje
            </h2>
            <div
              class={`flex flex-col gap-6 ${styleBoxFlights.containerCards}`}
            >
              {showTest && (
                <CardInfoPreviewFly
                  nameCompany="Empresa 123"
                  typeFly="IDA"
                  price={1000}
                />
              )}
              {data.map((travel) => (
                <CardInfoPreviewFly
                  nameCompany={travel.nameCompany}
                  typeFly="IDA"
                  price={travel.price}
                  destiny={travel.destiny.city}
                  destinyCountry={travel.destiny.country}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
