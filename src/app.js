import './database'
const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const path = require('path')
const resolve = path.resolve

class App {
  constructor() {
    this.app = express()

    this.app.use(cors())
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json())

    this.app.use(
      '/product-file',
      express.static(resolve(__dirname, '..', 'uploads'))
    )

    this.app.use(
      '/category-file',
      express.static(resolve(__dirname, '..', 'uploads'))
    )
  }

  routes() {
    this.app.use(routes)
  }
}

export default new App().app
