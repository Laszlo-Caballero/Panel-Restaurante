import express from "express";
import cors from "cors";
import routes from "./routes/menu.js";
import bodyParser from "body-parser";
import EliminarOtros from "./utils/eliminar.js";
EliminarOtros();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/menu", routes);
app.use(express.static("storage"));

app.listen(3000, () => {
  console.log("Servidor Corriendo en 3000");
});

//setInterval(EliminarOtros, 3000);
