const db = require("../database/models");
const products = db.Product;
const op = db.Sequelize.Op;

let productController = {
    index: function(req,res) {
        products.findAll({include: [
            {association: "users"}
        ]}, 
        {order:[
            ["createdAt", "DESC"],
        ]})
        .then(function(result){
            return res.render("products", {products: result})
        })
        .catch(function(err){
            return console.log(err)
        })
    },
    detail: function(req,res) {
        let id = req.params.id;
        products.findByPk(id, {include: [
            {association: "users"}
        ]})
        .then(function(result){
            return res.render("product", {product: result})
        })
        .catch(function(err){
            return console.log(err)
        })
    },
    add: function(req,res) {
        res.send("hola")
    },
    search: function(req,res) {
        res.send(products)
    }
}

module.exports = productController;