import sharp from "sharp";
import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";

const outDir = "public/img";
const defaultSrc =
  "C:/Users/flavio.alencar/.cursor/projects/c-foxsolution/assets/c__Users_flavio.alencar_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_ChatGPT_Image_7_de_jul._de_2026__19_41_32-7a816bfe-e2b5-46fb-b343-4ca3d4ffebce.png";

const src = process.argv[2] ?? defaultSrc;
const input = src.endsWith(".png") ? src : defaultSrc;

function whiteToAlpha(data, width, height, channels, threshold = 235) {
  for (let i = 0; i < width * height; i++) {
    const idx = i * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const min = Math.min(r, g, b);
    if (min >= threshold) {
      data[idx + 3] = 0;
    } else if (min >= threshold - 20) {
      const fade = (threshold - min) / 20;
      data[idx + 3] = Math.round(data[idx + 3] * fade);
    }
  }
}

async function exportTransparentPng(inputPath, outputPath, threshold = 245) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  whiteToAlpha(data, info.width, info.height, info.channels, threshold);

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png({ compressionLevel: 9 })
    .toFile(outputPath);

  return info;
}

await mkdir(outDir, { recursive: true });
await mkdir(`${outDir}/brand`, { recursive: true });

const sourcePath = input.includes("public/img/logo.png")
  ? input
  : await sharp(input).trim({ threshold: 12 }).png().toBuffer().then(async (trimmed) => {
      const tmp = path.join(outDir, "_logo-trim.png");
      await sharp(trimmed).png().toFile(tmp);
      return tmp;
    });

const logoPath = path.join(outDir, "logo.png");
const { width, height } = await exportTransparentPng(sourcePath, logoPath);
await copyFile(logoPath, path.join(outDir, "brand", "logo-colorido.png"));

const iconLeft = Math.round(width * 0.17);
const iconWidth = Math.round(height * 1.05);
const iconExtract = await sharp(logoPath)
  .extract({
    left: iconLeft,
    top: 0,
    width: Math.min(iconWidth, width - iconLeft),
    height,
  })
  .resize(128, 128, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

await sharp(iconExtract).toFile(path.join(outDir, "logo-icon.png"));
await copyFile(path.join(outDir, "logo-icon.png"), path.join(outDir, "favicon.png"));

console.log("Logo instalado com fundo transparente:", width, "x", height);
