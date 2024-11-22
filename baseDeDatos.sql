CREATE SCHEMA baseDeDatos;
USE baseDeDatos;

CREATE TABLE users (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    usuario VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL,
    contraseña VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    imagen TEXT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(300) NOT NULL,
    id_user INT UNSIGNED, FOREIGN KEY (id_user) REFERENCES users(id),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP 
);


/*USUARIOS*/
INSERT INTO users
VALUES (DEFAULT, "agustina", "agustinaschvartzberg@gmail.com", "Hola12", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO users
VALUES (DEFAULT,  "delfina", "delfinamasri@gmail.com", "Chau12", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO users
VALUES (DEFAULT,  "violeta","violecheb@gmail.com", "Adios12", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO users
VALUES (DEFAULT, "juan",  "juan@gmail.com", "Bonjour12", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO users
VALUES (DEFAULT,  "federico", "fede@gmail.com", "Hello12", DEFAULT, DEFAULT, DEFAULT);

/*PRODUCTOS*/
INSERT INTO products
VALUES (DEFAULT, "img-dior.jpg", "Paleta Dior", "Producto multiusos que combina iluminador y colorete", 1, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO products
VALUES (DEFAULT, "img-chanel.jpg", "Polvo compacto Chanel", "Diseñado para suavizar, matificar y definir la piel con una textura ligera y de larga duración. ", 2, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO products
VALUES (DEFAULT, "img-dyson.jpg", "Dyson Airwrap", "El único moldeador multifunción que seca, riza, da forma y elimina el encrespamiento con el efecto Coanda.", 3, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO products
VALUES (DEFAULT, "img-valentino.jpg", "Base Valentino", "Es un producto que se aplica en el rostro para crear una base uniforme y ayudar a que la piel luzca mejor", 4, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO products
VALUES (DEFAULT, "img-lancome.jpg", "Mascara Lancome", "Es un cosmético usado para oscurecer, espesar, curvar y definir las pestañas.", 5, DEFAULT, DEFAULT, DEFAULT);