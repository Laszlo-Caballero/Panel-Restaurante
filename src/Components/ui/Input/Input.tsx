import cx from "@/libs/cx";
import isEmpty from "@/libs/isEmpty";
import React, { InputHTMLAttributes, useState } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({ label, error, ...props }: Props) {
  const [text, setText] = useState("");
  const isValueEmpty = isEmpty(text);

  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative h-[60px] w-1/2 rounded bg-opacity-50 font-semibold shadow">
        <input
          {...props}
          className={cx(
            "text-primary-800 peer h-full w-full rounded-lg border bg-transparent px-3 pt-5 outline-none transition-colors focus:border-blue-500",
          )}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <label
          className={cx(
            isValueEmpty
              ? "left-3 top-[19px] font-semibold text-slate-500"
              : "text-primary-500 left-3 top-1 text-opacity-80",
            "absolute transition-all peer-focus:left-3 peer-focus:top-1",
          )}
        >
          {label}
        </label>
      </div>
      <p className="pt-2 font-medium">{error}</p>
    </div>
  );
}
