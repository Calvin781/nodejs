const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
// Middleswares

app.use(cors());

app.use(bodyParser.json());
// Import Routes

const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');

app.use('/posts', postsRoute);
app.use('/users', usersRoute);
// ROUTES

app.get('/', (req, res) => {
    res.send('We are on Home');
});

// Connect To Db

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('Connected to DB!');
})
// start listen the server
app.listen(3000);
