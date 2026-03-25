self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log("Service Worker activo");
});

self.addEventListener('fetch', event => {
  // No hacemos cache aún para no romper nada
});
