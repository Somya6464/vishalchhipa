'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "27d5330ba234ee5a464fc44c2387e93b",
"assets/AssetManifest.bin.json": "746595064f6b6fcaf4a963755187ff22",
"assets/AssetManifest.json": "42bceca45f65479be0b641ac78428864",
"assets/assets/images/c1.png": "f12ef87a8138155985c13d7a660a06d2",
"assets/assets/images/c10.png": "96e615c9fce83032833b2c7d04c12668",
"assets/assets/images/c11.png": "0c14bfe4df08f6e7d621bc17f72c272d",
"assets/assets/images/c12.png": "588625339ab796c5607dce4062e91139",
"assets/assets/images/c13.png": "0bda3821d6b5e5bcc594558f36b57c0f",
"assets/assets/images/c14.png": "d2d3563d41c037c29aa857c26bcf5dfa",
"assets/assets/images/c2.png": "60bdfb177c08729ed11215b20b8945b5",
"assets/assets/images/c3.png": "e678d2c2866d8fb1bad1ddb2bd487ecb",
"assets/assets/images/c4.png": "90e537be7fb13bf709172df45cea64e2",
"assets/assets/images/c5.png": "8b79e3712a386ce1974c05150f44e6a6",
"assets/assets/images/c6.png": "4e8c4f2c0075f175bdc3b0bf00394aa9",
"assets/assets/images/c7.png": "258fbd74c9a5b21e11a286cb5357f490",
"assets/assets/images/c8.png": "63d1f1a3c0d5b638df1003937c7d4a25",
"assets/assets/images/c9.png": "bcd25a4bf934bc5d6ba6a5d554b03f92",
"assets/assets/images/p1.jpg": "8a68179c1737d3f93481d2ee7db77cf0",
"assets/assets/images/p3.jpg": "2489d2309ede1ba74497a059206935c9",
"assets/assets/images/s1.jpg": "9ef91b58f2dbd8e0dab5f160885d126c",
"assets/assets/images/s10.jpg": "0b0b2ec46781d1c9262170e4943f1ca4",
"assets/assets/images/s11.jpg": "71d6468bb4648e541f2989c876d41b8f",
"assets/assets/images/s12.jpg": "78d8901b4bb66dc42c722292f330b0fb",
"assets/assets/images/s13.jpg": "beddd5f7c47f8490951ce606875fb163",
"assets/assets/images/s2.jpg": "b5e3c155c808bdb8f08b27a601aa9cb8",
"assets/assets/images/s3.jpg": "536382e897365b6f25fc05b387b8da29",
"assets/assets/images/s4.jpg": "d6a94061391556a319629eff81e63d55",
"assets/assets/images/s5.jpg": "42d15697c964cfabf3b2d51d5f4ddbd8",
"assets/assets/images/s6.jpg": "7aec99183c5a36051c80c15e65cd8df9",
"assets/assets/images/s7.jpg": "4559ad816a00231aafe645eafff01531",
"assets/assets/images/s8.jpg": "2196246197b1c9a7e1d1a2b6825aa0e7",
"assets/assets/images/s9.jpg": "cc72f33dea7ab69c4dbe789d5d64f0b9",
"assets/assets/userWay.html": "54bb2b970a47d1aac0595a862e8e6ae1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8089b5babf8deebc4ed74483fd9abb40",
"assets/NOTICES": "cb1a040d0cd275826d6f9a87851baa0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "798b0440f1859057d4e441417d4ab31e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "73269515f83b33961e28ac9a35075952",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "7a0901f91b4b4665c27e4809b23c8229",
"icons/android-chrome-192x192.png": "3bf82328b16bc482d8d2c45ca0c111f2",
"icons/android-chrome-512x512.png": "73269515f83b33961e28ac9a35075952",
"icons/apple-touch-icon.png": "cf0e9edf4e5174621005a734c00dafe5",
"index.html": "955fd5fcbd05773762564dc6b0625055",
"/": "955fd5fcbd05773762564dc6b0625055",
"main.dart.js": "a3b808b41102179056c4aea945442452",
"manifest.json": "8836bc035984c10a2b3625e8bfe2a287",
"version.json": "1e98a4f7390d2e9d9ad60c99fb0aff05"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
