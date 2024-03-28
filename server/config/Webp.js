import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function ConvertirWebp(file) {
  if (file.filename.split(".").pop() == ".webp") {
    return;
  }
  const outputPath = path.join(
    __dirname,
    `../storage/${file.filename.split(".").shift()}.webp`
  );

  try {
    await sharp(file.path).resize(500, 500).webp().toFile(outputPath);
  } catch (error) {
    console.error("Error al convertir a WebP:", error);
  }
}
