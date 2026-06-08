import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import {copyFileSync, mkdirSync, readdirSync, statSync} from 'fs';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'copy-images',
        closeBundle() {
          const sourceDir = 'images';
          const targetDir = 'dist/images';
          
          // Create target directory
          mkdirSync(targetDir, { recursive: true });
          
          // Copy all files from images folder
          const files = readdirSync(sourceDir);
          files.forEach(file => {
            const sourcePath = path.join(sourceDir, file);
            const targetPath = path.join(targetDir, file);
            
            // Only copy files, not directories
            if (statSync(sourcePath).isFile()) {
              copyFileSync(sourcePath, targetPath);
              console.log(`Copied: ${file}`);
            }
          });
        }
      }
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
