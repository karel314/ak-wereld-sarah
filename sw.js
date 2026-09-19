const CACHE_VERSION = 'ak-wereld-sarah-v1';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './style.css',
  './config.json',
  './manifest.json',
  './data/vragen.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './images/bron18_internetverkeer.jpg',
  './images/bron34_verstedelijkingsgraad.jpg',
  './images/bron45_agroketen.jpg',
  './images/bron49_handelsbalans.jpg',
  './images/bron13_natuurlijke_beperkingen.jpg',
  './images/bron15_verschuiving_productie.jpg',
  './images/bron46_beroepsbev_mex_vs.jpg',
  './images/bron16_diffusie_scurve.jpg',
  './images/bron10_bevolkingsdichtheid.jpg',
  './images/bron14_verbrokkeling.jpg',
  './images/bron7_tijdruimtecompressie.jpg',
  './images/bron18_wereldgodsdiensten.jpg',
  './images/bron24_beroepsbev_ontwikkeling.jpg',
  './images/bron17_cultuurgebieden.jpg',
  './images/bron24_groei_beroepsbevolking.jpg',
  './images/bron33_stadsbevolking.jpg',
  './images/bron47_biologisch_regulier.jpg',
  './images/bron5_industriele_revoluties.jpg',
  './images/bron28_demografisch_transitiemodel.jpg',
  './images/bron55_elpaso_juarez.jpg',
  './images/bron51_maquiladoras.jpg',
  './images/bron30_wereldbevolking.jpg',
  './images/bron23_centrum_periferiemodel.jpg',
  './images/bron4_dimensies.jpg',
  './images/bron14_migratiemodel.jpg',
  './images/bron47_piramides_mex_vs.jpg',
  './images/bron42_glb_doelstellingen.jpg',
  './images/bron8_bigmac_index.jpg',
  './images/bron22_welvaart_beroepsbev.jpg',
  './images/bron13_centrumgebieden_handel.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_VERSION).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
