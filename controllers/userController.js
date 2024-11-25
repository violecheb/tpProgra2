const db = require ('../database/models');
const bcryptjs = require('bcryptjs');

const userController = {
    register: function (req,res) {
        if (req.session.user != undefined) {
            return res.redirect('/products')
           } else {
            return res.render('register');
           }    
    },
    registerPost: function (req,res) {
        let errores = []  //Iniciamos un array vacio para almacenar mensajes de error
        let formulario = req.body //Obtenemos los datos del form
        //Validamos que los campos no esten vacios
        if (formulario.email == '') { 
            errores.push ('Debe ingresar un mail')
        }
        if (formulario.usuario == '') {
            errores.push('Debe ingresar un nombre de usuario')
        }
        if (formulario.contraseña == '') {
            errores.push('Debe ingresar una contraseña')
        } 
        //Si alguno de los campos esta vacio, entra al if.
        if (errores.length > 0) {
            let errorMensaje = ''; // Iniciamos una cadena vacia para contruir el mensaje final
            for (let i = 0; i < errores.length; i++) { //Recorremos el array de errores
                errorMensaje += errores[i] + '<br>'  //Cada mensaje de error se concatena en la cadena con un salto de linea
                
            }
            return res.send(errorMensaje)  //Enviamos el mensaje de error como respuesta al cliente
        }
        formulario.contraseña = bcryptjs.hashSync(formulario.contraseña,10)
        db.User.create(formulario)
        .then(function () {
            return res.redirect('/users/login')
        })
        .catch(function (error) {
            return res.send('Este mail ya esta registrado. Elija otro')
            
        })
        
    },
    login: function (req,res) {
       if (req.session.user != undefined) {
        return res.redirect('/products')
       } else {
        return res.render('login');
       }   

    },
    loginPost: function (req,res) {
        let formulario = req.body
        let errores = [];
        if(formulario.email == ""){
            errores.push("Debe ingresar un mail.");
        }

        if(formulario.contraseña == ""){
            errores.push("Debe ingresar una contraseña.")
        }

        if (errores.length > 0){ //Lo mismo que en register. lo usamos para poder enviar al cliente todos los errores especificos.
            let errorMensaje = "";
            for (let i =0; i < errores.length; i++){
                errorMensaje += errores[i] + "<br>" ;
            }
            return res.send(errorMensaje);
        }
                let filtrado = {
                    where: {email: formulario.email},}
                db.User.findOne(filtrado)
                .then(function (result) {
                    if (!result) {
                        return res.send('No existe un usuario con ese mail.')
                    }else{
                        let check = bcryptjs.compareSync(formulario.contraseña, result.contraseña)
                        if (check) {
                            req.session.user = result.dataValues;
                         return res.redirect('/products')
                        } else{
                            return res.send('La contraseña es incorrecta')
                        }
                    }    
                })
                .catch(function (error) {
                    console.log(error);
                    
                })
               
        },
    logout: function (req,res) { 
       req.session.destroy();
       return res.redirect ('/products')
    },
    perfil: function(req, res){
        let id = req.params.id;
        db.User.findByPk(id, {include: [
            {association: "products"}
        ]})
        .then(function(result){
            let products = result.products;
            return res.render("profile", {perfil: result, products: products})
        })
        .catch(function(err){
            return console.log(err)
        })
    }
}

module.exports = userController;