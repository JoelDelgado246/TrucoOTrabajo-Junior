-- Crear la base de datos si no existe y usarla
CREATE DATABASE IF NOT EXISTS PlataformaTrucoTrato;
USE PlataformaTrucoTrato;
-- Crear tabla Lenguaje si no existe
CREATE TABLE IF NOT EXISTS Lenguaje (
    lenguaje_id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_lenguaje VARCHAR(40) NOT NULL
);
-- Crear tabla Truco (Retos) si no existe
CREATE TABLE IF NOT EXISTS Truco (
    truco_id INT PRIMARY KEY AUTO_INCREMENT,
    lenguaje_id INT,
    titulo_truco VARCHAR(50) NOT NULL,
    descripcion_truco TEXT NOT NULL,
    tipo_truco ENUM('facil', 'intermedio', 'terrorifico') NOT NULL,
    intrucciones_truco TEXT,
    url_imagen VARCHAR(70),
    FOREIGN KEY (lenguaje_id) REFERENCES Lenguaje(lenguaje_id)
);
-- Crear tabla Opcion_Respuesta si no existe
CREATE TABLE IF NOT EXISTS Opcion_Respuesta (
    opcion_id INT PRIMARY KEY AUTO_INCREMENT,
    truco_id INT NOT NULL,
    texto_opcion VARCHAR(100) NOT NULL,
    es_correcto BOOLEAN NOT NULL,
    FOREIGN KEY (truco_id) REFERENCES Truco(truco_id)
);

-- Crear tabla Trato (Recompensas) si no existe
CREATE TABLE IF NOT EXISTS Trato (
    trato_id INT PRIMARY KEY AUTO_INCREMENT,
    truco_id INT NOT NULL,
    titulo_trato VARCHAR(40) NOT NULL,
    url_imagen VARCHAR(70),
    texto_contenido TEXT,
    enlace_tutorial VARCHAR(100),
    enlace_curso VARCHAR(100),
    descripcion_tutorial TEXT,
    descripcion_curso TEXT,
    FOREIGN KEY (truco_id) REFERENCES Truco(truco_id)
);

CREATE TABLE IF NOT EXISTS PreguntaImagen (
    pregunta_id INT PRIMARY KEY AUTO_INCREMENT,
    truco_id INT NOT NULL,
    url_imagen VARCHAR(255) NOT NULL,
    espacio_completar VARCHAR(100) NOT NULL,
    FOREIGN KEY (truco_id) REFERENCES Truco(truco_id)
);
-- DROP TABLE IF EXISTS Comentario;
-- DROP TABLE IF EXISTS Trato;
-- DROP TABLE IF EXISTS Test;
-- DROP TABLE IF EXISTS Opcion_Respuesta;
-- DROP TABLE IF EXISTS Truco;
-- DROP TABLE IF EXISTS Lenguaje;