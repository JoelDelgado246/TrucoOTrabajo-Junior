-- Insertar datos en la tabla Lenguaje si no existen
INSERT INTO Lenguaje (nombre_lenguaje) VALUES
('JavaScript');

INSERT INTO Truco (lenguaje_id, titulo_truco, descripcion_truco, tipo_truco, intrucciones_truco) VALUES
-- Trucos fáciles (preguntas de opción múltiple sobre conceptos básicos de JS)
(1, 'Operador Suma', 'Este ejercicio introduce el operador de suma en JavaScript, explicando cómo se utiliza para realizar operaciones aritméticas básicas entre dos números.', 'facil', 'Elige el operador de suma.'),
(1, 'Función para invertir cadena', 'Este ejercicio enseña cómo manipular cadenas en JavaScript, específicamente cómo invertir una cadena de texto utilizando métodos de string y array.', 'facil', 'Elige el método para invertir.'),
(1, 'Método array length', 'Este ejercicio explica cómo obtener el tamaño de un array en JavaScript, presentando el método más común para medir la longitud de un array.', 'facil', 'Selecciona la propiedad de tamaño.'),
(1, 'Convertir string a mayúsculas', 'Aquí aprenderás cómo convertir un string a mayúsculas en JavaScript, usando un método específico para transformar el texto.', 'facil', 'Elige el método para mayúsculas.'),
(1, 'Reemplazar palabra en string', 'En este ejercicio aprenderás a reemplazar partes de un string, lo cual es útil para editar y actualizar contenido de texto.', 'facil', 'Elige el método de reemplazo.'),
(1, 'Verificar número par', 'Este ejercicio muestra cómo verificar si un número es par en JavaScript, usando operadores matemáticos para determinar el tipo de número.', 'facil', 'Selecciona el operador correcto.'),
(1, 'Buscar valor en array', 'Aprenderás cómo buscar un valor específico en un array en JavaScript, utilizando un método que facilita la búsqueda dentro del array.', 'facil', 'Elige el método de búsqueda.'),
(1, 'Redondear número', 'Este ejercicio te enseña a redondear números en JavaScript, lo cual es útil en casos donde necesitas números enteros en lugar de decimales.', 'facil', 'Selecciona el método de redondeo.'),
(1, 'Obtener tipo de dato', 'En este ejercicio descubrirás cómo obtener el tipo de un valor en JavaScript, lo cual es esencial para comprender el tipo de datos con los que trabajas.', 'facil', 'Elige la función de tipo.'),
(1, 'Eliminar último elemento de array', 'Este ejercicio muestra cómo eliminar el último elemento de un array, una operación común en la manipulación de listas de datos.', 'facil', 'Selecciona el método de eliminación.'),

-- Trucos intermedios (preguntas de opción múltiple sobre funciones y métodos en JS)
(1, 'Filtrar números pares en array', 'Aprenderás a filtrar elementos de un array en JavaScript, específicamente aquellos que cumplen la condición de ser números pares.', 'intermedio', 'Selecciona el método de filtro.'),
(1, 'Validar email con expresión regular', 'Este ejercicio introduce el uso de expresiones regulares en JavaScript para validar el formato de una dirección de correo electrónico.', 'intermedio', 'Elige la opción para validar email.'),
(1, 'Ordenar array en orden ascendente', 'En este ejercicio, aprenderás a ordenar los elementos de un array numérico en orden ascendente, usando un método de ordenación específico.', 'intermedio', 'Elige el método de ordenación.'),
(1, 'Eliminar duplicados en array', 'Este ejercicio te enseña a eliminar elementos duplicados en un array, lo cual es útil para tener listas únicas en JavaScript.', 'intermedio', 'Selecciona el método para duplicados.'),
(1, 'Generar número aleatorio', 'En este ejercicio, aprenderás a generar números aleatorios en JavaScript, lo cual es útil para simular comportamientos de azar.', 'intermedio', 'Elige la función de aleatorio.'),
(1, 'Convertir string a array de palabras', 'Aprenderás cómo dividir un string en palabras individuales para crear un array, una técnica útil en la manipulación de cadenas.', 'intermedio', 'Selecciona el método de división.'),
(1, 'Sumar elementos de un array', 'Este ejercicio te enseña a sumar todos los elementos de un array de números, lo cual es útil en operaciones matemáticas con listas.', 'intermedio', 'Elige la función para sumar.'),
(1, 'Crear función de flecha', 'Aquí aprenderás la sintaxis de las funciones de flecha en JavaScript, una forma moderna y simplificada de definir funciones.', 'intermedio', 'Elige la sintaxis de flecha.'),
(1, 'Obtener índice de un valor', 'Este ejercicio te muestra cómo encontrar el índice de un elemento dentro de un array en JavaScript, usando un método de búsqueda de índice.', 'intermedio', 'Elige el método de índice.'),
(1, 'Combinar dos arrays', 'Este ejercicio enseña a combinar dos arrays en JavaScript, creando un solo array con todos los elementos.', 'intermedio', 'Selecciona el método de combinación.');


-- Trucos difíciles (ejercicios de programación en JS) VER ABAJO

-- Insertar datos en la tabla Opcion_Respuesta si no existen
INSERT INTO Opcion_Respuesta (truco_id, texto_opcion, es_correcto) VALUES
-- Opciones para trucos fáciles
(1, 'Operador +', true), (1, 'Operador -', false), (1, 'Operador *', false), (1, 'Operador /', false),
(2, 'Usar split y reverse', true), (2, 'Usar toUpperCase', false), (2, 'Concatenar', false), (2, 'Eliminar espacios', false),
(3, 'array.length', true), (3, 'array.size', false), (3, 'array.count', false), (3, 'array.items', false),
(4, 'string.toUpperCase()', true), (4, 'string.toLowerCase()', false), (4, 'string.trim()', false), (4, 'string.concat()', false),
(5, 'string.replace()', true), (5, 'string.split()', false), (5, 'string.match()', false), (5, 'string.indexOf()', false),
(6, 'number % 2 === 0', true), (6, 'number / 2 === 0', false), (6, 'number > 2', false), (6, 'number + 2 === 0', false),
(7, 'array.includes(value)', true), (7, 'array.push(value)', false), (7, 'array.pop()', false), (7, 'array.shift()', false),
(8, 'Math.round()', true), (8, 'Math.ceil()', false), (8, 'Math.floor()', false), (8, 'Math.trunc()', false),
(9, 'typeof variable', true), (9, 'instanceof variable', false), (9, 'variable.length', false), (9, 'variable.size()', false),
(10, 'array.pop()', true), (10, 'array.push()', false), (10, 'array.unshift()', false), (10, 'array.shift()', false),

-- Opciones para trucos intermedios
(11, 'array.filter()', true), (11, 'array.map()', false), (11, 'array.reduce()', false), (11, 'array.forEach()', false),
(12, 'Usar expresión regular', true), (12, 'Transformar a minúsculas', false), (12, 'Aplicar trim()', false), (12, 'Usar alert()', false),
(13, 'array.sort()', true), (13, 'array.reverse()', false), (13, 'array.pop()', false), (13, 'array.push()', false),
(14, 'new Set(array)', true), (14, 'array.concat()', false), (14, 'array.shift()', false), (14, 'array.splice()', false),
(15, 'Math.random()', true), (15, 'Math.floor()', false), (15, 'Math.ceil()', false), (15, 'Math.trunc()', false),
(16, 'string.split(" ")', true), (16, 'string.trim()', false), (16, 'string.concat()', false), (16, 'string.match()', false),
(17, 'array.reduce()', true), (17, 'array.filter()', false), (17, 'array.map()', false), (17, 'array.forEach()', false),
(18, '() => {}', true), (18, 'function () {}', false), (18, 'var fn = function () {}', false), (18, 'return () => {}', false),
(19, 'array.indexOf(value)', true), (19, 'array.pop()', false), (19, 'array.shift()', false), (19, 'array.push()', false),
(20, 'array.concat()', true), (20, 'array.slice()', false), (20, 'array.shift()', false), (20, 'array.splice()', false);

INSERT INTO Trato (truco_id, titulo_trato, texto_contenido, enlace_tutorial, enlace_curso) VALUES
-- Tratos para trucos fáciles (justificación de solución)
(1, 'Solución para operador suma', 'Usa el operador + para sumar.', NULL, NULL),
(2, 'Justificación para invertir cadena', 'Utiliza split(), reverse() y join() para invertir la cadena.', NULL, NULL),
(3, 'Explicación sobre longitud de array', 'Usa array.length para obtener el tamaño de un array.', NULL, NULL),
(4, 'Justificación de convertir a mayúsculas', 'Usa el método string.toUpperCase() para convertir a mayúsculas.', NULL, NULL),
(5, 'Guía para reemplazar palabras en string', 'Usa el método string.replace() para reemplazar una palabra en un string.', NULL, NULL),
(6, 'Método para verificar número par', 'Usa number % 2 === 0 para verificar si un número es par.', NULL, NULL),
(7, 'Búsqueda de valor en array', 'Usa array.includes(value) para buscar un valor en un array.', NULL, NULL),
(8, 'Guía sobre redondeo de números', 'Usa Math.round() para redondear un número.', NULL, NULL),
(9, 'Justificación para tipo de dato', 'Usa typeof variable para obtener el tipo de un valor.', NULL, NULL),
(10, 'Método para eliminar último elemento', 'Usa array.pop() para eliminar el último elemento.', NULL, NULL),

-- Tratos para trucos intermedios (links a tutoriales)
(11, 'Tutorial sobre filter', NULL, 'https://www.youtube.com/watch?v=O3Ht2uejzfM', NULL),
(12, 'Video sobre validación de emails', NULL, 'https://www.youtube.com/watch?v=KHhzhz_P-DU', NULL),
(13, 'Tutorial sobre ordenamiento de arrays', NULL, 'https://www.youtube.com/watch?v=YIZWGn13RCE', NULL),
(14, 'Video sobre eliminación de duplicados', NULL, 'https://www.youtube.com/watch?v=8bKgnQ6R_so', NULL),
(15, 'Tutorial sobre números aleatorios', NULL, 'https://www.youtube.com/watch?v=O3jqCWBAaWI', NULL),
(16, 'División de strings en array', NULL, 'https://www.youtube.com/watch?v=ytiJepCBH88', NULL),
(17, 'Video sobre reduce()', NULL, 'https://www.youtube.com/watch?v=VVySn87s8Eo', NULL),
(18, 'Tutorial sobre funciones de flecha', NULL, 'https://www.youtube.com/watch?v=HVEkbCZAuqA', NULL),
(19, 'Método indexOf en arrays', NULL, 'https://www.youtube.com/watch?v=sPARBxtkvXU', NULL),
(20, 'Combinación de arrays en JS', NULL, 'https://www.youtube.com/shorts/CPUDbksJajw', NULL),

-- Tratos para trucos difíciles (links a cursos gratuitos)
(21, 'Curso de JavaScript [Gratis y Certificado]', NULL, NULL, 'https://edutin.com/curso-de-javascript'),
(22, 'Curso de JavaScript desde Cero - Aprende JavaScript', NULL, NULL, 'https://www.youtube.com/watch?v=v8Evfd6AFpw'),
(23, 'Aprende JavaScript Ahora! curso completo desde cero para principiantes', NULL, NULL, 'https://www.youtube.com/watch?v=QoC4RxNIs5M'),
(24, 'Curso JavaScript #01: Aprende los fundamentos de programación', NULL, NULL, 'https://www.youtube.com/watch?v=sYqn4lhcMZE'),
(25, 'Curso de JAVASCRIPT desde CERO (Completo) - Nivel JUNIOR', NULL, NULL, 'https://www.youtube.com/watch?v=z95mZVUcJ-E'),

INSERT INTO Truco (lenguaje_id, titulo_truco, descripcion_truco, tipo_truco, intrucciones_truco) VALUES
(1, 'Suma de Números Pares en un Array', 'Este ejercicio enseña a trabajar con arrays y aplicar métodos como filter y reduce para sumar elementos específicos de un array.', 'terrorifico', 'Completa la palabra faltante para filtrar los números pares y luego sumarlos.'),
(1, 'Invertir Palabras en una Frase', ' Este ejercicio permite practicar la manipulación de cadenas y el uso de métodos de arrays para transformar una frase, invirtiendo cada palabra en su lugar', 'terrorifico', 'Completa la palabra faltante para invertir el orden de las letras en cada palabra.'),
(1, 'Contar Ocurrencias de Caracteres', 'Este ejercicio permite trabajar con objetos y loops para contar la frecuencia de cada carácter en una cadena dada.', 'terrorifico', 'Completa la palabra faltante para verificar si el carácter ya está en el objeto ocurrencias.');
(1, 'Filtrar Palabras Únicas de un Array', 'Este ejercicio enseña el uso de la estructura Set para eliminar duplicados en un array.', 'terrorifico', 'Completa la palabra faltante para convertir el Set en un array de palabras únicas.'),
(1, 'Ordenar un Array de Objetos por Propiedad', 'Este ejercicio enseña a ordenar un array de objetos usando el método sort basándose en una propiedad específica.', 'terrorifico', 'Completa la palabra faltante para que el array se ordene por la propiedad indicada.'),


INSERT INTO PreguntaImagen (truco_id, url_imagen, espacio_completar) VALUES
(21, 'https://imgur.com/a/mhmWHMf', 'filter'),
(22, 'https://imgur.com/a/bjuHJ6f', 'map'),
(23, 'https://imgur.com/a/vNoTDSO', '1');
(24, 'https://imgur.com/a/VMlfYjI', '...'),
(25, 'https://imgur.com/a/haM2Pcf', 'propiedad'),
