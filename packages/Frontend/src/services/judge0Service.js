// src/services/judge0Service.js
import axios from 'axios';

const judge0 = axios.create({
    baseURL: 'https://judge0-ce.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': 'fac126be81msh45ed25068c0698ep1a13a7jsn3e04ca609393',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
    }
});

const JAVASCRIPT_ID = 63; // Solo usaremos JavaScript

const wrapUserCode = (code, input) => {
    return `
    ${code}
    
    // Código de prueba
    async function runTest() {
        try {
            const input = ${JSON.stringify(input)};
            const functionName = ${getFunctionName(code)};
            const result = await functionName(...(Array.isArray(input) ? input : [input]));
            console.log(JSON.stringify(result));
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
    
    runTest();
    `;
};

const getFunctionName = (code) => {
    // Buscar la declaración de función (normal o async)
    const match = code.match(/(?:async\s+)?function\s+(\w+)/);
    return match ? match[1] : null;
};

export const executeCode = async (code, testCase) => {
    if (!testCase || !testCase.test_json) {
        throw new Error('No hay casos de prueba disponibles para este reto');
    }

    try {
        const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        const testData = typeof testCase.test_json === 'string'
            ? JSON.parse(testCase.test_json)
            : testCase.test_json;

        console.log('Test data:', testData); // Para debugging

        // Envolver el código del usuario
        const wrappedCode = wrapUserCode(code, testData.input);

        // Crear submission
        const { data: submission } = await judge0.post('/submissions', {
            source_code: wrappedCode,
            language_id: JAVASCRIPT_ID,
            stdin: '', // Input ya está en el código envuelto
            expected_output: testData.expectedOutput.toString()
        });

        await wait(2000);

        // Obtener resultado
        const { data: result } = await judge0.get(`/submissions/${submission.token}`);

        return {
            passed: result.stdout?.trim() === testData.expectedOutput.toString(),
            input: testData.input,
            expected: testData.expectedOutput,
            got: result.stdout?.trim(),
            error: result.stderr || result.compile_output || null,
            description: testData.description
        };

    } catch (error) {
        console.error('Error en executeCode:', error);
        throw error;
    }
};

// Función auxiliar para obtener una plantilla según el ID del truco
export const getCodeTemplate = (trucoId) => {
    const templates = {
        21: `async function fetchData(url) {
    // Implementa una función que:
    // 1. Use fetch para obtener datos de la URL
    // 2. Convierta la respuesta a JSON
    // 3. Retorne el array de datos
}`,
        22: `async function asyncOperation() {
    // Implementa una función que:
    // 1. Use async/await
    // 2. Simule una operación asíncrona
    // 3. Retorne "completed"
}`,
        23: `function createMultiplier(n) {
    // Implementa un closure que:
    // 1. Reciba un número n
    // 2. Retorne una función que multiplique su input por n
}`,
        // ... más plantillas según necesites
        default: `// Tu código aquí
function solucion(input) {
    // Implementa tu solución
}`
    };

    return templates[trucoId] || templates.default;
};