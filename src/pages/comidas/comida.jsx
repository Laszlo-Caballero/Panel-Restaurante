import { useParams } from "react-router-dom";
import useGet from "../../hooks/useGet";
import { Info } from "../../components/Details";
import CampaignIcon from "@mui/icons-material/Campaign";

function PanelComida() {
  const { id } = useParams();
  const values = useGet(`menu/comida/${id}`)[0];
  return (
    <article className="p-8">
      <header>
        <h2 className="font-WorkSansmedium text-2xl py-10 pl-4 border-b border-nepal-800">
          Detalles del Producto
        </h2>
      </header>
      <section className="pt-4 flex flex-col">
        <article className="flex w-full justify-between">
          <div className="relative pl-4 w-2/5">
            <img
              src={values && `http://localhost:3000/${values.img}.webp`}
              alt="Producto-Imagen"
              className="w-full"
            />
            <h3 className="font-WorkSansblod text-4xl z-2 absolute bottom-0 text-nepal-50 uppercase">
              {values && values.nombre}
            </h3>
          </div>
          <div>
            <h4 className="font-WorkSansblod text-xl p-4">
              Informacion del Producto
            </h4>
            <Info title="Precio" info={`$ ${values && values.precio}`} />
            <Info title="Categoria" info={values && values.categoria} />
            <Info
              title="Estado"
              info="En Stock"
              className={`${
                values && (values.status == 1 ? "bg-green-400" : "bg-red-500")
              }
              px-2 rounded-full
            `}
            />
            <Info title="Cargos Por Delivery" info="Gratis" />
            <Info title="Sku" info={values && values.sku} />
          </div>
        </article>
      </section>
      <div className="p-12">
        <p className="mb-4">{values && values.descripcion}</p>
        <div className="flex flex-col items-center h-full justify-center">
          <CampaignIcon sx={{ fontSize: 35 }} />
          <span className="font-WorkSansregular text-xl">
            {values && values.vendidos} Total Vendidos
          </span>
        </div>
      </div>
    </article>
  );
}

export default PanelComida;
