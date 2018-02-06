require('dotenv').config()
const express = require('express')
const path = require('path')
const expressHandlebars = require('express-handlebars')
const cors = require('cors')
const httpProxyMiddleware = require('http-proxy-middleware')

const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const compiler = webpack(require('../webpack.config.js')())


const app = express()
const router = new express.Router()

app.engine('.html', expressHandlebars({
    extname: '.html',
    defaultLayout: 'main'
}))
app.set('view engine', '.html')
app.use(cors())
app.use('/images', express.static(path.join(__dirname, './../images')))
app.use(middleware(compiler, {
    publicPath: '/dist/'
}))
app.use('/__service/parity/v1', httpProxyMiddleware({
    target: process.env['JSONRPC_HOSTNAME'],
    auth: `${process.env['JSONRPC_USERNAME']}:${process.env['JSONRPC_PASSWORD']}`,
    changeOrigin: true
}))
app.use(router)

router.get('/', (req, res) => res.render('index'))

const listener = app.listen(process.env.PORT || 3000, err => {
    if (err) throw err
    const {address,port} = listener.address()
    console.info(`Serving on ${address} ${port}.`)
})
