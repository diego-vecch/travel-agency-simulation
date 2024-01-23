import { JSX } from "preact/jsx-runtime";

interface Props {
  href?: string;
  title: string;
  children?: JSX.Element;
}

export default function Ancore({ href, title, children }: Props): JSX.Element {
  return (
    <a
      href={href}
      className="text-sky-100 hover:text-sky-50 w-full h-8 px-3 py-1 bg-sky-700 sm:bg-sky-600 sm:bg-opacity-90 hover:bg-sky-500 hover:bg-opacity-90 rounded-xl cursor-pointer"
    >
      {title}
      {children}
    </a>
  );
}
