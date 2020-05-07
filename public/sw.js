self.addEventListener('install',event=>{
    const chacheProm = caches.open('sbacco-v1').then(cache=>{
        cache.addAll(['/','/logo.png']);
    });
    event.waitUntil(chacheProm);
});

self.addEventListener('fetch',event=>{
    const respuesta = caches.match(event.request).then(res=>{
        if (res) return res;

        return fetch(event.request).then(newRes=>{
            return newRes;
        })
    });
    event.respondWith(respuesta);
})

