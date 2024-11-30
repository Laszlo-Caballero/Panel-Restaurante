import Arrow from "images/downarrow.svg?react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
export function Box({ icon, title, children }) {
  return (
    <>
      <details className="w-full px-4 cursor-pointer">
        <summary className="list-none flex items-center gap-3 py-4 w-full justify-between">
          <span className="flex gap-3 items-center">
            {icon}
            {title}
          </span>{" "}
          <Arrow />{" "}
        </summary>
        {children}
      </details>
    </>
  );
}
export function Content({ children, path }) {
  return (
    <Link className="px-6 py-2 block" to={path}>
      {children}
    </Link>
  );
}

export function Info({ title, info, className }) {
  return (
    <p className={`flex justify-between p-4 border-t border-neutral-800`}>
      {title} <span className={className}>{info}</span>
    </p>
  );
}

export function Links({ icon, path, children }) {
  return (
    <Link
      className="py-4 flex w-full px-4 items-center gap-3 cursor-pointer"
      to={path}
    >
      <span>{icon}</span> {children}
    </Link>
  );
}

export function Order({ nombre, cantidad, precio, onClick }) {
  return (
    <section className="flex justify-between border border-nepal-800 px-6 py-2 rounded-3xl mb-4 items-center">
      <div className="flex w-1/2 gap-12 items-center font-WorkSansregular">
        <p className="flex flex-col">
          Producto: <span>{nombre}</span>
        </p>
        <p className="flex flex-col">
          Cantidad: <span>{cantidad}</span>
        </p>
        <p className="flex flex-col">
          Precio: <span>${precio * cantidad}</span>
        </p>
      </div>
      <CloseIcon onClick={onClick} sx={{ cursor: "pointer" }} />
    </section>
  );
}
