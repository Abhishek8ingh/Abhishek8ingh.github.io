// A name for our cache
const CACHE_NAME = 'portfolio-cache-v1';

// The files we want to cache
const urlsToCache = [
  './',
  './index.html', // Make sure this matches your HTML file name
  './manifest.json',
  './images/icon-192.png',
  './images/icon-512.png'
  // Add any CSS or other JS files here if you have them
  // e.g., './style.css'
];

// 1. Installing the service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// 2. Intercepting network requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response from cache
        if (response) {
          return response;
        }
        // Not in cache - fetch from network
        return fetch(event.request);
      }
    )
  );
});
