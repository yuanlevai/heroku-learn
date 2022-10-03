const express = require('express')
const router = require('./route')
const app = express()

const host = "0.0.0.0";
const port = process.env.PORT;

app.get('/', function (req, res) {
    res.json({
        host,
        port
    })
})

// ini cara pakai router yg didefinisikan di route.js
app.use(router)

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})