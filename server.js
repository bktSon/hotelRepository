'use strict'
const express    = require('express')
const app        = express()
const router     = require('./Http/router/router')
const bodyParser = require('body-parser')

app.use(bodyParser.json({type: 'application/json'}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)
app.listen(3000)
