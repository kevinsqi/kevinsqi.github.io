'use client';

import { useEffect } from 'react';

export default function ServiceWorkerCleanup() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) {
      return;
    }

    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => {
        registration.unregister();
      });
    });

    if ('caches' in window) {
      caches.keys().then((cacheNames) => {
        cacheNames.forEach((cacheName) => {
          if (cacheName.includes('gatsby') || cacheName.includes('workbox')) {
            caches.delete(cacheName);
          }
        });
      });
    }
  }, []);

  return null;
}
