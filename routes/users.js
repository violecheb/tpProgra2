var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Rutas para el registro de usuarios */
router.get('/register', userController.register);
router.post('/register', userController.registerPost);

/* Rutas para inicio de sesión */
router.get ('/login', userController.login);
router.post ('/login', userController.loginPost);

/* Ruta para cerrar sesión */
router.post('/logout', userController.logout)

/* Ruta para el perfil del usuario */
router.get("/perfil/:id", userController.perfil)


module.exports = router;
