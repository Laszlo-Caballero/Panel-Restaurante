import Hamburgesa from "src/assets/hamburgesa.jpg";
import CloseIcon from "@mui/icons-material/Close";
import { LabelForm, Error, InputForm, Slider, Loader } from "../forms/form";
import Modal from "../modal/modal";
import { useForm } from "react-hook-form";
import axios from "src/utils/axios";
import { useState } from "react";
import useGet from "src/hooks/useGet";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function AgregarComida({ setModalForms }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const [loader, setLoader] = useState(false);
  const [files, setFiles] = useState([]);
  const categorias = useGet("menu/categoria");
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    const formData = new FormData();
    setLoader(true);
    formData.append(
      "jsonData",
      JSON.stringify({
        nombre: data.nombre,
        precio: parseFloat(data.precio),
        estado: data.estado,
        descripcion: data.descripcion,
        categoria: data.categoria,
      })
    );
    // formData.append("file", data.file[0]);
    axios
      .post("/menu/insertar", formData)
      .then((response) => {
        console.log(response.data);
        setLoader(false);
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const handleFiles = (e) => {
    setFiles(Array.from(e.target.files));
  };

  return (
    <Modal className="w-[60em] h-[40em] flex flex-col gap-y-8">
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
          <input
            type="file"
            name="imagen"
            {...register("file", {
              required: {
                value: true,
                message: "Se necesita imagen",
              },
            })}
            multiple
            onChange={handleFiles}
          />
        </div>
        <div className="flex flex-col items-center justify-between shadow-Custom px-12 py-8 bg-nepal-50">
          <h1 className="font-WorkSansblod text-xl text-nepal-900 border-b border-black w-full text-center mb-12 py-2">
            Producto
          </h1>
          <Carousel
            showThumbs={false}
            showStatus={false}
            className="w-[300px] h-[300px]"
          >
            {files.length > 0 ? (
              files.map((value, index) => {
                return (
                  <div key={index}>
                    <img
                      src={URL.createObjectURL(value)}
                      alt={`image-${index}`}
                      className="w-[300px] h-[300px]"
                    />
                  </div>
                );
              })
            ) : (
              <div>
                <img src={Hamburgesa} alt="image-test" />
              </div>
            )}
          </Carousel>

          <div className="flex flex-col items-center w-full mt-2">
            <div className="flex items-center w-full justify-between">
              <LabelForm name="Estado" title="Estado disponible" />
              <Slider require={register("estado")} />
            </div>
            <div className="w-full flex flex-col mb-2">
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
                {categorias.map((item) => {
                  return (
                    <option key={item.idCategoria} value={item.categoria}>
                      {item.categoria}
                    </option>
                  );
                })}
              </select>
              {errors.categoria && <Error error={errors.categoria.message} />}
            </div>
          </div>
          <button
            type="submit"
            className="px-8 py-2 mt-6 bg-nepal-700 rounded-lg font-WorkSansmedium text-nepal-100"
          >
            enviar
          </button>
        </div>
      </form>
      {loader && <Loader />}
    </Modal>
  );
}

export default AgregarComida;
