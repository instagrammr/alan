
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.02fed9f6a94694b9c88e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/683.latest.en.8347fd8c123e0de6003e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/361.latest.en.a61722cb92409da659d2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/146.latest.en.75a03d3bdee2e7dbcc02.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.a7f48a4901fbbc5bacc6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/751.latest.en.c93e6a6b8624ef406214.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/836.latest.en.54d8b34024818cafec9f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/78.latest.en.93037259d77deea16aa3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/100.latest.en.313e243f59663328b7ae.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.633ade85a17635f78998.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/683.latest.en.92713c61e5ec653ca0bf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.5e52d9ec000e6dcd2cd6.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/836.latest.en.6e0fd6af0121f716b925.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.latest.en.ce885bcf15d4017fc7e1.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  