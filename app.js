const express = require('express');
const cors = require('cors');
const users = require('./static/users.json')

const app = express();
app.use(cors())
app.get('/users', cors(),(req, res) => {
    res.json({
        users
    })
})
app.listen(2020, () => {
    console.log('server is listening on port 2020')
})