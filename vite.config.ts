import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Auto-detect GitHub Pages subpath if running in GitHub Actions
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';
const isUserPage = repoName.endsWith('.github.io');
const base = process.env.VITE_BASE_URL || (repoName && !isUserPage ? `/${repoName}/` : '/');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  server: {
    port: 3000,
    open: false
  }
});
