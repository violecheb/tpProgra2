module.exports = function(sequelize, DataTypes) {
    let alias = 'Producto';
    let columns= {
        id_producto: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        id_delUsuario: {
            type: dataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'usuarios', //PREGUNTAR
                key: 'id_delUsuario',
            }
        },
        imagen_producto: {
            type: dataTypes.TEXT,
        }, 
        nombre: {
            type: dataTypes.STRING(70),
        },
        descripcion: {
            type: dataTypes.STRING(200),
        },
        createdAt: {
            type: dataTypes.DATE,
            field: 'createdAt'
        },
        updatedAt: {
            type: dataTypes.DATE,
            field: 'updatedAt'
        },
        deletedAt: {
            type: dataTypes.DATE,
            field: 'deletedAt'
        },
    };
    let config = {
        tableName: 'productos', 
        timestamps: true, 
        underscored: true, 
    };

    const Producto= sequelize.define(alias, cols, config);

    Producto.associate = function(models){
        Producto.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'id_delUsuario', 
        }); 
    };
    return Producto; 
}; 