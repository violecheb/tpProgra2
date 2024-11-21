const db = require("../database/models");
const products = db.Product;
const users = db.User;
const op = db.Sequelize.Op;

let productController = {
    index: function(req,res) {
        products.findAll({include: [
            {association: "users"}
        ], order:[
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
    addProduct: function(req,res) {
        return res.render("addProduct")
    },
    storeProduct: function(req,res) {
        let form = req.body;
        console.log(form)
        userId = req.session.user.id; 
        if (form.imagen == "" || form.nombre == "" || form.desc == ""){
            return res.send("Todos los campos son obligatorios. Vuelva a completar el formulario") //preguntar si esta bien validado asi
        } else {
            products.create({
                imagen: form.imagen,
                nombre: form.nombre,
                descripcion: form.desc,
                id_user: userId
            })
            return res.redirect('/products');
        }
    },
    search: function(req,res){
        let search = req.query.search;
        products.findAll({include: [
            {association: "users"}
        ], where: [
                {nombre: {[op.like]:`%${search}%`}},
            ], order:[
                ["createdAt", "DESC"],
            ]})
        .then(function(result){
            return res.render("products", {products: result})
        })
        .catch(function(err){
            return console.log(err)
        })
    }
}

module.exports = productController;