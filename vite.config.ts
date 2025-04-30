import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  const rootDir = fileURLToPath(new URL('./', import.meta.url));
  console.log('[ vite.config::mode  ] >', mode, isProd, rootDir);

  return {
    plugins: [svelte(), tailwindcss()],
    resolve: {
      alias: {
        '@': `${rootDir}/src`,
        '@config': `${rootDir}/config`,
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/variables.scss" as *;`
        }
      }
    },
    server: {
      host: true, // 允许局域网访问
      port: 8080
    },
  }
})