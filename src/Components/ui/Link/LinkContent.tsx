import cx from "@/libs/cx";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  path: string;
  icon?: ReactNode;
}

export function LinkContent({ children, path, icon }: Props) {
  return (
    <Link
      className={cx(
        icon ? "items-center gap-3 px-4 py-4" : "px-6 py-2",
        "flex w-full cursor-pointer",
      )}
      href={`/panel/${path}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </Link>
  );
}
