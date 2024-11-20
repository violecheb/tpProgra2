module.exports = function(sequelize, dataTypes) {
    let alias = 'Product';
    let cols= {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        }, 
        id_user: {
            type: dataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'users', 
                key: 'id',
            }
        },
        imagen: {
            type: dataTypes.STRING,
            allowNull: false,
        }, 
        nombre: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
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
        },
    };
    let config = {
        tableName: 'products', 
        timestamps: true, 
        underscored: false, 
    };

    let Product= sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'id_user', 
        }); 
    };
    return Producto; 
}; 