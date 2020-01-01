const express = require('express')
const next = require('next')
const fs = require('fs')

const port = parseInt(process.env.PORT, 10) || 3000
const env = process.env.NODE_ENV
const dev = env !== 'production'
const app = next({ dir: '.', dev })

const handle = app.getRequestHandler()

let server
app.prepare().then(() => {
  server = express()

  // 设置转发
  if (fs.existsSync('./proxy.js')) {

    const proxyConf = require('./proxy')
    const proxyMiddleware = require('http-proxy-middleware')
    Object.keys(proxyConf).forEach(function (context) {
      server.use(proxyMiddleware(context, proxyConf[context]))
    })
  }

  server.all('*', (req, res) => handle(req, res))

  server.listen(port, err => {
    if (err) {
      throw err
    }
    console.log(`server run on : http://localhost:${port}`)
    console.log(`environment is [${env}]`)
  })
})
  .catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })

