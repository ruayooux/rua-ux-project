import fs from "node:fs/promises";
import path from "node:path";
import { createCanvas, DOMMatrix, ImageData, Path2D } from "/Users/temprua/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@napi-rs/canvas/index.js";
import * as pdfjs from "/Users/temprua/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/pdfjs-dist/legacy/build/pdf.mjs";

globalThis.DOMMatrix = DOMMatrix;
globalThis.ImageData = ImageData;
globalThis.Path2D = Path2D;

pdfjs.GlobalWorkerOptions.workerSrc =
  "file:///Users/temprua/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs";

const projectRoot = "/Users/temprua/Documents/New project";
const detailBaseDir = path.join(projectRoot, "assets/detail/page");
const generatedBaseDir = path.join(projectRoot, "assets/detail/generated");
const manifestPath = path.join(projectRoot, "detail-media-manifest.js");
const supportedImageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"]);
const targetProjects = new Set(["BARO(판매)", "BARO(매입)", "DOSO market"]);

const projectFolderAliases = new Map([
  ["BARO(판매)", "BARO(판매)"],
  ["BARO(매입)", "BARO(매입)"],
  ["DOSO market", "DOSO market"],
]);

await fs.mkdir(generatedBaseDir, { recursive: true });

const manifest = {};

for (const projectTitle of [...targetProjects].sort((a, b) => a.localeCompare(b, "ko"))) {
  const folderName = projectFolderAliases.get(projectTitle);
  const folderPath = folderName ? path.join(detailBaseDir, folderName) : null;

  manifest[projectTitle] = folderPath ? await collectProjectMedia(projectTitle, folderPath) : [];
}

await fs.writeFile(
  manifestPath,
  `window.DETAIL_MEDIA_MANIFEST = ${JSON.stringify(manifest, null, 2)};\n`,
  "utf8",
);

async function collectProjectMedia(projectTitle, folderPath) {
  const entries = await walk(folderPath);
  entries.sort((a, b) => a.relativePath.localeCompare(b.relativePath, "ko"));

  const mediaItems = [];
  for (const entry of entries) {
    if (entry.kind === "image") {
      mediaItems.push({
        src: toProjectRelative(entry.absolutePath),
        type: "image",
      });
      continue;
    }

    if (entry.kind === "pdf") {
      const generated = await renderPdfToPng(projectTitle, entry.absolutePath);
      mediaItems.push(...generated);
    }
  }

  return mediaItems;
}

async function walk(dirPath, prefix = "") {
  const dirents = await fs.readdir(dirPath, { withFileTypes: true });
  const results = [];

  for (const dirent of dirents) {
    if (dirent.name === ".DS_Store") {
      continue;
    }

    const absolutePath = path.join(dirPath, dirent.name);
    const relativePath = path.join(prefix, dirent.name);

    if (dirent.isDirectory()) {
      results.push(...(await walk(absolutePath, relativePath)));
      continue;
    }

    const ext = path.extname(dirent.name).toLowerCase();
    if (supportedImageExtensions.has(ext)) {
      results.push({ absolutePath, relativePath, kind: "image" });
      continue;
    }

    if (ext === ".pdf" || (await isPdfByHeader(absolutePath))) {
      results.push({ absolutePath, relativePath, kind: "pdf" });
    }
  }

  return results;
}

async function isPdfByHeader(filePath) {
  const handle = await fs.open(filePath, "r");
  try {
    const buffer = Buffer.alloc(4);
    await handle.read(buffer, 0, 4, 0);
    return buffer.toString("utf8") === "%PDF";
  } finally {
    await handle.close();
  }
}

async function renderPdfToPng(projectTitle, pdfPath) {
  const data = new Uint8Array(await fs.readFile(pdfPath));
  const pdf = await pdfjs.getDocument({
    data,
    disableWorker: true,
    useWorkerFetch: false,
    isEvalSupported: false,
    disableFontFace: true,
  }).promise;

  const safeProjectDir = path.join(generatedBaseDir, slugify(projectTitle));
  const safeDocDir = path.join(safeProjectDir, slugify(path.basename(pdfPath, path.extname(pdfPath))));

  await fs.rm(safeDocDir, { recursive: true, force: true });
  await fs.mkdir(safeDocDir, { recursive: true });

  const outputs = [];

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1.6 });
    const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
    const context = canvas.getContext("2d");

    await page.render({ canvasContext: context, viewport }).promise;

    const outputPath = path.join(safeDocDir, `${String(pageNumber).padStart(2, "0")}.png`);
    await fs.writeFile(outputPath, await canvas.encode("png"));

    outputs.push({
      src: toProjectRelative(outputPath),
      type: "image",
    });
  }

  return outputs;
}

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase();
}

function toProjectRelative(filePath) {
  return `./${path.relative(projectRoot, filePath).split(path.sep).join("/")}`;
}
