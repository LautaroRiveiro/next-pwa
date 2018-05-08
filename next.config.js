const withWorkbox = require('./plugins/next-workbox')
const withManifest = require('next-manifest')

module.exports = withWorkbox(withManifest({
    manifest: {
        name: "Cementos Avellaneda",
        short_name: "CASA",
        theme_color: "#d0021b",
        background_color: "#d0021b",
        display: "standalone",
        icons: [
            {
              "src": "/static/logo-login.png",
              "sizes": "192x192",
              "type": "image/png"
            },
            {
              "src": "/static/icon-384x384.png",
              "sizes": "384x384",
              "type": "image/png"
            },
            {
              "src": '/static/icon-512x512.png',
              "sizes": "512x512",
              "cache": true,
              "type": "image/png"
            }
          ],
          gcm_sender_id: "482941778795",
          gcm_sender_id_comment: "Do not change the GCM Sender ID"
    },
    workbox: {
        runtimeCaching: [{
            urlPattern: /^http[s|]?.*/,
            handler: 'networkFirst'
        }],
        importScripts: ['https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js']
    },
    webpack: (config) => {
        // Remove minifed react aliases for material-ui so production builds work
        if (config.resolve.alias) {
            delete config.resolve.alias.react
            delete config.resolve.alias['react-dom']
        }

        return config
    }
}))