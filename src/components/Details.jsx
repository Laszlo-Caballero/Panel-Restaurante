import Arrow from "./../images/downarrow.svg?react";
import { Link } from "react-router-dom";
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
