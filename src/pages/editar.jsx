import TablaEdit from "../components/tabla";
import useGet from "../hooks/useGet";
import { createColumnHelper } from "@tanstack/react-table";
function Editar() {
  const { values } = useGet("menu");
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor((row) => row.img, {
      id: "img",
      cell: (info) => (
        <div className="w-full flex justify-center">
          <img
            src={`http://localhost:3000/${info.getValue()}.webp`}
            alt={info.getValue()}
            className="w-16"
          />
        </div>
      ),
      header: () => "Imagen",
    }),
    columnHelper.accessor("nombre", {
      header: () => "Nombre",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("precio", {
      header: () => "Precio",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("vendidos", {
      header: () => "Vendidos",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("id", {
      header: () => "Editar/Eliminar",
      cell: (info) => (
        <div>
          <button>Editar</button>
          <button>Eliminar</button>
        </div>
      ),
    }),
  ];
  return (
    <main className="p-8">
      <TablaEdit values={values} columns={columns} />
    </main>
  );
}

export default Editar;
