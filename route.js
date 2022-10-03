const express = require('express')
const router = express.Router()

router.get('/time', function (req, res) {
    res.json({
        message: new Date().toISOString()
    })
})

// contoh cara akses->  http://localhost:8080/info/hitung-luas?p=5&l=2
router.get('/hitung-luas', function (req, res) {
    let panjang = parseInt(req.query["p"])
    let lebar  = parseInt(req.query["l"])

    let luas = panjang * lebar

    res.json({
        message: `luas persegi panjang: ${luas}`
    })
})


module.exports = router