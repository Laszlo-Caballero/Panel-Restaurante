import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Modal from "./modal/modal";

function TablaEdit({ values, columns }) {
  const table = useReactTable({
    data: values,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <div>
        <table className="border-collapse border-spacing-0 w-full shadow-2xl">
          <thead className="bg-nepal-500">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="py-4 text-nepal-50 font-WorkSansblod"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="py-4 text-center border-t border-black font-WorkSansregular"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal className="w-[60em] h-[50em] bg-nepal-900 rounded-xl p-8">
        <form className="flex w-full h-full flex-col">
          <h1 className="font-WorkSansblod text-xl text-nepal-100 w-full">
            Añandir Producto
          </h1>
        </form>
      </Modal>
    </>
  );
}

export default TablaEdit;
