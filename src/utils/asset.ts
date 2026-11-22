/**
 * Resolves static asset paths dynamically according to Vite's base URL.
 * Ensures images and icons load correctly whether on localhost ('/'),
 * a custom domain, or GitHub Pages subpath ('/repo-name/').
 */
export const assetUrl = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || '/';
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
};
