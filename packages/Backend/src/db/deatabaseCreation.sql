-- Crear la base de datos si no existe y usarla
CREATE DATABASE IF NOT EXISTS PlataformaTrucoTrato;
USE PlataformaTrucoTrato;

-- Crear tabla Lenguaje si no existe
CREATE TABLE IF NOT EXISTS Lenguaje (
    lenguaje_id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_lenguaje VARCHAR(40) NOT NULL
);

-- Crear tabla Usuario si no existe
CREATE TABLE IF NOT EXISTS Usuario (
    usuario_id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_usuario VARCHAR(50) NOT NULL,
    mail VARCHAR(50) NOT NULL,
    contraseña VARCHAR(40) NOT NULL,
    fecha_creacion DATE NOT NULL
);

-- Crear tabla Progreso_Usuario si no existe
CREATE TABLE IF NOT EXISTS Progreso_Usuario (
    progreso_id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    reto_completado BOOLEAN NOT NULL,
    fecha_completado TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(usuario_id)
);

-- Crear tabla Truco (Retos) si no existe
CREATE TABLE IF NOT EXISTS Truco (
    truco_id INT PRIMARY KEY AUTO_INCREMENT,
    lenguaje_id INT,
    titulo_truco VARCHAR(50) NOT NULL,
    descripcion_truco TEXT NOT NULL,
    tipo_truco ENUM('facil', 'intermedio', 'terrorifico') NOT NULL,
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

-- Crear tabla Test si no existe
CREATE TABLE IF NOT EXISTS Test (
    test_id INT PRIMARY KEY AUTO_INCREMENT,
    truco_id INT NOT NULL,
    test_json JSON NOT NULL,
    FOREIGN KEY (truco_id) REFERENCES Truco(truco_id)
);

-- Crear tabla Trato (Recompensas) si no existe
CREATE TABLE IF NOT EXISTS Trato (
    trato_id INT PRIMARY KEY AUTO_INCREMENT,
    truco_id INT NOT NULL,
    titulo_trato VARCHAR(40) NOT NULL,
    url_imagen VARCHAR(70) NOT NULL,
    texto_contenido TEXT,
    enlace_tutorial VARCHAR(100),
    enlace_curso VARCHAR(100),
    descripcion_tutorial TEXT,
    descripcion_curso TEXT,
    FOREIGN KEY (truco_id) REFERENCES Truco(truco_id)
);

-- Crear tabla Comentario si no existe
CREATE TABLE IF NOT EXISTS Comentario (
    comentario_id INT PRIMARY KEY AUTO_INCREMENT,
    truco_id INT NOT NULL,
    usuario_id INT NOT NULL,
    contenido TEXT NOT NULL,
    fecha_comentario TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (truco_id) REFERENCES Truco(truco_id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(usuario_id) ON DELETE CASCADE
);
