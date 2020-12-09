require('dotenv').config();
const express = require('express')
const {SERVER_PORT} = process.env;
const {getData} = require('./controller')

const app = express();

const path = require('path');

app.use(express.static(`${__dirname}/../build`))
app.use(express.json());


app.get('/api/movies', getData)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
  })
  
app.listen(SERVER_PORT, () => console.log(`server listening on port ${SERVER_PORT}`))