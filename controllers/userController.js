const db = require ('../database/models');
const bcryptjs = require('bcryptjs');

const userController = {
    register: function (req,res) {
        if (req.session.user != undefined) {
            return res.redirect('/')
        }else{
            return res.render('register')
        }
    },
    registerPost: function (req,res) {
        let formulario = req.body
        formulario.contra = bcryptjs.hashSync(formulario.contra,10)

        db.Usuario.create(formulario)
        .then(function () {
            return res.redirect('/users/login')
        })
        .catch(function (error) {
            console.log(error);
            
        })
        
    },
    login: function (req,res) {
        if (req.session.user != undefined) {
            return res.redirect('/')
        }else{
            return res.render('login')
        }
    },
    loginPost: function (req,res) {
        let formulario = req.body
        if (formulario.email == "") {
            return res.send('La información en Email es incorrecta')
        } else{
            if (formulario.contra == "") {
                return res.send('La información de Contraseña es incorrecta')   
               }else{
                let filtrado = {
                    where: [{email: formulario.email},
                    {contra: formulario.contra}]
                }
                db.Usuario.findOne(filtrado)
                .then(function (result) {
                        let check = bcryptjs.compareSync(formulario.contra, result.contra)
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
       return res.redirect ('/') 
    }
}

module.exports = userController;