// TODO: Server dist build.
// TODO: Discuss if we should proceed with babel-node or normal node
// TODO: SSR https://vuejs.org/v2/guide/ssr.html
// TODO: Figure out how to make the server startup faster (if possible).
import { resolve } from 'path'
import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = process.env.PORT || 3000

// Database
mongoose.connect('mongodb://localhost/spa')

// Models
// TODO: Auto load
require('./models/user.js')

// API
// TODO: Auto load
app.use(require('./api/user.js'))
app.use(require('./api/auth.js'))

// Development Server
// Note: We are using amd require for dynamic loading.
if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const webpackConfig = require('../webpack.config.babel.js').default
  const compiler = webpack(webpackConfig)
  const middleware = webpackDevMiddleware(compiler, webpackConfig.devServer)

  app.use(middleware)
  app.use(webpackHotMiddleware(compiler))
  app.get('*', (req, res) => {
    res.write(middleware.fileSystem.readFileSync(resolve(__dirname, '../client_dist/index.html')))
    res.end()
  })
} else {
  app.use(express.static('client_dist'))
  app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, 'client_dist/index.html'))
  })
}

// Start the server
app.listen(port, () => console.log(`Server up and running at http://localhost:${port}/`))
