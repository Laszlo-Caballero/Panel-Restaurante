import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { LabelForm } from "../../components/forms/form";
import { useForm } from "react-hook-form";
import { Order } from "../../components/Details";
import useGet from "../../hooks/useGet";

function Pedir() {
  const [orders, setOrders] = useState([]);
  const [table, setTable] = useState(1);
  const [socket, setSocket] = useState(null);
  const data = useGet("menu");
  useEffect(() => {
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);
  }, []);
  const { handleSubmit, reset, register } = useForm();
  const onSubmit = (dataForm) => {
    const { nombre, cantidad } = dataForm;
    const result = data.find((element) => element.nombre === nombre);
    const newOrder = {
      sku: result.sku,
      nombre: result.nombre,
      precio: result.precio,
      cantidad: parseInt(cantidad),
    };
    setOrders([...orders, newOrder]);
    reset();
  };
  const emit = () => {
    const emitData = {
      mesa: parseInt(table),
      data: orders,
    };
    reset();
    setOrders([]);
    setTable(1);
    console.log(emitData);
    socket.emit("ordenes", emitData);
  };
  return (
    <article className="p-8">
      <AddShoppingCartIcon
        sx={{ fontSize: 35, marginBottom: "15px", cursor: "pointer" }}
        onClick={() => {
          emit();
        }}
      />{" "}
      <div className="flex mb-4 gap-4">
        <p>Mesa N° </p>
        <input
          type="number"
          min="1"
          className="w-12"
          onChange={(e) => {
            setTable(e.target.value);
          }}
          value={table}
        />
      </div>
      {orders.map((order, index) => {
        return (
          <Order
            cantidad={order.cantidad}
            nombre={order.nombre}
            precio={order.precio}
            key={index}
            onClick={() => {
              setOrders(
                orders.filter((element) => element.nombre != order.nombre)
              );
            }}
          />
        );
      })}
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="flex justify-between border border-nepal-800 px-6 py-2 rounded-3xl items-center">
          <div className="flex gap-12 items-center font-WorkSansregular">
            <div className="flex items-center gap-4">
              <LabelForm name="Nombre" title="Producto" />
              <select
                name="Nombre"
                className="w-40 h-8"
                {...register("nombre", {
                  validate: (value) => {
                    return value != "none";
                  },
                })}
              >
                <option value="none"></option>
                {data.map((value, index) => {
                  return (
                    <option value={value.nombre} key={index}>
                      {value.nombre}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex gap-4 h-8 items-center">
              <LabelForm name="Cantidad" title="Catndidad" />
              <input
                type="number"
                name="Cantidad"
                min="1"
                className="w-12"
                {...register("cantidad", {
                  required: true,
                })}
              />
            </div>
          </div>
          <button type="submit">
            <CheckIcon
              onClick={() => {
                console.log(orders);
              }}
            />
          </button>
        </section>
      </form>
    </article>
  );
}

export default Pedir;
