'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "204e0b6a186097846ca4fa036ac95964",
"index.html": "bea69e57695365a8c502155f7d32cb01",
"/": "bea69e57695365a8c502155f7d32cb01",
"main.dart.js": "4ba55d0663a41a5cbb5ca5fe8cdf8567",
"favicon_f.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.png": "a86fd4e865e02f606d58c7ee30b7d832",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f4e081412d3074b94b442442606d8e3f",
".git/config": "7e008e40e954e1c246badec406930a9e",
".git/objects/50/760826c93d7b651589bf709b165ef517964b80": "87274105ba2e6e41dcd43ba958d50eb9",
".git/objects/03/1d189470eb335949fd5c245cc04b530b3c2bef": "bdab5a65cfd5a2caeb4b4a959b87b160",
".git/objects/32/ed5e365e981e0c3cdc2d82860beab1e46751a9": "26076f08e97c841380b8544df50d3b40",
".git/objects/9d/fef2b47490769e9d9ecaa2fe4eca975cbc6726": "0f0ded09e29f1b49789a8fbb28cb641e",
".git/objects/9c/026caa7616f6347f151ac72722e04613a7629c": "a659b15e0440985bb8839f76cf87a4fe",
".git/objects/b5/31496590d1b42a3631baee2bed33d8f6f34cc5": "4fced115fcfea4f695b13126790d0bcf",
".git/objects/d0/32558bbbe5029c5f10a041f822fd10c33bf5cc": "62f80665357bf369ac7f8ca7f741ac01",
".git/objects/bd/1071bce24746aa9f38c028e0c36ca8bc24cf05": "7b2e333004b56cce67b5eb639db8292a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/ac161ced419699c7141eb33963641f169f7f8a": "9d04d70eb1b8e3eefa2beec73033eb97",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/cf/8b437799fc0e1d1324d37b5cdbfbb6bf0455be": "40a55a9deef454381d7edf7a8dc84642",
".git/objects/ca/3c0348a30d919f5a3c0e89aefcbdaf69d197fc": "7d8771394cbb2c610d94fe43a4da2222",
".git/objects/c8/98a0f1713134f5a1aa8d087b19ab5675740a1a": "1e15a7d3c1aeef2d163a875d5decfcd5",
".git/objects/ed/2b0f56bdc165ae6f2fc453adf5b0dccf84f165": "1150e538a7259c41529970a4f2a0472b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/4acb1d75dc928e6fc1227f7aa38fbeab409527": "56cc5f763d0b80f6613fe2f95d975f08",
".git/objects/29/7ec805271b5ffa285f5232a0b6d873417e6e98": "2183bf2b6e0615d8c6c69f5f2589e2b7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/c5d9a4eb8e418ed19ea4d4c5a02a5a6423534f": "8a4aa67a1e335d4110c984ef2f80f2d0",
".git/objects/4d/ef0080e4cef572d0d253ab831869ccf636d962": "9ce2539ee150f62c5d3def2d17c52b2d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5e/16b56dda3fb1deb5175d4b936f06ae32369782": "b5e6b26cfacd99be4049a800d02c8f8d",
".git/objects/6c/03e725c317af399bf33b24a8a0fd3a93fdabf9": "6bb4145ec7a3bd21ca672323b605b29b",
".git/objects/39/9b11155426fd8db2ca84c19df182de9e9e932f": "465e8129dd1833a45065615ebd4a49a5",
".git/objects/97/f186fcc5f906bd3c354a66575a3f82cb744981": "1fb884c8d428b1bacbde3bb98840209d",
".git/objects/64/237470122058bd5ddbc544a2fac33d29c49a15": "dc8b5fca1dfaae79e8be8fe9f46356ea",
".git/objects/a9/fc0a74ee73e9d801e505aecdf7ca9f52c69221": "1237bdab059c55835c9b826ea722ec54",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e1/01c488935cb74517e5ce0d65afefa04d083164": "df6d1001f4239495ecd618a5da72f95f",
".git/objects/f7/b86627641160706a14437f0f97f642159243c6": "e9cb6b1dc6b85c21abce8eb18f2e66d2",
".git/objects/f7/5ffcdec3b0bee4ebbb283a239cddd09747c165": "61fa7a8c244d42e664bbf96d99206df5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/70/bbe5b45bceb0f2a2a3c10f4494f9b21dcdcbad": "4e8c61b992729c4eb8177684464d2551",
".git/objects/8c/6d2f1e815f27a6e69a9660f9fccf98222d33a4": "e41a327890881e88d99ef6efe397cb87",
".git/objects/1d/6327bddcc8ec1b42642d23907e6e038dfa08d9": "6c81890f62c7695a5ba10744aa24e4c6",
".git/objects/14/d7ee96e6b05feb7aeb6bd23b41c98b62c30086": "7dc50cf3c9f03d8dbab7798ad7aa8759",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "13c1ea2963f68c95e41ae2cfa56df763",
".git/logs/refs/heads/master": "13c1ea2963f68c95e41ae2cfa56df763",
".git/logs/refs/remotes/origin/master": "00f935eba7acfee5156c7e5f66fafb61",
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
".git/refs/heads/master": "2518939177233923feb7e6bf09263300",
".git/refs/remotes/origin/master": "25b6a9c3a01fe9a441a5288b08694d6f",
".git/index": "9322eef01db26b1b13bc6e925a3c5fef",
".git/COMMIT_EDITMSG": "432eb1e7c153a709101c5b22dbc9a1d9",
".git/FETCH_HEAD": "bb3367eb4c08c9546b29cd6fbc17f220",
"assets/AssetManifest.json": "8263503242a7f3ce713cbb59997707e9",
"assets/NOTICES": "b8bb2865861d3f2d0135b62bbd04b0e4",
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