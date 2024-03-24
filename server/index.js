import express from "express";
import cors from "cors";
import routesM from "./routes/menu.js";
import routesU from "./routes/auth.js";
import bodyParser from "body-parser";
import EliminarOtros from "./utils/eliminar.js";
EliminarOtros();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/menu", routesM);
app.use("/users", routesU);
app.use(express.static("storage"));

app.listen(3000, () => {
  console.log("Servidor Corriendo en 3000");
});
