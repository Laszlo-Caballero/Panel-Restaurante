import express from "express";
import cors from "cors";
import routesM from "./routes/menu.js";
import routesU from "./routes/auth.js";
import bodyParser from "body-parser";
import EliminarOtros from "./utils/eliminar.js";
import cookieParser from "cookie-parser";
EliminarOtros();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/menu", routesM);
app.use("/users", routesU);
app.use(express.static("storage"));

app.listen(3000, () => {
  console.log("Servidor Corriendo en 3000");
});
