-- Insertar datos en la tabla Lenguaje si no existen
INSERT INTO Lenguaje (nombre_lenguaje) VALUES 
('Python'), ('JavaScript'), ('Java'), ('C++'), ('Ruby'), ('PHP'), ('Go'), ('Swift'), ('Kotlin'), ('C#')
ON DUPLICATE KEY UPDATE nombre_lenguaje = VALUES(nombre_lenguaje);

-- Insertar datos en la tabla Usuario si no existen
INSERT INTO Usuario (nombre_usuario, mail, contraseña, fecha_creacion) VALUES 
('kevin123', 'kevin@example.com', 'password123', '2024-10-26'),
('jose456', 'jose@example.com', 'password456', '2024-10-25'),
('luis789', 'luis@example.com', 'password789', '2024-10-24'),
('ana123', 'ana@example.com', 'password123', '2024-10-23'),
('maria456', 'maria@example.com', 'password456', '2024-10-22'),
('carlos789', 'carlos@example.com', 'password789', '2024-10-21'),
('sara123', 'sara@example.com', 'password123', '2024-10-20'),
('andres456', 'andres@example.com', 'password456', '2024-10-19'),
('lucia789', 'lucia@example.com', 'password789', '2024-10-18'),
('pedro123', 'pedro@example.com', 'password123', '2024-10-17')
ON DUPLICATE KEY UPDATE mail = VALUES(mail);

-- Insertar datos en la tabla Progreso_Usuario si no existen
INSERT INTO Progreso_Usuario (usuario_id, reto_completado, fecha_completado) VALUES 
(1, TRUE, '2024-10-26 12:30:00'),
(2, FALSE, NULL),
(3, TRUE, '2024-10-25 14:00:00'),
(4, TRUE, '2024-10-24 16:00:00'),
(5, FALSE, NULL),
(6, TRUE, '2024-10-23 10:00:00'),
(7, FALSE, NULL),
(8, TRUE, '2024-10-22 08:30:00'),
(9, FALSE, NULL),
(10, TRUE, '2024-10-21 13:15:00');

-- Insertar datos en la tabla Truco si no existen
INSERT INTO Truco (lenguaje_id, titulo_truco, descripcion_truco, tipo_truco, url_imagen) VALUES 
(1, 'Introducción a Python', 'Responde las preguntas básicas sobre Python.', 'facil', NULL),
(2, 'Variables en JavaScript', 'Elige las respuestas correctas sobre variables.', 'facil', NULL),
(3, 'Condicionales en Java', 'Pregunta sobre el uso de condicionales en Java.', 'intermedio', 'url_imagen1.jpg'),
(4, 'Bucles en C++', 'Completa el código para bucles en C++.','intermedio', 'url_imagen2.jpg'),
(5, 'Clases en Ruby', 'Define la estructura de clases en Ruby.', 'terrorifico', NULL),
(6, 'Manejo de datos en PHP', 'Escribe código para manejo de datos.', 'terrorifico', NULL),
(7, 'Funciones en Go', 'Pregunta sobre funciones básicas en Go.', 'facil', NULL),
(8, 'Arrays en Swift', 'Completa el código para arrays.', 'intermedio', 'url_imagen3.jpg'),
(9, 'Manejo de excepciones en Kotlin', 'Escribe el manejo de excepciones.', 'terrorifico', NULL),
(10, 'Eventos en C#', 'Pregunta sobre eventos en C#.', 'facil', NULL)
ON DUPLICATE KEY UPDATE descripcion_truco = VALUES(descripcion_truco);

-- Insertar datos en la tabla Opcion_Respuesta si no existen
INSERT INTO Opcion_Respuesta (truco_id, texto_opcion, es_correcto) VALUES 
(1, 'Opción A', TRUE),
(1, 'Opción B', FALSE),
(1, 'Opción C', FALSE),
(1, 'Opción D', FALSE),
(2, 'Opción A', FALSE),
(2, 'Opción B', TRUE),
(2, 'Opción C', FALSE),
(2, 'Opción D', FALSE),
(3, 'Opción A', FALSE),
(3, 'Opción B', FALSE),
(3, 'Opción C', TRUE),
(3, 'Opción D', FALSE),
(4, 'Opción A', TRUE),
(4, 'Opción B', FALSE),
(4, 'Opción C', FALSE),
(4, 'Opción D', FALSE);

-- Insertar datos en la tabla Test si no existen
INSERT INTO Test (truco_id, test_json) VALUES 
(5, '{"input": "class MyClass { }", "output": "Expected class structure"}'),
(6, '{"input": "function fetchData()", "output": "Returns JSON data"}'),
(9, '{"input": "try { } catch() { }", "output": "Exception handling"}');

-- Insertar datos en la tabla Trato (Recompensas) si no existen
INSERT INTO Trato (truco_id, titulo_trato, url_imagen, texto_contenido, enlace_tutorial, enlace_curso, descripcion_tutorial, descripcion_curso) VALUES 
(1, 'Recompensa texto', 'url_imagen1.jpg', 'Bien hecho en el reto fácil.', NULL, NULL, NULL, NULL),
(3, 'Tutorial de YouTube', 'url_imagen2.jpg', NULL, 'https://youtube.com/tutorial1', NULL, 'Tutorial sobre Java.', NULL),
(5, 'Curso Gratuito', 'url_imagen3.jpg', NULL, NULL, 'https://curso.com/curso1', NULL, 'Curso avanzado sobre Ruby.')
ON DUPLICATE KEY UPDATE texto_contenido = VALUES(texto_contenido);
