import { useParams } from "react-router-dom";
import useGet from "../hooks/useGet";

function PanelComida() {
  const { id } = useParams();
  const values = useGet(`menu/comida/${id}`)[0];
  console.log(values);
  return (
    <article className="p-8 bg-nepal-50">
      <header>
        <h2 className="font-WorkSansmedium text-2xl py-10 pl-4 border-b border-nepal-800">
          Detalles del Producto
        </h2>
      </header>
      <section className="pt-4 flex">
        <div className="w-64 relative pl-4">
          <img
            src={values && `http://localhost:3000/${values.img}.webp`}
            alt="Producto-Imagen"
          />
          <h3 className="font-WorkSansblod text-4xl z-2 absolute bottom-0 text-nepal-50 uppercase">
            {values && values.nombre}
          </h3>
        </div>
        <div>
          <h4>Informacion del Producto</h4>
          <p>
            Precio <span>${values && values.precio}</span>
          </p>
        </div>
      </section>
    </article>
  );
}

export default PanelComida;
