self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('pwa-cache-v2').then(cache => cache.addAll([
      './', './index.html', './style.css', './script.js', './manifest.json', 'assets/bg-music.mp3', 'assets/photos/1.jpg', 'assets/photos/2.jpg', 'assets/photos/3.jpg'
    ]))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
