function Comida({ imagen, nombre, precio, vendido }) {
  return (
    <article className="flex w-64 flex-col pb-2 shadow-Custom">
      <img src={`http://localhost:3000/${imagen}.webp`} alt={nombre} />
      <div className="px-2 py-3 flex flex-col gap-y-3">
        <div className="flex justify-between items-center">
          <p className="font-WorkSansblod text-xl">{nombre}</p>
          <p className="font-WorkSansregular text-lg bg-nepal-300 px-2 py-1 rounded-xl text-nepal-100">
            ${precio}
          </p>
        </div>
        <p>
          Total Vendidos:{" "}
          <span className="font-WorkSansblod text-nepal-800">{vendido}</span>
        </p>
      </div>
    </article>
  );
}

export default Comida;
