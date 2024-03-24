import "./slider.css";
import CircularProgress from "@mui/material/CircularProgress";
export function LabelForm({ name, title }) {
  return (
    <label htmlFor={name} className="font-WorkSansmedium text-lg py-2">
      {title}
    </label>
  );
}

export function Error({ error }) {
  return <span className="py-1 text-base font-WorkSansmedium">{error}</span>;
}

export function InputForm({ type, name, require }) {
  return <input type={type} name={name} {...require} className="rounded" />;
}

export function Slider({ require }) {
  return (
    <label className="switch">
      <input type="checkbox" {...require} />
      <span className="slider round"></span>
    </label>
  );
}

export function Loader() {
  return (
    <div className="absolute top-0 left-0 flex justify-center items-center w-screen h-screen z-30 bg-black bg-opacity-40">
      <CircularProgress />
    </div>
  );
}
