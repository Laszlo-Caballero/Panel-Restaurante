import useGet from "../hooks/useGet";

function Catalogo() {
  const { values } = useGet("menu");
  console.log(values);
  return (
    <section className="p-8 w-full flex flex-col">
      <p className="w-full text-xl font-bold">Catalogo</p>
    </section>
  );
}

export default Catalogo;
