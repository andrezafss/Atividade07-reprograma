const restaurantes = require("../model/restaurantes.json");

const getAll = (req, res) => {
    console.log(req.url);
    res.send(restaurantes);
}

module.exports = { getAll };