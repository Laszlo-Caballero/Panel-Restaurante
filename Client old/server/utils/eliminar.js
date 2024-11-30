import fs from "node:fs";
import { fileURLToPath } from "url";
import path from "node:path";

export default function EliminarOtros() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const directorio = path.join(__dirname, "../storage/");
  fs.readdir(directorio, (error, archivos) => {
    if (error) console.log(error);

    const archivosNowebp = archivos.filter((archivo) => {
      return archivo.split(".").pop() != "webp";
    });
    if (archivosNowebp.length != 0) {
      archivosNowebp.forEach((archivo) => {
        const rutaCompleta = path.join(directorio, archivo);
        fs.unlinkSync(rutaCompleta);
      });
    }
  });
}
