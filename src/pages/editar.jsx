import TablaEdit from "../components/tabla";
import useGet from "../hooks/useGet";
import { createColumnHelper } from "@tanstack/react-table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
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
        <div className="flex justify-center gap-12">
          <button>
            <EditIcon />
          </button>
          <button>
            <DeleteIcon />
          </button>
        </div>
      ),
    }),
  ];
  return (
    <main className="p-8">
      <section>
        <h1 className="font-WorkSansblod text-xl mb-4">Comidas</h1>
        <button className="px-8 py-4 bg-nepal-700 rounded-lg font-WorkSansmedium text-nepal-100 mb-4">
          Agregar
        </button>
        <TablaEdit values={values} columns={columns} />
      </section>
    </main>
  );
}

export default Editar;
