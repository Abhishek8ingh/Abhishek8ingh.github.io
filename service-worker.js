// This is a basic service worker that only includes the fetch handler,
// which is the minimum requirement for the "Add to Home Screen" prompt.

self.addEventListener('fetch', (event) => {
  // This event handler is intentionally left empty.
  // Its presence is enough to make the app installable.
});

