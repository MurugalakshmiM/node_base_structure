const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const demoRouter = require('../routes/demo.routes')

module.exports.init =  ( {app}) => {

    let router = express.Router()
    app.use('/api',router)
    // console.log(demoRouter)
    demoRouter.init(router)
}