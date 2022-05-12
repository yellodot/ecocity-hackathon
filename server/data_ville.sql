CREATE DATABASE villesvertes;

USE villevertes;

CREATE TABLE ville (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom VARCHAR(100) NOT NULL,
    img VARCHAR(255),
    traitement_dechet INT NOT NULL,
    espace_vert INT NOT NULL,
    qualite_eau VARCHAR(100),
    piste_cyclable INT,
    transports VARCHAR(100),
    budget INT,
    qualite_air VARCHAR(100),
    label VARCHAR(255),
    nb_habitant INT NOT NULL,
    bobo_compatible TINYINT    
);

