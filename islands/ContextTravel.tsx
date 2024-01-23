import {
  ComponentChildren,
  createContext,
} from "https://esm.sh/preact@10.19.2";
import { useState } from "https://esm.sh/preact@10.19.2/hooks";
import { StateUpdater } from "https://esm.sh/preact@10.19.2/hooks";

type ContextTravelSearch = {
  travelSearched: {}[];
  setTravelSearched: StateUpdater<{}[]>;
};

export const InfoTravels = createContext<ContextTravelSearch>({
  travelSearched: [],
  setTravelSearched: () => {},
});

export const Provider = ({ children }: { children: ComponentChildren }) => {
  const [travelSearched, setTravelSearched] = useState([{}]);
  console.log(travelSearched);
  return (
    <InfoTravels.Provider value={{ travelSearched, setTravelSearched }}>
      {children}
    </InfoTravels.Provider>
  );
};
