module.exports = function(sequelize, DataTypes){
    let alias= "Usuario";
    let cols= {
        id_usuario: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        nombre: {
            type: DataTypes.STRING(100)
        },
        email: {
            type: DataTypes.STRING(100)
        }, 
        contra: {
            type: DataTypes.STRING(100)
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'createdAt'
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updatedAt'
        },
        deletedAt: {
            type: DataTypes.DATE,
            field: 'deletedAt'
        }
    };
    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: true
    };
    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models){
        Usuario.hasMany(models.Producto, {
            as: "producto",
            foreignKey: "id_usuario"
        })
    };


    return Usuario; 

}