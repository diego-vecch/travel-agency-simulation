import Card from "../components/Card.tsx";
import { SearchPlace } from "../components/SearchPlace.tsx";
export default function SectionHome() {
  return (
    <section class="overflow-x-hidden">
      <div className="snap-center">
        <section className="snap-start h-screen relative overflow-hidden flex justify-center w-full">
          <img
            className="relative overflow-hidden bg-no-repeat text-center h-screen object-cover"
            src="/travel.jpg"
            alt="travel"
            width={3000}
            height={1000}
          />
          <SearchPlace />
        </section>
      </div>
      <div className="snap-center">
        <section className="snap-start h-screen w-screen relative overflow-hidden">
          <div className="absolute left-0 right-0 top-2 bottom-8 h-full w-screen overflow-hidden bg-fixed grid items-center justify-center place-items-center">
            <ol className="grid h-full w-screen md:grid-cols-2 md:gap-2 [&>li]:m-3 md:[&>li]:m-2 pt-8 md:pt-10 md:pb-7 md:px-12">
              <li>
                <Card
                  city="Bariloche"
                  country="Argentina"
                  date="12/12/24"
                  price={9999}
                  img="/bariloche.jpeg"
                  alt="imagen de Bariloche, autor Emilio Luján. Imagen obtenida de Unplash"
                />
              </li>
              <li>
                <Card
                  city="Madrid"
                  country="España"
                  date="12/12/24"
                  price={9999}
                  img="/madrid.jpeg"
                  alt="imagen de Bariloche, autor Jorge Fernández Salas. Imagen obtenida de Unplash"
                />
              </li>
              <li>
                <Card
                  city="Sao Paulo"
                  country="Brasil"
                  date="12/12/24"
                  price={9999}
                  img="/rioDeJaneiro.jpeg"
                  alt="imagen de Bariloche, autor Raphael Nogueira. Imagen obtenida de Unplash"
                />
              </li>
              <li>
                <Card
                  city="Machu Pichu"
                  country="Perú"
                  date="12/12/24"
                  price={9999}
                  img="/machuPichu.jpeg"
                  alt="imagen de Machu Pichu, autor Willian Justen de Vasconcellos. Imagen obtenida de Unplash"
                />
              </li>
            </ol>
          </div>
        </section>
      </div>
      {
        /* <SectionImage srcImg="/travel.jpg">
        <SectionCards />
      </SectionImage>
      <div className="snap-center">
        <Footer />
      </div> */
      }
    </section>
  );
}
