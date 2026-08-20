import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("genera el punto de entrada del sitio", async () => {
  await access(new URL("dist/server/index.js", root));
  await access(new URL("dist/.openai/hosting.json", root));
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
  assert.doesNotMatch(html, /<script\s+src=/i);
});

test("la página principal presenta el dashboard", async () => {
  const page = await readFile(new URL("app/page.tsx", root), "utf8");
  const layout = await readFile(new URL("app/layout.tsx", root), "utf8");

  assert.match(page, /dashboard_portafolio_ptp\.html/);
  assert.match(page, /Dashboard del Portafolio de Proyectos CdD-FEST/);
  assert.match(layout, /Portafolio de proyectos CdD-FEST/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/i);
});
