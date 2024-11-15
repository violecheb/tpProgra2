const db = require("../database/models");
const productos = db.Producto;
const op = db.Sequelize.Op;

let productController = {
    index: function(req,res) {
        productos.findAll()
        .then(function(result){
            return res.render("products", {products: result})
        })
        .catch(function(err){
            return console.log(err)
        })
    },
    detail: function(req,res) {
        let id = req.params.id;
        productos.findByPk(id)
        .then(function(result){
            return res.send(result)
        })
        .catch(function(err){
            return console.log(err)
        })
    },
    add: function(req,res) {
        res.send("hola")
    },
    search: function(req,res) {
        res.send(productos)
    }
}

module.exports = productController;