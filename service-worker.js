// service-worker.js
self.addEventListener('install', function() {
    econsole.log('[ServiceWorker] Install');
  });
  
  self.addEventListener('activate', function() {
    econsole.log('[ServiceWorker] Activate');
  });
  
  // 現状では、この処理を書かないとService Workerが有効と判定されないようです
  self.addEventListener('fetch', function(event) {});