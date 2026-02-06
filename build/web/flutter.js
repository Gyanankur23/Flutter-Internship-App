// Minimal Flutter web loader
var _flutter = {
  loader: {
    loadEntrypoint: function(options) {
      var script = document.createElement('script');
      script.src = options.entrypointUrl;
      script.onload = function() {
        options.onEntrypointLoaded({
          initializeEngine: function() {
            return Promise.resolve({
              runApp: function() {
                console.log("Flutter app started");
              }
            });
          }
        });
      };
      document.body.appendChild(script);
    }
  }
};
