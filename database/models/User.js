module.exports = function(sequelize, dataTypes){
    let alias= "User";
    let cols= {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        usuario: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
        }, 
        contraseña: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        deletedAt: {
            type: dataTypes.DATE,
        }
    };
    let config = {
        tableName: "users",
        timestamps: true,
        underscored: false
    };
    let User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.hasMany(models.Product, {
            as: "products",
            foreignKey: "id_user"
        })
    };


    return User; 

}