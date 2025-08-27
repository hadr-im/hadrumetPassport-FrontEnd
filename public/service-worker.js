// public/service-worker.js

const CACHE_NAME = 'hadrumet-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/images/icons/icon-192x192.png', // Assuming you've made distinct icons
  '/images/icons/icon-512x512.png', // Assuming you've made distinct icons
  '/assets/images/Sousse/splash.png' // Ensure this path is correct if Vite moves it during build
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        // Filter urlsToCache to only include http/https schemes
        const httpUrlsToCache = urlsToCache.filter(url => !url.startsWith('chrome-extension://') && !url.startsWith('moz-extension://'));
        return cache.addAll(httpUrlsToCache); // Cache only valid URLs
      })
  );
});

self.addEventListener('fetch', (event) => {
  // IMPORTANT: Only process http and https requests.
  // Ignore chrome-extension://, moz-extension://, etc.
  if (event.request.url.startsWith('http') || event.request.url.startsWith('https')) {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // Cache hit - return response
          if (response) {
            return response;
          }
          // No cache hit - fetch from network
          return fetch(event.request).then(
            (response) => {
              // Check if we received a valid response and it's a basic request
              // (which typically means it's from our own origin or a CORS request we want to cache)
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }

              // IMPORTANT: Clone the response. A response is a stream
              // and can only be consumed once. We must clone it so that
              // both the browser and the cache can consume it.
              const responseToCache = response.clone();

              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });

              return response;
            }
          ).catch((error) => {
              // Handle network errors if fetching fails
              console.error('Fetch failed:', error);
              // You could return a custom offline page here if desired
              // For now, just return a rejected promise or a simple response
              return new Response('Offline content unavailable.', { status: 503, statusText: 'Service Unavailable' });
          });
        })
      );
  } else {
      // For non-http/https requests (e.g., chrome-extension://), simply let them pass through.
      // This is crucial to avoid the 'unsupported scheme' error.
      return fetch(event.request);
  }
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});