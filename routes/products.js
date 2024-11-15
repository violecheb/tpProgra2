var express = require('express');
var router = express.Router();

let productController = require("../controllers/productController");

//home del sitio
router.get("/", productController.index);

//detalle producto
router.get("/detail/:id", productController.detail);

//agregar productos
router.get("/add", productController.add);

//search
router.get("/search", productController.search);

module.exports = router;

