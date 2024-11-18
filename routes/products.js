var express = require('express');
var router = express.Router();

let productController = require("../controllers/productController");

//home del sitio
router.get("/", productController.index);

//detalle producto
router.get("/detail/:id", productController.detail);

//agregar productos
router.get("/add", productController.addProduct);

// ruta por POST que procesa la información del formulario "agregar producto"
router.post("/store", productController.storeProduct)

//resultados de busqueda
router.get("/search", productController.search)

module.exports = router;

