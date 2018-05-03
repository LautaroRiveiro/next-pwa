# next-workbox

> Next.js plugin for workbox

# Installation

```sh
npm install --save next-workbox
```
or

```
yarn add next-workbox
```

# Usage

This next.js plugin powered by [next-workbox-webpack-plugin](https://github.com/ragingwind/next-workbox-webpack-plugin). which mean you can use [almost options](https://github.com/ragingwind/next-workbox-webpack-plugin#usage) on the webpack plugin except `distDir` and `buildId`. The two of options will be overwriten and handled in this next.js plugin.

```js
// next.config.js
const withWorkbox = require('next-workbox')

module.exports = withWorkbox({
    workbox: {
      // https://github.com/ragingwind/next-workbox-webpack-plugin#usage
      ...webpackOptions,
      // register server worker script with default value or your own content
      registerSW: true // boolean or string
    }
})
```

## Register server worker

To register service worker script generated by workbox, you must call service worker APIs at your application. There are many ways out there, but you can use our solution to achieve in convinience way. first is declaring `<ServiceWoerk>` component to the class derived from `Document` (for more information about custom `Document` component, please visit [official document](https://github.com/zeit/next.js/#custom-document)). For example,

```js
import Document, {Head, Main, NextScript} from 'next/document'
import flush from 'styled-jsx/server'
import ServiceWorker from 'next-workbox/service-worker'

export default class extends Document {
	render() {
		return (
			<html lang="en">
				<Head/>
				<body>
					<Main />
					<NextScript />
          <ServiceWorker
              src={'/sw.js'}
              scope={'/'}
              unregister={process.env.NODE_ENV !== 'production'}
          />
				</body>
			</html>
		)
	}
}
```

alternative method is that you can set the option to append register service worker code into main chunk of your application. you can config at next.config.js with `registerSW`. `registerSW` could be accepted string content of your own service worker regster script. For instance,

```js
// next.config.js
const withWorkbox = require('next-workbox')

module.exports = withWorkbox({
  workbox: {
    registerSW: true
  }
})
```

or with string content

```js
// next.config.js
const withWorkbox = require('next-workbox')

module.exports = withWorkbox({
  workbox: {
    registerSW: readFileSync('./register-sw.js')
  }
})
```

## Default src and scope of service worker

This plugin doesn't allow you to change src and scope of service worker. we will use default path and scope, under `static/workbox`, which generated by this plugin. So, http server must set additional http header `'Service-Worker-Allowed', '/'` to cache the files on the root. Here is the sample code for that.

```js
app.prepare().then(() => {
  createServer((req, res) => {
    if (req.url.startsWith('/static/')) {
      res.setHeader('Service-Worker-Allowed', '/')
      app.serveStatic(req, res, join(root, `.${req.url}`))
    } else {
      handle(req, res, req.url)
    }
  }).listen(port, err => {
    if (err) {
      throw err
    }
    console.log(`> Ready on http://localhost:${port}`)
  })
})
```

If you want to have changes of those, you can use your own regster script for. It's described below section.

## License

MIT © [Jimmy Moon](https://ragingwind.me)