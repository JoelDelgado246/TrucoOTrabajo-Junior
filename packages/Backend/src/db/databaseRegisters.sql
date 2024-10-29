-- Insertar datos en la tabla Lenguaje si no existen
INSERT INTO Lenguaje (nombre_lenguaje) VALUES
('JavaScript');

INSERT INTO Truco (lenguaje_id, titulo_truco, descripcion_truco, tipo_truco, intrucciones_truco) VALUES
-- Trucos fáciles (preguntas de opción múltiple sobre conceptos básicos de JS)
(1, 'Operador Suma', 'Pregunta sobre el operador de suma en JS.', 'facil', '¿Qué operador se utiliza para sumar dos números en JS?'),
(1, 'Función para invertir cadena', 'Pregunta sobre cómo invertir una cadena en JS.', 'facil', 'Selecciona la opción que invierte una cadena en JS.'),
(1, 'Método array length', 'Pregunta sobre cómo obtener el tamaño de un array en JS.', 'facil', '¿Qué propiedad se usa para obtener el tamaño de un array?'),
(1, 'Convertir string a mayúsculas', 'Pregunta sobre cómo convertir un string a mayúsculas.', 'facil', 'Selecciona el método correcto para convertir un string a mayúsculas.'),
(1, 'Reemplazar palabra en string', 'Pregunta sobre cómo reemplazar una palabra en un string.', 'facil', '¿Qué método se utiliza para reemplazar texto en un string?'),
(1, 'Verificar número par', 'Pregunta sobre cómo verificar si un número es par en JS.', 'facil', '¿Cómo puedes verificar si un número es par?'),
(1, 'Buscar valor en array', 'Pregunta sobre cómo buscar un valor en un array.', 'facil', 'Selecciona el método que busca un valor en un array.'),
(1, 'Redondear número', 'Pregunta sobre redondear números en JS.', 'facil', '¿Cuál es el método para redondear un número?'),
(1, 'Obtener tipo de dato', 'Pregunta sobre cómo obtener el tipo de dato en JS.', 'facil', '¿Cómo se obtiene el tipo de un valor en JS?'),
(1, 'Eliminar último elemento de array', 'Pregunta sobre cómo eliminar el último elemento de un array.', 'facil', 'Selecciona el método que elimina el último elemento de un array.'),

-- Trucos intermedios (preguntas de opción múltiple sobre funciones y métodos en JS)
(1, 'Filtrar números pares en array', 'Pregunta sobre cómo filtrar números pares de un array.', 'intermedio', '¿Qué método se usa para filtrar solo los números pares de un array?'),
(1, 'Validar email con expresión regular', 'Pregunta sobre validar un formato de email.', 'intermedio', 'Selecciona la opción que valida un email con expresión regular.'),
(1, 'Ordenar array en orden ascendente', 'Pregunta sobre cómo ordenar un array.', 'intermedio', '¿Qué método se utiliza para ordenar un array de números?'),
(1, 'Eliminar duplicados en array', 'Pregunta sobre cómo eliminar duplicados de un array.', 'intermedio', 'Selecciona el método correcto para eliminar duplicados.'),
(1, 'Generar número aleatorio', 'Pregunta sobre generar números aleatorios.', 'intermedio', '¿Qué función genera un número aleatorio en JS?'),
(1, 'Convertir string a array de palabras', 'Pregunta sobre convertir un string a un array.', 'intermedio', 'Selecciona el método para dividir un string en palabras.'),
(1, 'Sumar elementos de un array', 'Pregunta sobre sumar elementos de un array.', 'intermedio', '¿Qué método suma todos los elementos de un array?'),
(1, 'Crear función de flecha', 'Pregunta sobre cómo definir una función de flecha.', 'intermedio', '¿Cuál es la sintaxis para una función de flecha?'),
(1, 'Obtener índice de un valor', 'Pregunta sobre cómo obtener el índice de un valor en un array.', 'intermedio', 'Selecciona el método que devuelve el índice de un valor.'),
(1, 'Combinar dos arrays', 'Pregunta sobre cómo combinar arrays.', 'intermedio', 'Selecciona el método para combinar dos arrays en JS.'),

-- Trucos difíciles (ejercicios de programación en JS)
(1, 'Async/Await para función asíncrona', 'Implementa una función con async/await.', 'terrorifico', 'Escribe una función que utilice async/await para manejar operaciones asíncronas.'),
(1, 'Uso de Fetch API', 'Utiliza Fetch API para obtener datos de una URL.', 'terrorifico', 'Implementa una función para obtener datos de una URL con Fetch API.'),
(1, 'Closures en JavaScript', 'Explica y usa closures en JS.', 'terrorifico', 'Escribe un ejemplo que muestre el uso de closures.'),
(1, 'Explicación del Event Loop', 'Describe cómo funciona el Event Loop.', 'terrorifico', 'Implementa un ejemplo que explique el Event Loop en JS.'),
(1, 'Implementación de debounce y throttle', 'Implementa debounce y throttle en funciones.', 'terrorifico', 'Escribe dos funciones para debounce y throttle.'),
(1, 'Manipulación de elementos DOM', 'Crea y edita elementos en el DOM.', 'terrorifico', 'Escribe un script que manipule elementos del DOM.'),
(1, 'Herencia y Prototype en JS', 'Usa prototype para crear herencia.', 'terrorifico', 'Implementa herencia usando prototype.'),
(1, 'Callback Hell y Promesas', 'Evita el callback hell usando promesas.', 'terrorifico', 'Convierte callbacks a promesas para evitar callback hell.'),
(1, 'Currying en JavaScript', 'Aplica currying en funciones.', 'terrorifico', 'Implementa currying en una función.'),
(1, 'Memoización para optimizar funciones', 'Usa memoización para optimizar rendimiento.', 'terrorifico', 'Implementa memoización en una función.');


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
(11, 'Tutorial sobre filter', NULL, 'https://www.youtube.com/watch?v=filtered-arrays', NULL),
(12, 'Video sobre validación de emails', NULL, 'https://www.youtube.com/watch?v=email-validation', NULL),
(13, 'Tutorial sobre ordenación de arrays', NULL, 'https://www.youtube.com/watch?v=sorting-array', NULL),
(14, 'Video sobre eliminación de duplicados', NULL, 'https://www.youtube.com/watch?v=remove-duplicates', NULL),
(15, 'Tutorial sobre números aleatorios', NULL, 'https://www.youtube.com/watch?v=random-numbers', NULL),
(16, 'División de strings en array', NULL, 'https://www.youtube.com/watch?v=split-strings', NULL),
(17, 'Video sobre reduce()', NULL, 'https://www.youtube.com/watch?v=array-reduce', NULL),
(18, 'Tutorial sobre funciones de flecha', NULL, 'https://www.youtube.com/watch?v=arrow-functions', NULL),
(19, 'Método indexOf en arrays', NULL, 'https://www.youtube.com/watch?v=indexof-method', NULL),
(20, 'Combinación de arrays en JS', NULL, 'https://www.youtube.com/watch?v=concat-arrays', NULL),

-- Tratos para trucos difíciles (links a cursos gratuitos)
(21, 'Curso sobre async/await', NULL, NULL, 'https://www.coursera.org/learn/async-await'),
(22, 'Curso gratuito sobre Fetch API', NULL, NULL, 'https://www.coursera.org/learn/fetch-api'),
(23, 'Curso sobre closures en JS', NULL, NULL, 'https://www.coursera.org/learn/closures'),
(24, 'Curso sobre Event Loop en JS', NULL, NULL, 'https://www.coursera.org/learn/event-loop'),
(25, 'Curso sobre debounce y throttle', NULL, NULL, 'https://www.coursera.org/learn/debounce-throttle'),
(26, 'Curso sobre manipulación DOM', NULL, NULL, 'https://www.coursera.org/learn/dom-manipulation'),
(27, 'Curso sobre Prototype y herencia', NULL, NULL, 'https://www.coursera.org/learn/js-prototype'),
(28, 'Curso sobre Promesas y callback hell', NULL, NULL, 'https://www.coursera.org/learn/promises-callback'),
(29, 'Curso sobre currying en JavaScript', NULL, NULL, 'https://www.coursera.org/learn/currying-js'),
(30, 'Curso sobre memoización en JS', NULL, NULL, 'https://www.coursera.org/learn/memoization');

-- Insertar datos en la tabla Test si no existen
INSERT INTO Test (truco_id, test_json) VALUES
-- Tests para trucos fáciles
(1, '{"input": [3, 5], "expectedOutput": 8, "description": "Operador de suma"}'),
(2, '{"input": ["hello"], "expectedOutput": "olleh", "description": "Invertir cadena"}'),
(3, '{"input": [[1, 2, 3]], "expectedOutput": 3, "description": "Longitud de array"}'),
(4, '{"input": ["hello"], "expectedOutput": "HELLO", "description": "Convertir a mayúsculas"}'),
(5, '{"input": ["hola mundo"], "expectedOutput": "mundo", "description": "Reemplazar palabra en string"}'),
(6, '{"input": [4], "expectedOutput": true, "description": "Número par"}'),
(7, '{"input": [[1, 2, 3]], "expectedOutput": true, "description": "Buscar en array"}'),
(8, '{"input": [4.6], "expectedOutput": 5, "description": "Redondear número"}'),
(9, '{"input": [true], "expectedOutput": "boolean", "description": "Obtener tipo de dato"}'),
(10, '{"input": [[1, 2, 3]], "expectedOutput": [1, 2], "description": "Eliminar último elemento"}'),

-- Tests para trucos intermedios
(11, '{"input": [[1, 2, 3, 4]], "expectedOutput": [2, 4], "description": "Filtrar pares"}'),
(12, '{"input": ["test@example.com"], "expectedOutput": true, "description": "Validar email"}'),
(13, '{"input": [[3, 1, 4, 2]], "expectedOutput": [1, 2, 3, 4], "description": "Ordenar array"}'),
(14, '{"input": [[1, 1, 2, 3]], "expectedOutput": [1, 2, 3], "description": "Eliminar duplicados"}'),
(15, '{"input": [], "expectedOutput": 0.5, "description": "Número aleatorio"}'),
(16, '{"input": ["one two"], "expectedOutput": ["one", "two"], "description": "String a array"}'),
(17, '{"input": [[1, 2, 3]], "expectedOutput": 6, "description": "Sumar elementos"}'),
(18, '{"input": [], "expectedOutput": "() => {}", "description": "Función de flecha"}'),
(19, '{"input": [[1, 2, 3]], "expectedOutput": 1, "description": "Índice de valor"}'),
(20, '{"input": [[1, 2], [3, 4]], "expectedOutput": [1, 2, 3, 4], "description": "Concatenar arrays"}'),

-- Tests para trucos difíciles
(21, '{"input": ["https://jsonplaceholder.typicode.com/posts"], "expectedOutput": "Array", "description": "Fetch API con async/await"}'),
(22, '{"input": [], "expectedOutput": "completed", "description": "Ejemplo de función async/await"}'),
(23, '{"input": [5], "expectedOutput": 10, "description": "Closure que multiplica el número"}'),
(24, '{"input": [], "expectedOutput": "Event Loop explicado", "description": "Ejemplo de Event Loop en acción"}'),
(25, '{"input": [300], "expectedOutput": "debounced", "description": "Función con debounce"}'),
(26, '{"input": ["<div id=\'app\'></div>"], "expectedOutput": "<div id=\'app\'><p>Hello World</p></div>", "description": "Manipulación básica del DOM"}'),
(27, '{"input": [{ "type": "Animal" }, { "type": "Dog" }], "expectedOutput": "Dog inherits from Animal", "description": "Prototype y Herencia en JS"}'),
(28, '{"input": [], "expectedOutput": "Promesa completada", "description": "Ejemplo de Promesa para evitar callback hell"}'),
(29, '{"input": [3], "expectedOutput": "function(a)(b)(c)", "description": "Aplicación de currying en función"}'),
(30, '{"input": [5], "expectedOutput": 120, "description": "Cálculo factorial con memoización"}');


-- Insertar datos en la tabla Trato (Recompensas) si no existen
INSERT INTO Trato (truco_id, titulo_trato, url_imagen, texto_contenido, enlace_tutorial, enlace_curso, descripcion_tutorial, descripcion_curso) VALUES 
(1, 'Recompensa texto', 'url_imagen1.jpg', 'Bien hecho en el reto fácil.', NULL, NULL, NULL, NULL),
(3, 'Tutorial de YouTube', 'url_imagen2.jpg', NULL, 'https://youtube.com/tutorial1', NULL, 'Tutorial sobre Java.', NULL),
(5, 'Curso Gratuito', 'url_imagen3.jpg', NULL, NULL, 'https://curso.com/curso1', NULL, 'Curso avanzado sobre Ruby.')
ON DUPLICATE KEY UPDATE texto_contenido = VALUES(texto_contenido);

INSERT INTO Comentario (truco_id, contenido) VALUES
-- Comentarios para trucos fáciles
(1, 'Este truco fue muy fácil de resolver. Me ayudó a entender la suma en JavaScript.'),
(2, 'Invertir una cadena es más sencillo de lo que pensé. ¡Gracias!'),
(3, 'La propiedad length es fundamental para trabajar con arrays.'),
(4, '¡Muy útil! Ahora sé cómo convertir texto a mayúsculas.'),
(5, 'El método replace fue fácil de aprender y aplicar.'),
(6, 'Este truco me ayudó a recordar cómo identificar números pares.'),
(7, 'La búsqueda en arrays con includes fue más fácil de lo que esperaba.'),
(8, 'Redondear números en JS es muy útil para mis cálculos.'),
(9, 'Aprender a usar typeof fue realmente práctico.'),
(10, 'Aprendí a eliminar el último elemento de un array con pop().'),

-- Comentarios para trucos intermedios
(11, 'El método filter es excelente para trabajar con arrays.'),
(12, 'Ahora sé cómo validar correos con expresiones regulares.'),
(13, 'Ordenar arrays fue complicado al principio, pero entendí con este truco.'),
(14, 'Eliminar duplicados en un array me resultó muy útil.'),
(15, 'El método Math.random() es ideal para crear números aleatorios.'),
(16, 'Dividir una cadena en palabras usando split fue muy sencillo.'),
(17, 'Aprendí a sumar elementos de un array con reduce.'),
(18, 'Las funciones de flecha son muy prácticas en JavaScript.'),
(19, 'Conocer indexOf fue útil para encontrar posiciones en un array.'),
(20, 'Concatenar arrays es más sencillo con concat.'),

-- Comentarios para trucos difíciles
(21, 'Entender async/await cambió mi forma de trabajar con código asíncrono.'),
(22, 'Usar Fetch API es esencial para trabajar con datos externos.'),
(23, 'Los closures son complejos, pero este truco me aclaró el concepto.'),
(24, 'El Event Loop es difícil de entender, pero fue útil aprenderlo.'),
(25, 'Implementar debounce y throttle mejoró el rendimiento de mi aplicación.'),
(26, 'Manipular el DOM directamente me ayudó a comprender mejor la estructura.'),
(27, 'La herencia con prototype es clave para estructurar el código en JS.'),
(28, 'Aprender a evitar el callback hell fue fundamental para simplificar mi código.'),
(29, 'El currying me parece una técnica poderosa para funciones en JS.'),
(30, 'La memoización optimizó el rendimiento en cálculos repetitivos.');