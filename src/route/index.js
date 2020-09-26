const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: "Lista de restaurantes",
        data: "20/09/2020"
    })
})

module.exports = router;