CREATE SCHEMA proyectoIntegrador;
USE proyectoIntegrador;

/*TABLA USUARIOS*/
CREATE TABLE usuarios (
    id_usuario INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    email VARCHAR(100),
    contra VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL
);

/*TABLA PRODUCTOS*/
CREATE TABLE productos (
    id_producto INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_delUsuario INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_delUsuario) REFERENCES usuarios(id_usuario),
    imagen_producto TEXT,
    nombre VARCHAR(70),
    descripcion VARCHAR(200),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL
);



/*USUARIOS*/
INSERT INTO usuarios
VALUES (DEFAULT, "agustina", "agustinaschvartzberg@gmail.com", "Hola12", NULL, NULL, NULL);

INSERT INTO usuarios
VALUES (DEFAULT, "delfina", "delfinamasri@gmail.com", "Chau12", NULL, NULL, NULL);

INSERT INTO usuarios
VALUES (DEFAULT, "violeta", "violecheb@gmail.com", "Adios12", NULL, NULL, NULL);

INSERT INTO usuarios
VALUES (DEFAULT, "agus", "agusschv@gmail.com", "Bonjour12", NULL, NULL, NULL);

INSERT INTO usuarios
VALUES (DEFAULT, "delfina", "delfinamasri@gmail.com", "Hello12", NULL, NULL, NULL);



/*PRODUCTOS*/
INSERT INTO productos
VALUES (DEFAULT, 1, "https://http2.mlstatic.com/D_NQ_NP_643641-MLU74717350223_022024-O.webp", "Paleta Dior", "producto multiusos que combina iluminador y colorete", NULL, NULL, NULL);

INSERT INTO productos
VALUES (DEFAULT, 3, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoBTYNQFPK4Z0XPlyU8hhZv6AVc521JK1wLw&s", "Polvo compacto Chanel", "diseñado para suavizar, matificar y definir la piel con una textura ligera y de larga duración. ", NULL, NULL, NULL);

INSERT INTO productos
VALUES (DEFAULT, 1, "https://http2.mlstatic.com/D_NQ_NP_643641-MLU74717350223_022024-O.webp", "Dyson Airwrap", "El único moldeador multifunción que seca, riza, da forma y elimina el encrespamiento con el efecto Coanda.", NULL, NULL, NULL);

INSERT INTO productos
VALUES (DEFAULT, 4, "https://www.valentino-beauty.es/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-val-master-catalog/default/dwc5592c66/images/pdp/MPL01076/3614273218047/Valentino-Very-Valentino-Foundation-LIGR1-3614273218047-Front.jpg?sw=270&sh=270&sm=cut&sfrm=jpg&q=70", "Base Valentino", "es un producto que se aplica en el rostro para crear una base uniforme y ayudar a que la piel luzca mejor", NULL, NULL, NULL);

INSERT INTO productos
VALUES (DEFAULT, 5, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaCbu5pkmqx5QfAFOB3-WDwH-kBLxmqjMMDw&s", "Mascara Lancome", "es un cosmético usado para oscurecer, espesar, curvar y definir las pestañas.", NULL, NULL, NULL);

