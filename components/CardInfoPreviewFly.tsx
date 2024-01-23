type InfoPreviewCardFly = {
  nameCompany?: string;
  typeFly?: string;
  price?: number;
  destiny?: string;
  destinyCountry?: string;
};

export function CardInfoPreviewFly(
  {
    nameCompany = "Empresa A",
    typeFly = "IDA",
    price = 2000,
    destiny = "Buenos Aires",
    destinyCountry = "Argentina",
  }: InfoPreviewCardFly,
) {
  return (
    <button class="hover:bg-sky-500 hover:bg-opacity-30 hover:shadow-md transition ease-in-out hover:delay-0 duration-300 flex justify-between w-full bg-sky-600 bg-opacity-20 rounded-lg px-2 py-4">
      <div class="pr-2 w-96 flex flex-col">
        <div class="opacity-75">Empresa</div>
        <div>{nameCompany}</div>
      </div>
      <div class="flex flex-col border-r-2 border-sky-900 border-opacity-60 w-full">
        <div class="flex">
          <div class="pr-2 font-bold">{typeFly}</div>
          <div class="opacity-90">2028-12-31</div>
        </div>
        <div class="flex">
          <div class="font-medium text-lg">{destiny}, {destinyCountry}</div>
        </div>
      </div>
      <div class="w-44 flex flex-col">
        <div>Desde:</div>
        <div class="flex justify-center">${price}</div>
      </div>
    </button>
  );
}
