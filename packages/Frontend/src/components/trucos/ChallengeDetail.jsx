// src/pages/challenges/ChallengeDetail.jsx
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CodeEditor from '../../components/trucos/CodeEditor';
import TestResults from '../../components/trucos/TestResults';

export default function ChallengeDetail() {
  const { id } = useParams();
  const [code, setCode] = useState('// Tu código aquí\n');
  const [testResults, setTestResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRunTests = async () => {
    setIsLoading(true);
    try {
      // Aquí irá la llamada al backend
      // Por ahora simulamos
      await new Promise(resolve => setTimeout(resolve, 1000));
      setTestResults({
        passed: true,
        result: "Test pasado"
      });
    } catch (error) {
      setTestResults({
        passed: false,
        error: error.message
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-purple-800">
      <div className="container mx-auto py-8 px-4">
        {/* Descripción del reto */}
        <div className="bg-orange-500 rounded-lg p-8 mb-8">
          <h1 className="font-creepster text-[45px] mb-4">
            Reto Terrorífico: {id}
          </h1>
          <div className="mb-4">
            <h2 className="font-bold mb-2">Descripción:</h2>
            <p>Implementa una función que...</p>
          </div>
          <div className="bg-orange-400 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Ejemplos:</h3>
            <pre className="bg-gray-800 text-white p-2 rounded">
              {`Input: [1, 2]\nExpected Output: 3`}
            </pre>
          </div>
        </div>

        {/* Editor y Resultados */}
        <div className="grid grid-cols-2 gap-8">
          <CodeEditor 
            language="javascript"
            code={code}
            onChange={setCode}
          />
          
          <div className="bg-orange-500 rounded-lg p-4">
            <h2 className="font-creepster text-[34px] mb-4">Resultados</h2>
            <TestResults 
              results={testResults}
              isLoading={isLoading}
            />
            
            <div className="flex gap-4 mt-4">
              <button
                onClick={handleRunTests}
                disabled={isLoading}
                className="bg-lime-400 px-6 py-2 rounded-lg hover:bg-lime-500 text-black font-bold disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Probando...' : 'Probar Código'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}