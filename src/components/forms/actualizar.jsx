import CloseIcon from "@mui/icons-material/Close";
import { LabelForm, Error, InputForm, Slider } from "./form";
import Modal from "../modal/modal";
import { useForm } from "react-hook-form";
import axios from "../../utils/axios";
import useGet from "../../hooks/useGet";

function ActaulizarComida({ setModalForms, id }) {
  const values = useGet(`menu/comida/${id}`);
  const img = values[0] && `http://localhost:3000/${values[0].img}.webp`;
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    values: {
      nombre: values[0] && values[0].nombre,
      precio: values[0] && values[0].precio,
      descripcion: values[0] && values[0].descripcion,
      estado: values[0] && values[0].status != 0 ? true : false,
      vendidos: values[0] && values[0].vendidos,
      categoria: values[0] && values[0].categoria,
      sku: values[0] && values[0].sku,
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    const formData = new FormData();
    formData.append(
      "jsonData",
      JSON.stringify({
        id: id,
        nombre: data.nombre,
        precio: parseFloat(data.precio),
        estado: data.estado,
        descripcion: data.descripcion,
        vendidos: data.vendidos,
        categoria: data.categoria,
        sku: parseInt(data.sku),
      })
    );
    formData.append("file", data.file[0]);
    axios
      .put("/menu/actualizar", formData)
      .then((response) => {
        console.log(response.data);
        setModalForms(false);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <Modal className="w-[60em] h-[50em]  rounded-xl flex flex-col gap-y-8">
      <div
        className="absolute top-2 right-2 text-white cursor-pointer"
        onClick={() => {
          setModalForms(false);
        }}
      >
        <CloseIcon />
      </div>
      <form
        className="flex w-full h-full flex-wrap justify-between"
        onSubmit={onSubmit}
      >
        <div className=" flex flex-col shadow-Custom px-12 py-8 bg-nepal-50">
          <h1 className="font-WorkSansblod text-xl text-nepal-900 w-full py-2 border-b border-black text-center">
            Añandir Producto
          </h1>
          <LabelForm name="Nombre" title="Nombre del Producto" />
          <InputForm
            type="text"
            name="Nombre"
            require={register("nombre", {
              required: {
                value: true,
                message: "Nombre requerido",
              },
            })}
          />
          {errors.nombre && <Error error={errors.nombre.message} />}
          <LabelForm name="Precio" title="Precio" />
          <InputForm
            type="text"
            name="precio"
            require={register("precio", {
              required: {
                value: true,
                message: "Precio requerido",
              },
              validate: (value) => {
                return !isNaN(value) || "El precio debe ser un numero";
              },
            })}
          />
          {errors.precio && <Error error={errors.precio.message} />}
          <LabelForm name="Descripcion" title="Descripcion" />
          <textarea
            name="Descripcion"
            cols="30"
            rows="10"
            {...register("descripcion", {
              required: {
                value: true,
                message: "Descripcion requerida",
              },
              minLength: {
                value: 100,
                message: "Al menos 100 caracteres",
              },
            })}
            className="resize-none rounded"
          />
          {errors.descripcion && <Error error={errors.descripcion.message} />}
          <LabelForm name="imagen" title="Imagen del Producto" />
          <InputForm type="file" name="imagen" require={register("file")} />
        </div>
        <div className="flex flex-col items-center justify-between shadow-Custom px-12 py-8 bg-nepal-50">
          <h1 className="font-WorkSansblod text-xl text-nepal-900 border-b border-black w-full text-center mb-12 py-2">
            Producto
          </h1>
          <img
            src={
              watch("file") && watch("file").length > 0
                ? URL.createObjectURL(watch("file")[0])
                : img
            }
            alt="Imagen seleccionada"
            className="w-[300px] h-[300px]"
          />
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-16">
              <LabelForm name="Estado" title="Estado disponible" />
              <Slider require={register("estado")} />
            </div>
            <div className="flex flex-col w-full mb-2">
              <LabelForm name="Vendidos" title="Cantidad de Vendidos" />
              <InputForm
                name="Vendidos"
                type="text"
                require={register("vendidos", {
                  required: {
                    value: true,
                    message: "Ventas requerido",
                  },
                  validate: (value) => {
                    return (
                      !isNaN(value) || "El numero de ventas debe ser un numero"
                    );
                  },
                })}
              />
              {errors.vendidos && <Error error={errors.vendidos.message} />}
              <LabelForm name="Categoria" title="Categoria" />
              <select
                name="Cataegoria"
                className="px-2 py-1"
                {...register("categoria", {
                  validate: (value) => {
                    return value != "none" || "La categoria es Obligatoria";
                  },
                })}
              >
                <option value="none"></option>
                <option value="Vegetariana">Vegetariana</option>
                <option value="Carnes">Carnes</option>
                <option value="Variados">Variados</option>
              </select>
              {errors.categoria && <Error error={errors.categoria.message} />}
              <LabelForm name="Sku" title="Sku" />
              <InputForm
                name="Sku"
                type="text"
                require={register("sku", {
                  required: {
                    value: true,
                    message: "El Sku es Obligatorio",
                  },
                  validate: (value) => {
                    return !isNaN(value) || "El Sku debe ser un Numero";
                  },
                })}
              />
              {errors.sku && <Error error={errors.sku.message} />}
            </div>
          </div>
          <button
            type="submit"
            className="px-8 py-4 bg-nepal-700 rounded-lg font-WorkSansmedium text-nepal-100 mt-0"
          >
            enviar
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default ActaulizarComida;
