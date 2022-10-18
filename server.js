const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./config/db');

const indexRoutes = require('./routes/post.routes');
const chatRoutes = require('./routes/chat.routes');

const app = express()

// * Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(express.json())


// * Routes
app.use('/post', indexRoutes)
app.use('/chat', chatRoutes)

// * DB
db
db.sync()

app.listen(3000, () => {
    console.log('http://localhost:3000');
})