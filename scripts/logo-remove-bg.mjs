import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imgDir = path.join(__dirname, "..", "public", "img");

async function trimAndTransparent(inputName, outputName) {
  const input = path.join(imgDir, inputName);
  const output = path.join(imgDir, outputName);

  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      const a = data[i + 3];
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const visible = a > 20 && !(r > 248 && g > 248 && b > 248);
      if (visible) {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
  }

  const pad = Math.round(Math.min(width, height) * 0.02);
  minX = Math.max(0, minX - pad);
  minY = Math.max(0, minY - pad);
  maxX = Math.min(width - 1, maxX + pad);
  maxY = Math.min(height - 1, maxY + pad);

  const cw = maxX - minX + 1;
  const ch = maxY - minY + 1;

  const trimmed = await sharp(input)
    .extract({ left: minX, top: minY, width: cw, height: ch })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < trimmed.data.length; i += trimmed.info.channels) {
    if (trimmed.data[i] > 248 && trimmed.data[i + 1] > 248 && trimmed.data[i + 2] > 248) {
      trimmed.data[i + 3] = 0;
    }
  }

  await sharp(trimmed.data, { raw: trimmed.info }).png().toFile(output);
  console.log(`${outputName}: ${cw}x${ch} (${(cw / ch).toFixed(2)}:1)`);
}

await trimAndTransparent("valgor-logo-source.png", "valgor-logo.png");

const logoMeta = await sharp(path.join(imgDir, "valgor-logo.png")).metadata();
const logoH = logoMeta.height ?? 253;
const iconW = Math.round(logoH * 1.12);
await sharp(path.join(imgDir, "valgor-logo.png"))
  .extract({ left: 0, top: 0, width: Math.min(iconW, logoMeta.width ?? iconW), height: logoH })
  .png()
  .toFile(path.join(imgDir, "valgor-mark.png"));

await sharp(path.join(imgDir, "valgor-mark.png"))
  .resize(128, 128, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(path.join(imgDir, "favicon.png"));
