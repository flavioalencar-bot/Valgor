import sharp from "sharp";
import { mkdir, copyFile } from "node:fs/promises";
import path from "node:path";

const manual =
  "C:/Users/flavio.alencar/.cursor/projects/c-foxsolution/assets/c__Users_flavio.alencar_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_ChatGPT_Image_25_de_jun._de_2026__17_22_37-ca887504-7a5b-42fc-9797-daab118428fe.png";

const outDir = "public/img/brand";
await mkdir(outDir, { recursive: true });

const crops = [
  { name: "logo-colorido.png", left: 118, top: 552, width: 158, height: 52 },
  { name: "logo-negativo-branco.png", left: 298, top: 552, width: 158, height: 52 },
  { name: "logo-icon-colorido.png", left: 478, top: 552, width: 52, height: 52 },
  { name: "logo-icon-negativo.png", left: 548, top: 552, width: 52, height: 52 },
  { name: "logo-hero.png", left: 358, top: 108, width: 310, height: 58 },
];

for (const { name, ...region } of crops) {
  await sharp(manual).extract(region).png().toFile(path.join(outDir, name));
  console.log(name);
}

await copyFile(path.join(outDir, "logo-colorido.png"), "public/img/logo.png");
await copyFile(path.join(outDir, "logo-negativo-branco.png"), "public/img/logo-white.png");
await copyFile(path.join(outDir, "logo-icon-colorido.png"), "public/img/logo-icon.png");
await copyFile(path.join(outDir, "logo-icon-colorido.png"), "public/app-icon.png");
