// Inside vue.config.js
module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: "Dogden",
    themeColor: "#624040",
    msTileColor: "#000000",
    // configure the workbox plugin
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "sw.js",
      // ...other Workbox options...
    },
  },
};
