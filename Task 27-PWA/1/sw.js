// importScripts("cdn://workbox-sw.js");
// importScripts(
//   "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
// );
// workbox.routing.registerRoute(
//   ({ request }) => request.destination === "image",
//   new workbox.strategies.NetworkFirst()
// );
var assets = [
  "demo.html",
  "page2.html",
  "CSS/main.css",
  "CSS/page1.css",
  "JS/page1.js",
];

const cacheName = "ourData1";
self.addEventListener("install", (event) => {
  console.log("installing service worker");
  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        return cache.addAll(assets);
      })
      .catch((err) => {
        console.log(err);
      })
  );
});

self.addEventListener("activate", (event) => {
  console.log("activating service worker");
  //   cashes.keys().then((key) => {
  //     return Promise.all(
  //       keys.filter((key) => key != cacheName).map((key) => caches.delete(key))
  //     );
  //   });
});

self.addEventListener("fetch", (event) => {
  console.log("fetching.........", event);
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          console.log("found in cache");
          console.log("network request");
          return response;
        }
        //Network request to server
        console.log("network request", event.request.url);
        return fetch(event.request).then((res) => {
          if (res.status === 404) {
            return new Response("<h1>page not found</h1>", {
              headers: { "Content-Type": "text/html" },
            });
          }
          return res;
        });
      })
      .catch((err) => {
        console.log(err);
        return new Response("<h1>You are offline</h1>", {
          headers: { "Content-Type": "text/html" },
        });
      })
  );
});
