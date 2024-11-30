import React from "react";

export default function Loader() {
  return (
    <div className="absolute left-0 top-0 z-50 flex h-screen w-full items-center justify-center backdrop-blur-md">
      <span className="inline-block h-[48px] w-[48px] animate-spin rounded-[50%] border-[5px] border-blue-500 border-b-transparent"></span>
    </div>
  );
}
