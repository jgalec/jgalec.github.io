# Portafolio de Juan Galeano

Sitio personal de Juan Galeano, desarrollador backend especializado en automatización y agentes de IA. Presenta proyectos personales, experiencia profesional y soluciones desarrolladas para clientes de forma anonimizada.

## Stack

- [Astro 7](https://astro.build/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- TypeScript
- Markdown y colecciones de contenido de Astro
- GitHub Pages y GitHub Actions

## Rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Presentación y accesos principales. |
| `/proyectos` | Proyectos personales y experimentales. |
| `/experiencia` | Trayectoria profesional y soluciones desarrolladas. |
| `/experiencia/[...slug]` | Detalle de cada caso de estudio. |
| `/contacto` | Canales de contacto, GitHub y LinkedIn. |

## Estructura

```text
src/
├── components/       # Componentes compartidos
├── content/casos/    # Casos de estudio en Markdown
├── layouts/          # Estructura global del sitio
├── pages/            # Rutas de Astro
├── styles/           # Tokens Everforest y estilos globales
└── content.config.ts # Esquema de la colección de casos
public/               # Favicons y recursos estáticos
```

Cada archivo Markdown en `src/content/casos/` incluye el título, descripción, rol, sector y tecnologías del caso. Los nombres de clientes y sus datos identificables se omiten por confidencialidad.

## Desarrollo local

Requiere Node.js `>=22.12.0` y pnpm.

```sh
pnpm install
pnpm dev
```

El sitio estará disponible en `http://localhost:4321`.

## Comandos

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Inicia el servidor de desarrollo. |
| `pnpm build` | Genera la versión estática en `dist/`. |
| `pnpm preview` | Sirve localmente la versión compilada. |
| `pnpm astro ...` | Ejecuta comandos de la CLI de Astro. |

## Despliegue

El workflow [Deploy site to GitHub Pages](.github/workflows/deploy-pages.yml) compila y publica el sitio automáticamente al recibir cambios en la rama `main`.

Antes de configurar un dominio personalizado, actualiza la propiedad `site` en `astro.config.mjs` para generar URLs canónicas y sitemap correctos.
