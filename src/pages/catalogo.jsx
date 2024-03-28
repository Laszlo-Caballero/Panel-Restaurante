import useGet from "../hooks/useGet";
import Comida from "../components/Comida";

function Catalogo() {
  const values = useGet("menu");
  return (
    <main className="p-8 w-full flex flex-col">
      <p className="w-full text-xl font-bold mb-5">Catalogo</p>
      <section className="grid grid-cols-3-auto justify-between">
        {values.map((element) => {
          return (
            <Comida
              imagen={element.img}
              nombre={element.nombre}
              precio={element.precio}
              vendido={element.vendidos}
              id={element.id}
              key={element.id}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Catalogo;
