// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dulcecv.tech', // tu dominio personalizado (opcional, útil para rutas absolutas y sitemap)
  output: 'static'              // obliga a Astro a generar solo HTML/CSS/JS
});
