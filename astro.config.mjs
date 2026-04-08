import { defineConfig } from 'astro/config';

// Passe "site" und "base" an deinen GitHub-Repository-Namen an.
// Beispiel: Wenn dein Repo "username.github.io" heißt → site: 'https://username.github.io', base: '/'
// Wenn dein Repo "my-site" heißt → site: 'https://username.github.io', base: '/my-site'
export default defineConfig({
  site: 'https://larsgab.github.io/',
  base: '/',
  output: 'static',
});
