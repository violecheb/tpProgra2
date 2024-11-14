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
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'usuarios', //PREGUNTAR
                key: 'id_delUsuario',
            }
        },
        imagen_producto: {
            type: DataTypes.TEXT,
        }, 
        nombre: {
            type: DataTypes.STRING(70),
        },
        descripcion: {
            type: DataTypes.STRING(200),
        },
        createdAt: {
            type: dataTypes.DATE,
            field: 'createdAt'
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updatedAt'
        },
        deletedAt: {
            type: DataTypes.DATE,
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