import Ancore from "./Ancore.tsx";
import Icon from "./Icons/Icon.tsx";

export default function Header() {
  return (
    <header className="z-10 py-2 w-full fixed justify-between flex items-center">
      <div className="justify-center flex grow basis-0 h-full sm:pl-3">
        <Icon />
      </div>
      <nav className="hidden sm:flex w-full">
        <ul className="w-full inline-flex justify-center gap-4 text-center text-sm object-none object-center">
          <li className="">
            <Ancore href="/" title="Home" />
          </li>
          <li>
            <Ancore href="/travel" title="Consulta nuestros viajes" />
          </li>
          <li>
            <Ancore href="/paquetes" title="Paquetes" />
          </li>
          <li>
            <Ancore title="Aéreos" />
          </li>
          <li>
            <Ancore title="Contactenos" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
