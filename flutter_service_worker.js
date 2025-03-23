'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "35d115a571e6715b9fdf5138e11f0165",
".git/config": "1ec420f8b5e97669eb20c0314f16f6b3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1503ebb25fa564fd4f73ba26d4072b7b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5c44bbe7547425258b576f8f63b00225",
".git/logs/refs/heads/main": "5c44bbe7547425258b576f8f63b00225",
".git/logs/refs/remotes/origin/main": "f275429ab0ffab67cf630b28aa93d963",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/17/2dcc6071224172cddfddd3c6aab99e3a9dfef6": "9dd64dbbbf4416b9f891ed8202c65bcd",
".git/objects/18/a9b1777c0500d7c0ba3812f5b741d9b2d9b82c": "c6b307eb25d4a96d069171a946689377",
".git/objects/1a/140b9a75b5ee666710ef692dc55d267cb6a034": "41f4e3af533ebd4b361a8dfeb1c97624",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/20/a7babb3c5bcd69743b8832da37fc47f4acd9a6": "0cead0aace94f872151b49b446632faf",
".git/objects/22/5c17311b844bc9bd0cd1a49c4b7c46b8859711": "2fc398938526bba3da60955a62127f91",
".git/objects/25/d5f406cfe85f17139b54ddf28632bf8cba9dd5": "d1eb81cba559856dc2a498e51e7b1967",
".git/objects/26/5a5fa5df07e43137ab247291876290bf891989": "b8c5ab29ec4d2b7422a8dfaafd4592b8",
".git/objects/34/7cb3fe08f3f744dbeef5e5e8b1d948d32b855d": "1e9330edad0d762b6f0e2eaf5d043a3c",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/dfc798d76461b24686826300b880c0fc4e7b20": "9f265ec62b0f859b2144b06558bd8960",
".git/objects/41/e476abfd694d9e85333b4c95e5cbbe7d8ae3d4": "3264461117545a5bfd2258c99a5d07bf",
".git/objects/44/b2cdebb9598f0e4e7def03e04c988f3667bf15": "9c9608346ada0e3b7dfa03760cc8c75a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/8b691a918b201e3e3dcbf3f00ae1334c2a906f": "86dd34c96d8d7e4488a30d3cba70033b",
".git/objects/48/907dde8b47be635e785897a9ff598260bca19f": "77c5ba036867f33d9da89dd2ec9ede99",
".git/objects/51/11385feddc99d84a88a734329da569977f421e": "de03e44fed03b6b149f5824a16668120",
".git/objects/51/dfe4ea4d91214f2a9751dc5c923d257bb0c0cc": "8330e775a2892c64965912867f7a87ba",
".git/objects/55/ba018503ba47ca3d411730768874c6208fc433": "591daf3bb15c85bf8a71f2502d2c4e65",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/61/07b4b0bdd9e34b1c1b07a8e857d18924d94fab": "5dff7d34a6c279a0eb08dfc5e6f8ba99",
".git/objects/64/14b0af694c9e1c737a4ae4e0ecf3e61df9a517": "3c607276da7c451d40afba64483f292d",
".git/objects/69/d8f0256d4614a5a308163fc5066b94b46cf32a": "5a5d335b86938b264e1a300ee92a579b",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/eb312306836b639dfddfa011e99d3bfb7a43b0": "aef38842dda8d2d8411aa772e6d1c1d1",
".git/objects/6f/35b5b469758a5447bf5edc96e541e224bdbfd8": "e88bfb273b06425b1f374328011e064a",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/78/4d0718d15c9a56f25a9dab290b51d97440682c": "7480c0a07ff029e921c2faef42e9b13e",
".git/objects/7a/bd9dbbfd756c3fe94f0e0c33c29b6cd4d5a218": "ca3c60c639cb69d6f1ec8e4c82879a80",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/ca6588c4dca28c7e981b851770d3ebb7fcdd69": "c6cf226da7927e2f6d9c287f956bb64e",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/9c/a1a6a4994cd929d04c32687202f80ba8b9c05a": "077897b822a024206928f8576d8bb95f",
".git/objects/9d/0dc4aeb5c81c01ff6c3dfdbd4a47ed96834edb": "86e181e22305ca053ef4118f4885fed2",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b1/70dcf06ea265844870f5c4686a4d964d350ef4": "8259b1d7d763dced7cbf4e2ff130a47c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/edfa2357c8844e6c27d5bab6cee42a350e8988": "e68a0ed0cdf9ee104e6dd4059716e674",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/315340a9c1df3926eae86a060fc54c6e0f0828": "548277767c0eb21ac12e2e7e4f6c3d35",
".git/objects/bc/5c23ac81addc68bba4923e049baf418178aa61": "cd4aeb8899d32031164bfc6fbe55e1d0",
".git/objects/be/70220d9daf1da2fef4a12f007d829a19455414": "47859a669f694e1f0abc6e1a11b086c1",
".git/objects/c1/8e053035c3109bd055d6f7e58954cc4a0d382c": "ea7dd210e70ac8a6786613fcfcd9c3dd",
".git/objects/c7/b3704156c50e4fa715e2d8bb3e434336223624": "04e2dc59db682a55fa29cc8eb9144bb6",
".git/objects/ca/67eb803995bb3ade5fbce0f1f8f615f77e7302": "66fc51b84658adf389c216c674ca1417",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/d3/2e17a4aa1b922f37b65097b0dd6a3b33a86ff4": "2ecd81bedb08d7a8720e02a96710d0e6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/b3cab40beef15c425a71975b1cba6a456ce3fc": "ede052ac37b0bf892521d6ae2eaaddff",
".git/objects/d5/916793c6c897285b912cd6ac7d47c702ac2c60": "f3f7208b4342fa82bb3ce346a0f17641",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c867af817ded95ac1584310e739fab16518e4": "1fdad7a35cf5f54dd431e3dbaa65383e",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/3d45a1d0046f1a31b35511884349e7f10c5f2b": "8eb35d1a45d283dfc88ecc530f25bafa",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/de/fef8a05e471a0bbf484ec79292e58a9ead8762": "023e006a9b43db4e1b80a27ce733ee6c",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fc/c4605e331f4f0ce46bf49f992bccad8bf45a15": "42a2051893a8d8f576c78c50b58c3bea",
".git/refs/heads/main": "2ec6c8b68a28a1fc52f2417eb6ae0dee",
".git/refs/remotes/origin/main": "2ec6c8b68a28a1fc52f2417eb6ae0dee",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "accbe9488de7afac4a87c4c5eadc8aaf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "80f37b1580063d05559137ee6671dce2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "75b447c458c21c16294489ae49dcce39",
"/": "75b447c458c21c16294489ae49dcce39",
"main.dart.js": "84464967a7c0b1aee004464f970c5dd1",
"manifest.json": "0637844fa324faaa5138ffa6914bb3ae",
"version.json": "b5bf1eb4eadc08066b86a4c2327124e2"};
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
