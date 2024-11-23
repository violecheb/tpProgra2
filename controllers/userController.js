const db = require ('../database/models');
const bcryptjs = require('bcryptjs');

const userController = {
    register: function (req,res) {
            return res.render('register')
    },
    registerPost: function (req,res) {
        let errores = []
        let formulario = req.body
        formulario.contraseña = bcryptjs.hashSync(formulario.contraseña,10)
        if (formulario.email == '') {
            errores.push ('Debe ingresar un mail')
        }
        if (formulario.usuario == '') {
            errores.push('Debe ingresar un nombre de usuario')
        }
        if (formulario.contraseña == '') {
            errores.push('Debe ingresar una contraseña')
        }
        if (errores.length > 0) {
            let errorMensaje = '';
            for (let i = 0; i < errores.length; i++) {
                errorMensaje += errores[i] + '<br>'
                
            }
            return res.send(errorMensaje)
        }
        db.User.create(formulario)
        .then(function () {
            return res.redirect('/users/login')
        })
        .catch(function (error) {
            return res.send('Este mail ya esta registrado. Elija otro')
            
        })
        
    },
    login: function (req,res) {
            return res.render('login')

    },
    loginPost: function (req,res) {
        let formulario = req.body
        if (formulario.email == "") {
            return res.send('La información en Email es incorrecta')
        } else{
            if (formulario.contraseña == "") {
                return res.send('La información de Contraseña es incorrecta')   
               }else{
                let filtrado = {
                    where: [{email: formulario.email},
                    {contra: formulario.contraseña}]
                }
                db.User.findOne(filtrado)
                .then(function (result) {
                        let check = bcryptjs.compareSync(formulario.contraseña, result.contraseña)
                        if (check) {
                            req.session.user = result.dataValues;
                         return res.redirect('/')
                        }
                
                })
                .catch(function (error) {
                    console.log(error);
                    
                })
               }
        }
               
    },
    logout: function (req,res) {
       req.session.destroy();
       return res.redirect ('/products') 
    }
}

module.exports = userController;