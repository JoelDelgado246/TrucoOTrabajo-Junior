// src/services/judge0Service.js
import axios from 'axios';

const judge0 = axios.create({
    baseURL: 'https://judge0-ce.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': 'fac126be81msh45ed25068c0698ep1a13a7jsn3e04ca609393',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
    }
});

// Mapeo de lenguajes a IDs de Judge0
const LANGUAGE_IDS = {
    'JavaScript': 63,
    'Python': 71,
    'Java': 62,
    'C++': 54,
    'Ruby': 72,
    'PHP': 68,
    'Go': 60,
    'Swift': 83,
    'Kotlin': 78,
    'C#': 51
};

export const executeCode = async (code, languageName, input = '') => {
    try {
        const languageId = LANGUAGE_IDS[languageName];

        // Añadir delay entre peticiones
        const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        // Crear submission
        const { data: submission } = await judge0.post('/submissions', {
            source_code: code,
            language_id: languageId,
            stdin: input
        });

        // Esperar un poco antes de pedir el resultado
        await wait(2000);

        // Esperar resultado
        const { data: result } = await judge0.get(`/submissions/${submission.token}`);
        return result;
    } catch (error) {
        if (error.response?.status === 429) {
            throw new Error('Demasiadas peticiones. Por favor, espera un momento y vuelve a intentar.');
        }
        throw error;
    }
};