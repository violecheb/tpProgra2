var express = require('express');
var router = express.Router();

let productController = require("../controllers/productController");

//home del sitio
router.get("/", productController.index);

//Ruta para mostrar el detalle de un producto
router.get("/detail/:id", productController.detail);

//Ruta para agregar un producto
router.get("/add", productController.addProduct);

//Ruta por POST que procesa la información del formulario "agregar producto"
router.post("/store", productController.storeProduct)

//Ruta para mostrar los resultados de búsqueda
router.get("/search", productController.search)

module.exports = router;

