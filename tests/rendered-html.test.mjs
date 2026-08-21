import assert from "node:assert/strict";
import { access, readFile, readdir, stat } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("genera el punto de entrada del sitio", async () => {
  await access(new URL("dist/server/index.js", root));
  await access(new URL("dist/.openai/hosting.json", root));
});

test("GitHub Pages solicita credenciales antes de cargar el dashboard", async () => {
  const index = await readFile(new URL("index.html", root), "utf8");
  await access(new URL(".nojekyll", root));
  assert.match(index, /id="username"/);
  assert.match(index, /id="password"/);
  assert.match(index, /sessionStorage\.getItem\("dashboard-access"\)/);
  assert.match(index, /dashboard\.src = "\.\/public\/dashboard_portafolio_ptp\.html"/);
  assert.match(index, /<iframe/);
  assert.doesNotMatch(index, /dese:dese/i);
});

test("incluye el dashboard y sus tres pestañas", async () => {
  const html = await readFile(
    new URL("public/dashboard_portafolio_ptp.html", root),
    "utf8",
  );

  assert.match(html, /Portafolio de proyectos CdD-FEST/i);
  assert.match(html, /id="tab-projects"/);
  assert.match(html, /id="tab-tracking"/);
  assert.match(html, /id="tab-rsm"/);
  assert.match(html, /Presupuesto global/);
  assert.match(html, /Registro RSM/);
  assert.match(html, /Cumplimiento del hito/);
  assert.match(html, /Distribución de proyectos según estado de aprobación del hito/);
  assert.match(html, /Desaprueba/);
  assert.match(html, /Aprueba/);
  assert.doesNotMatch(html, /Cumplimiento del hito por proyecto/);
  assert.match(html, /Descargar PTP fuente/);
  assert.match(html, /Descargar infografía de la cartera/);
  assert.doesNotMatch(html, /<script\s+src=/i);
});

test("publica los PTP y la infografía como descargas", async () => {
  const ptpDirectory = new URL("public/assets/ptp/", root);
  const ptpFiles = (await readdir(ptpDirectory)).filter((name) => name.toLowerCase().endsWith(".pdf"));
  assert.equal(ptpFiles.length, 19);
  const infographic = new URL(
    "public/assets/documents/Infografia_Cartera_CdD_FEST_2026_I_convocatoria_PET.pdf",
    root,
  );
  assert.ok((await stat(infographic)).size > 0);
});

test("la página principal presenta el dashboard", async () => {
  const page = await readFile(new URL("app/page.tsx", root), "utf8");
  const layout = await readFile(new URL("app/layout.tsx", root), "utf8");

  assert.match(page, /dashboard_portafolio_ptp\.html/);
  assert.match(page, /Dashboard del Portafolio de Proyectos CdD-FEST/);
  assert.match(layout, /Portafolio de proyectos CdD-FEST/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/i);
});
