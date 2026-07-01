import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imgDir = path.join(__dirname, "..", "public", "img");

function isOrange(r, g, b) {
  return r > 140 && g > 50 && g < 210 && b < 130 && r > g + 30;
}

function isDark(r, g, b) {
  return r + g + b < 280 && !isOrange(r, g, b);
}

function isHighlight(r, g, b) {
  return r > 210 && g > 210 && b > 210 && !isOrange(r, g, b);
}

async function toNegative(inputName, outputName) {
  const input = path.join(imgDir, inputName);
  const output = path.join(imgDir, outputName);

  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];

      if (a < 16) continue;

      if (isHighlight(r, g, b) && a < 240) {
        data[i + 3] = 0;
        continue;
      }

      if (isOrange(r, g, b)) {
        data[i] = 255;
        data[i + 1] = 102;
        data[i + 2] = 0;
        continue;
      }

      if (isDark(r, g, b)) {
        data[i] = 255;
        data[i + 1] = 255;
        data[i + 2] = 255;
        continue;
      }

      if (isHighlight(r, g, b)) {
        data[i] = 26;
        data[i + 1] = 26;
        data[i + 2] = 26;
        continue;
      }

      if (r + g + b < 420) {
        data[i] = 255;
        data[i + 1] = 255;
        data[i + 2] = 255;
      }
    }
  }

  await sharp(data, { raw: { width, height, channels } }).png().toFile(output);
  const meta = await sharp(output).metadata();
  console.log(`${outputName}: ${meta.width}x${meta.height}`);
}

await toNegative("valgor-logo.png", "valgor-logo-dark.png");
await toNegative("valgor-mark.png", "valgor-mark-dark.png");
