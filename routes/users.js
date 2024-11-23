var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Sufijos registro */
router.get('/register', userController.register);
router.post('/register', userController.registerPost);

/* Sufijos login */
router.get ('/login', userController.login);
router.post ('/login', userController.loginPost);

/* Sufijo logout*/
router.post('/logout', userController.logout)

/* ruta a perfil*/
router.get("/perfil/:id", userController.perfil)


module.exports = router;
