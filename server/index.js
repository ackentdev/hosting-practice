require('dotenv').config();
const express = require('express')
const {SERVER_PORT} = process.env;
const {getData} = require('./controller')

const app = express();

app.use(express.json());

app.get('/api/movies', getData)

app.listen(SERVER_PORT, () => console.log(`server listening on port ${SERVER_PORT}`))