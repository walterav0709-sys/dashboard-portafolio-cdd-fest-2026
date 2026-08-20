# Dashboard del Portafolio CdD-FEST 2026

Dashboard interactivo para consultar el Portafolio de Proyectos CdD-FEST, su seguimiento físico y financiero, y el Registro RSM.

## Contenido

- **Proyectos:** indicadores, filtros, composición del portafolio, mapa provincial y detalle por proyecto.
- **Seguimiento:** Hito I, Mes 4 – Hito II y presupuesto global.
- **Registro RSM:** indicadores, filtros, gráficos, evolución temporal, hallazgos y tablas semaforizadas.
- Diseño adaptable para computadoras, tabletas y teléfonos.

## Sitio publicado

El dashboard público, sin inicio de sesión, está disponible en:

<https://walterav0709-sys.github.io/dashboard-portafolio-cdd-fest-2026/>

## Requisitos

- Node.js `22.x`
- npm

## Ejecutar localmente

```bash
npm ci
npm run dev
```

Después, abre la dirección local que aparece en la terminal.

## Validar antes de publicar

```bash
npm test
```

La validación construye el sitio y comprueba que el dashboard principal, sus tres pestañas y los recursos esenciales estén presentes.

## Estructura principal

```text
app/
  layout.tsx                  Metadatos y estructura general
  page.tsx                    Contenedor del dashboard
public/
  dashboard_portafolio_ptp.html
                               Dashboard interactivo y datos consolidados
index.html                    Entrada pública para GitHub Pages
tests/
  rendered-html.test.mjs      Pruebas básicas del sitio generado
.openai/hosting.json          Configuración de alojamiento
```

El archivo `public/dashboard_portafolio_ptp.html` es un producto generado desde el espacio de trabajo principal. Para actualizarlo, reemplázalo por la versión validada más reciente antes de confirmar los cambios.

## Sincronización con GitHub Desktop

1. Abre GitHub Desktop y selecciona este repositorio.
2. Antes de trabajar, usa **Fetch origin** y, si corresponde, **Pull origin**.
3. Realiza las modificaciones en esta misma carpeta.
4. Revisa los archivos en **Changes**.
5. Escribe un resumen y selecciona **Commit to main**.
6. Presiona **Push origin** para enviar los cambios a GitHub.

GitHub no funciona como una sincronización automática tipo OneDrive: cada actualización debe confirmarse con un commit y enviarse con `Push origin`.

## Seguridad de la información

- Este repositorio contiene únicamente el sitio publicable.
- No agregues archivos Excel de los reportes ISM o RSM, documentos internos, credenciales ni archivos `.env`.
- GitHub Pages presenta una pantalla de usuario y contraseña antes de cargar el dashboard. Es una barrera visual superficial, no autenticación de servidor.
- No utilices esta capa para información confidencial: una persona con conocimientos técnicos todavía puede acceder al archivo estático del dashboard.
- Los datos faltantes del dashboard no deben completarse ni inferirse fuera de las fuentes autorizadas.

## Uso

Proyecto de uso interno para el seguimiento de instrumentos de gestión del ITP y la red CITE.
