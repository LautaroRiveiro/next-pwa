const withWorkbox = require('./plugins/next-workbox')
const withManifest = require('next-manifest')

module.exports = withWorkbox(withManifest({
    manifest: {
        icons: {
            src: './assets/icon-512x512.png',
            cache: true
        }
    },
    workbox: {
        runtimeCaching: [{
            urlPattern: /^http[s|]?.*/,
            handler: 'staleWhileRevalidate'
        }]
    }
}))
