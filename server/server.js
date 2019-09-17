require('./config/config')

const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')
const {ObjectId} = require('mongodb')

var {mongoose} = require ('./db/mongoose')
var {User} = require('./models/user')

var app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

// test
app.get('', (req, res) => {
    res.send('Hello there!')
})

// POST users
app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password'])
    var user = new User(body)

    console.log(body)

    user.save().then(() => {
        res.send('User created')
    }).catch((e) => {
        res.status(400).send(e)
    })
})

// GET users
app.get('/users', (req, res) => {
    
})

app.listen(port, () => {
    console.log('Listening on port ' + port)
})