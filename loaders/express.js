// const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

module.exports.init =  ( {app}) => {
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended:false }))
}