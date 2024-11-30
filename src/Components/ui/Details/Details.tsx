import cx from "@/libs/cx";
import { ReactNode, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
interface Props {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

export function Details({ icon, title, children }: Props) {
  const [click, setClick] = useState(false);
  return (
    <>
      <details className="w-full cursor-pointer px-4 transition-all">
        <summary
          className="flex w-full list-none items-center justify-between gap-3 py-4"
          onClick={() => {
            setClick(!click);
          }}
        >
          <span className="flex items-center gap-3">
            {icon}
            {title}
          </span>
          <IoIosArrowDown
            className={cx(click && "-rotate-90", "transition-all")}
          />
        </summary>
        <div
          key={click ? "animate-fade-down" : "animate-fade-up"}
          className={cx(click && "animate-fade-down")}
        >
          {children}
        </div>
      </details>
    </>
  );
}
