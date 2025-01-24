// src/components/challenges/TestResults.jsx
export default function TestResults({ results, isLoading }) {
    if (isLoading) {
      return (
        <div className="bg-orange-500 p-4 rounded-lg">
          <p>Ejecutando pruebas...</p>
        </div>
      );
    }
  
    if (!results) return null;
  
    return (
      <div className={`p-4 rounded-lg ${
        results.passed ? 'bg-green-500' : 'bg-red-500'
      } text-white`}>
        {results.passed ? (
          <p>¡Prueba exitosa!</p>
        ) : (
          <div>
            <p className="font-bold mb-2">Error:</p>
            <pre className="whitespace-pre-wrap">
              {results.error || 
               `Resultado esperado: ${results.expected}\nObtenido: ${results.result}`}
            </pre>
          </div>
        )}
      </div>
    );
  }