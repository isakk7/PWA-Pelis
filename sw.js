const STATIC_CACHE = "static";
const APP_SHELL =[
    "/",
    "./page.html",
    "./app.js",
    "./manifest.json",
    "./images/icons/100.png",
    "./images/icons/102.png",
    "./images/icons/1024.png",
    "./images/icons/114.png",
    "./images/icons/120.png",];

self.addEventListener("install", (e) => {
    console.log("entrada a instalar");
    const cacheStatic = caches
    .open(STATIC_CACHE)
    .then((cache) => cache.addAll(APP_SHELL));

    e.waitUntil(cacheStatic);
});

self.addEventListener("fetch", (e) => {
    console.log("fectch!", e.request);

    e.respondWith(
        caches
        .match(e.request)
         .then(res => res || fetch(e.request))
         .catch(console.log)
    );
})