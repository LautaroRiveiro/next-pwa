#!/usr/bin/env node

const {join} = require('path')
const {createServer} = require('http')
const next = require('next')

const app = next({dev: process.env.NODE_ENV !== 'production'})
const handle = app.getRequestHandler()
const port = Number.parseInt(process.argv.pop().split('=')[1] || 3000)
const root = process.cwd()

app.prepare().then(() => {
    createServer((req, res) => {
        if (req.url.startsWith('/static/')) {
            if (req.url.endsWith('/sw.js') || req.url.endsWith('/OneSignalSDKWorker.js')) {
                res.setHeader('Service-Worker-Allowed', '/')
            }
            app.serveStatic(req, res, join(root, `.${req.url}`))
        } else if (req.url.includes('/OneSignalSDKWorker.js')) {
            res.setHeader('Service-Worker-Allowed', '/')
            app.serveStatic(req, res, join(root, `/static/OneSignalSDKWorker.js`))
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
