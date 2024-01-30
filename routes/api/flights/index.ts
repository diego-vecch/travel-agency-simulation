import { db_travel_agency } from "../../../shared/conect_db.ts";
import { Handlers } from "https://deno.land/x/fresh@1.6.3/server.ts";
import { crypto } from "https://deno.land/std@0.210.0/crypto/crypto.ts";
import { Travel } from "../../../interfaces/travel.ts";
import { Fly, FlyBodyReq } from "../../../types/FlyProps.ts";

export const handler: Handlers<Travel | null> = {
  async POST(req, _ctx) {
    const infoTravel = (await req.json()) as Fly;
    /*     const validationError = validateTravel(infoTravel);
    if (validationError) {
      return validationError;
    } */
    const travel: FlyBodyReq = {
      origin: {
        nameSearchParams: infoTravel.origin.nameSearchParams,
        codeAiport: infoTravel.origin.codeAiport,
        city: infoTravel.origin.city,
        country: infoTravel.origin.country,
        date: new Date(infoTravel.origin.date),
        yyyymmdd: infoTravel.origin.date,
      },
      destiny: {
        nameSearchParams: infoTravel.destiny.nameSearchParams,
        codeAiport: infoTravel.destiny.codeAiport,
        city: infoTravel.destiny.city,
        country: infoTravel.destiny.country,
        date: new Date(infoTravel.destiny.date),
        yyyymmdd: infoTravel.destiny.date,
      },
      typeOfFly: {
        typeOfFly: infoTravel.typeOfFly.typeOfFly,
        dateDestinyCityReturn: new Date(
          infoTravel.typeOfFly.dateDestinyCityReturn,
        ),
        dateOringCityReturn: new Date(infoTravel.typeOfFly.dateOringCityReturn),
      },
      nameCompany: infoTravel.nameCompany,
      price: infoTravel.price,
      state: infoTravel.state,
      id: crypto.randomUUID(),
    };

    const travelKey = [
      "flights",
      `${travel.typeOfFly.typeOfFly}`,
      `${travel.destiny.nameSearchParams}`,
      `${travel.origin.nameSearchParams}`,
      `${travel.origin.yyyymmdd}`,
      travel.id,
    ];
    const ok = await db_travel_agency.atomic().set(travelKey, travel).commit();
    if (!ok) throw new Error("Something went wrong.");
    return new Response(JSON.stringify(travel));
  },
  async GET(_req, _ctx) {
    const travels = [];
    for await (
      const res of db_travel_agency.list({
        prefix: ["flights"],
      })
    ) {
      travels.push(res.value);
    }
    return new Response(JSON.stringify(travels));
  },
};
