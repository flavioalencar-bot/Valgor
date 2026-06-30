import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const manual =
  "C:/Users/flavio.alencar/.cursor/projects/c-foxsolution/assets/c__Users_flavio.alencar_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_ChatGPT_Image_25_de_jun._de_2026__17_22_37-ca887504-7a5b-42fc-9797-daab118428fe.png";

const outDir = "public/img/brand/debug";
await mkdir(outDir, { recursive: true });

const crops = [
  { name: "main-a.png", left: 300, top: 138, width: 420, height: 82 },
  { name: "main-b.png", left: 280, top: 128, width: 460, height: 92 },
  { name: "pos-a.png", left: 78, top: 455, width: 360, height: 78 },
  { name: "pos-b.png", left: 78, top: 478, width: 360, height: 78 },
  { name: "neg-a.png", left: 520, top: 455, width: 360, height: 78 },
  { name: "neg-b.png", left: 78, top: 548, width: 360, height: 78 },
  { name: "icon-a.png", left: 78, top: 92, width: 68, height: 68 },
  { name: "icon-b.png", left: 168, top: 92, width: 68, height: 68 },
];

for (const { name, ...region } of crops) {
  await sharp(manual).extract(region).png().toFile(path.join(outDir, name));
  console.log(name);
}
