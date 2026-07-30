const CACHE_NAME = 'platformer-cache-v3';

const ASSET_VERSION = 7;
const v = (path) => `${path}?v=${ASSET_VERSION}`;

const PRECACHE_URLS = [
  './',
  'index.html',
  'manifest.json',
  v('assets/ground.png'),
  v('assets/question_block.png'),
  v('assets/tree.png'),
  v('assets/bush.png'),
  v('assets/flag_pole.png'),
  v('assets/flag_banner.png'),
  v('assets/enemy_goomba_0.png'),
  v('assets/enemy_goomba_1.png'),
  v('assets/enemy_turtle_0.png'),
  v('assets/enemy_turtle_1.png'),
  v('assets/background/cloud1.png'),
  v('assets/background/cloud2.png'),
  v('assets/background/cloud3.png'),
  v('assets/background/cloud4.png'),
  v('assets/background/hills_far.png'),
  v('assets/background/hills_near.png'),
  v('assets/character/casual/idle.png'),
  v('assets/character/casual/run_frames/run1.png'),
  v('assets/character/casual/run_frames/run2.png'),
  v('assets/character/casual/run_frames/run3.png'),
  v('assets/character/casual/run_frames/run4.png'),
  v('assets/character/casual/run_frames/run5.png'),
  v('assets/character/casual/run_frames/run6.png'),
  v('assets/character/casual/jump.png'),
  v('assets/character/casual/doublejump.png'),
  v('assets/character/casual/attack.png'),
  v('assets/character/casual/hurt.png'),
  v('assets/character/casual/victory.png'),
  v('assets/character/hijab/idle.png'),
  v('assets/character/hijab/run_frames/run1.png'),
  v('assets/character/hijab/run_frames/run2.png'),
  v('assets/character/hijab/run_frames/run3.png'),
  v('assets/character/hijab/run_frames/run4.png'),
  v('assets/character/hijab/jump.png'),
  v('assets/character/hijab/doublejump.png'),
  v('assets/character/hijab/attack.png'),
  v('assets/character/hijab/hurt.png'),
  v('assets/character/hijab/victory.png'),
  v('assets/sounds/jump.mp3'),
  v('assets/sounds/stomp.mp3'),
  v('assets/sounds/attack.mp3'),
  v('assets/sounds/hurt.mp3'),
  v('assets/sounds/win.mp3'),
  v('assets/sounds/gameover.mp3'),
  'assets/icons/icon-192.png',
  'assets/icons/icon-512.png',
  'assets/icons/icon-maskable-512.png',
  'assets/icons/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const isHTML = req.mode === 'navigate' || req.destination === 'document';

  if (isHTML) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((res) => res || caches.match('index.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        return res;
      });
    })
  );
});
