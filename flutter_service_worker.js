'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "204e0b6a186097846ca4fa036ac95964",
"index.html": "e3d2bdb313a1c46709900d667aa64cf4",
"/": "e3d2bdb313a1c46709900d667aa64cf4",
"CNAME": "cb6cdcd0b3b8a19ff75a0889953eba3b",
"main.dart.js": "2b15eecd503e969f12b20029a4f90ef4",
"favicon_f.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.png": "a86fd4e865e02f606d58c7ee30b7d832",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f4e081412d3074b94b442442606d8e3f",
".git/ORIG_HEAD": "72b431f2386e4a0ffe3954e183fadeb4",
".git/config": "7e008e40e954e1c246badec406930a9e",
".git/objects/0d/c494d8d55dda989483f1e076ac56b473eb0eb2": "8ed094b64b6f01cdb8ce4df50299e427",
".git/objects/0c/b69dc36a9ecffe9647d16c9ad0904bf44bb2db": "bc159b64cc6d5eb1e93a71edf6da724f",
".git/objects/50/760826c93d7b651589bf709b165ef517964b80": "87274105ba2e6e41dcd43ba958d50eb9",
".git/objects/03/1d189470eb335949fd5c245cc04b530b3c2bef": "bdab5a65cfd5a2caeb4b4a959b87b160",
".git/objects/04/6d68f5c49c98c04531cf3e4da37e91570e86e3": "d02ac3405686a31c30d0e152b74a42cf",
".git/objects/32/ed5e365e981e0c3cdc2d82860beab1e46751a9": "26076f08e97c841380b8544df50d3b40",
".git/objects/93/8b2cf180668e93d6e8b69a15a718e30a2fee7f": "5b941ccd79fdb962fdf63268402cc9ee",
".git/objects/60/e470ff7018db682448cd7b432a41244e1c2310": "c3c095dc36a4c73ba47b76f40a1d9d1a",
".git/objects/9d/fef2b47490769e9d9ecaa2fe4eca975cbc6726": "0f0ded09e29f1b49789a8fbb28cb641e",
".git/objects/9c/026caa7616f6347f151ac72722e04613a7629c": "a659b15e0440985bb8839f76cf87a4fe",
".git/objects/b5/31496590d1b42a3631baee2bed33d8f6f34cc5": "4fced115fcfea4f695b13126790d0bcf",
".git/objects/b5/fb909baf4c85ece819b46b5760d83f5a88615f": "92f2908695acce8471ef07bfbe9c81c5",
".git/objects/ac/48a0eaefa8787ad2a853b17ae8b29575e0466f": "0ef5224c55a46437b9d6534e6ab350ae",
".git/objects/d7/2d44e2325b43b95891ed86b07baed5f65de1b6": "3dc7b322115f13b8ee43d196c5f069eb",
".git/objects/d0/32558bbbe5029c5f10a041f822fd10c33bf5cc": "62f80665357bf369ac7f8ca7f741ac01",
".git/objects/a2/c7fe137e8e454eb1a7a72359f624d3cbb945ab": "474418777c6bbbe153a53dd43c8c3991",
".git/objects/bd/1071bce24746aa9f38c028e0c36ca8bc24cf05": "7b2e333004b56cce67b5eb639db8292a",
".git/objects/d1/b488e06abf5921b694c1ab6d049f9c92237bb2": "0dc54b0d093ab80be5e8010741e1450a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/9409050ddb6fab51970a72ba467bd8be0707c3": "19964d8e6296175f903ab6b79c27cbfe",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/ac161ced419699c7141eb33963641f169f7f8a": "9d04d70eb1b8e3eefa2beec73033eb97",
".git/objects/e2/a88842ba9f7f38cb1a4ca6130d53d59978adcc": "7a63b466141ba0ad310beaa9c943f325",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/cf/8b437799fc0e1d1324d37b5cdbfbb6bf0455be": "40a55a9deef454381d7edf7a8dc84642",
".git/objects/ca/3c0348a30d919f5a3c0e89aefcbdaf69d197fc": "7d8771394cbb2c610d94fe43a4da2222",
".git/objects/fe/8921d2e3341ee3c6d2c9ad41025bb8a3a50f8a": "0d3b1300f00815deda0abc7ece2ba6f2",
".git/objects/c8/98a0f1713134f5a1aa8d087b19ab5675740a1a": "1e15a7d3c1aeef2d163a875d5decfcd5",
".git/objects/fb/ef670af91ac3f25512ce7633ea032107b916e1": "fc418b09485a22ae506b39af746b8ddc",
".git/objects/ed/2b0f56bdc165ae6f2fc453adf5b0dccf84f165": "1150e538a7259c41529970a4f2a0472b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/4acb1d75dc928e6fc1227f7aa38fbeab409527": "56cc5f763d0b80f6613fe2f95d975f08",
".git/objects/29/7ec805271b5ffa285f5232a0b6d873417e6e98": "2183bf2b6e0615d8c6c69f5f2589e2b7",
".git/objects/16/d0966556aef27ab069badad5f89c50985cd6dc": "9ccbbeb9226b7a3e6bec41c1ecb41781",
".git/objects/7b/a77a7ce9fb31ea31d12e73e9d556d6fd5c4a92": "317b47a61dbc34eb2741081bc5dde4d5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/c5d9a4eb8e418ed19ea4d4c5a02a5a6423534f": "8a4aa67a1e335d4110c984ef2f80f2d0",
".git/objects/7e/9f4c5f0a9350fb5de76081ea9e55c3f6904922": "c030c08bffd21abcb393e7eb88da1f7b",
".git/objects/7e/fe19efde5ca4cbc149dc563db844ef30dab286": "0bb1079ca87941d33d49fea1e2c8efce",
".git/objects/10/b1dd28f313a68afc69090483b8c4f9a235cf89": "4f96e3867450ffb1a59c664c7aa310d5",
".git/objects/10/4ca16d5ddd87a9e77c95faf3c0ecdeefc89147": "2183dfbf15fb76afd1d584e617072a3a",
".git/objects/4d/ef0080e4cef572d0d253ab831869ccf636d962": "9ce2539ee150f62c5d3def2d17c52b2d",
".git/objects/4d/f818c6dd70847f9d2d02e22025cbe760dd3172": "c8043f3d8cb92992f17abd12ac48bab9",
".git/objects/75/a3b112b4e4972c18c0cca8580db6162c280ea2": "962d3d8fcdf9deee7f0f1b0ae9cf8466",
".git/objects/2f/df334872894dfe17e794ee248ee5d6e52e5a46": "d4cf440e9884c9566ab3e30c29241456",
".git/objects/43/097987303c1c94f1869865dd30e3517148ef71": "cc38cc7ae23a6ad00d8f7894733bed44",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/a0057e660c7697fba8d36bdf08e1d5ab173cc1": "f77985c225ab251f5404f660de77a1f5",
".git/objects/09/9e07fa1d1531bc661f9844392ff63f9f3e924b": "7c5870bab58983254216a92bc2aad779",
".git/objects/65/af0923d7a54d31e7269cbd575edd75a56795c7": "ac4554a06cc79755c4ed671fb4717677",
".git/objects/5e/16b56dda3fb1deb5175d4b936f06ae32369782": "b5e6b26cfacd99be4049a800d02c8f8d",
".git/objects/6c/03e725c317af399bf33b24a8a0fd3a93fdabf9": "6bb4145ec7a3bd21ca672323b605b29b",
".git/objects/39/9b11155426fd8db2ca84c19df182de9e9e932f": "465e8129dd1833a45065615ebd4a49a5",
".git/objects/97/a53d57a620eaf88cccad8896cb7e9efbf964d9": "ed39972e941321195b321ff4d24bf817",
".git/objects/97/f186fcc5f906bd3c354a66575a3f82cb744981": "1fb884c8d428b1bacbde3bb98840209d",
".git/objects/63/64fc462b12a8d57a05a0dd98ec024c45ea55fb": "9be75a8d98a1a0d99b7ba2508bdf334c",
".git/objects/64/237470122058bd5ddbc544a2fac33d29c49a15": "dc8b5fca1dfaae79e8be8fe9f46356ea",
".git/objects/bf/07178fde0172438452d4af88874f9b7582bf12": "04b425cd5c6cdb59f72d740fde7ae9cb",
".git/objects/b6/0a6d23ee719f9df7fee9a59147b6fdd1298a87": "007e2d3fe50bd8c7c82be82587abfefd",
".git/objects/a9/fc0a74ee73e9d801e505aecdf7ca9f52c69221": "1237bdab059c55835c9b826ea722ec54",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e1/01c488935cb74517e5ce0d65afefa04d083164": "df6d1001f4239495ecd618a5da72f95f",
".git/objects/f9/e81fb997736d01acb229173538ddf739dd0398": "c065441ada8824458d93b129f380dd9d",
".git/objects/f7/b86627641160706a14437f0f97f642159243c6": "e9cb6b1dc6b85c21abce8eb18f2e66d2",
".git/objects/f7/5ffcdec3b0bee4ebbb283a239cddd09747c165": "61fa7a8c244d42e664bbf96d99206df5",
".git/objects/fa/ab018b7ceb3a014f0b492bff9bc42a06d7091c": "45a2c2f96e39873dc39c65b72ba4053f",
".git/objects/f8/5c343b669f6eab95bfa1467cb68037dec96f96": "5c070319e95dc19104b742abbc524e2d",
".git/objects/e0/575d6c3ef1776ce79ebec752c838cc97c778dd": "1c931474f231a73c14f453685099d7f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/53e634dbca4cfcfd16c2791eb4eb01f5d64c95": "6a4cd742081bedd630547e4a5efa72ae",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5d197a68a88b9dc9893d54ab99c5fa5849c1fa": "41ec9972d9231053368425deadbafaab",
".git/objects/77/7952ad7f334352c12fdf150a61d9a970d16e13": "87e576c65dc10cd2521f7fd470fc490f",
".git/objects/70/f210d6e3315d9c343502c4368e586f9323a507": "aa34ca93b4e6a958bc65a570368b82d7",
".git/objects/70/bbe5b45bceb0f2a2a3c10f4494f9b21dcdcbad": "4e8c61b992729c4eb8177684464d2551",
".git/objects/8d/baceb54c6553fd525e228298065077cf3b465d": "2d96f6613ce1f1b811232c2048e39e0d",
".git/objects/8c/6d2f1e815f27a6e69a9660f9fccf98222d33a4": "e41a327890881e88d99ef6efe397cb87",
".git/objects/1d/6327bddcc8ec1b42642d23907e6e038dfa08d9": "6c81890f62c7695a5ba10744aa24e4c6",
".git/objects/2b/0530eca4437488908427d314ced4be9f7ee9bc": "80cf9c9988a037f9e0d7d6070d90700e",
".git/objects/7f/65a68946ceb891185c9827affed263e01c72fe": "40b176ea01de143a235b497237606568",
".git/objects/14/d7ee96e6b05feb7aeb6bd23b41c98b62c30086": "7dc50cf3c9f03d8dbab7798ad7aa8759",
".git/objects/8e/66daabde1b1c3cfd07a8ec5069bd01c3b045f1": "2b546961c93224e9960c5e0968d25e3e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "32c62f2453ed09394a8cc789d3f64c43",
".git/logs/refs/heads/master": "32c62f2453ed09394a8cc789d3f64c43",
".git/logs/refs/remotes/origin/master": "68ef39b0c362d033bdf680581611381f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/refs/heads/master": "9c2c97c6bdefbe7eb1c599747a899279",
".git/refs/remotes/origin/master": "9c2c97c6bdefbe7eb1c599747a899279",
".git/index": "db3c7211eff9432a697462cbb5d73e5d",
".git/COMMIT_EDITMSG": "03d26f2bccb9d829a8e36aefe582a3e7",
".git/FETCH_HEAD": "538d27c4451428ff4038eea778246eb8",
"assets/AssetManifest.json": "8263503242a7f3ce713cbb59997707e9",
"assets/NOTICES": "5cfed82310bd37e5569b41f8197225aa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/upload/images/dtht_tuoi.jpg": "e7178c24540a04e750d1f3ad09c79d7c",
"assets/upload/images/zalo.png": "fa9bb40c4819ad90ad43c8e157950c7f",
"assets/upload/images/ruou_dtht_chai_dep.jpg": "af99bdd12d479916b5e20ba93aad8443",
"assets/upload/images/dtht_say_thang_hoa.jpg": "1b4cc80be6d9551b782a38bd205a9cdb",
"assets/upload/images/dtht_ruou_3l.png": "dbee1c0e236208d9e156dad38398fff8",
"assets/upload/images/com_dtht.jpg": "4f7b3b26b13f15660b6190353c6fbb57",
"assets/upload/images/dalatspecial_icon.png": "a86fd4e865e02f606d58c7ee30b7d832",
"assets/upload/images/dtht_kho.jpg": "c4335eb789534f8f92123227f9a890e0",
"assets/upload/images/dalatspecial.png": "aee2ab35822dcdef839ebbe6e4034422",
"assets/upload/images/nhong_dtht.jpg": "28b48559cc1716e53186b911e1d6ed65",
"assets/upload/images/dalat_special_logo.png": "bb27ffd1b94bbcca565d002b1e2a831a",
"assets/upload/images/footer_bg.jpg": "4f4e8a6b41ede6cd4a62d074b869b056",
"assets/upload/images/sample_image.png": "39059f5533a0671f2601de9717c5bb2d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
