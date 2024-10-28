import { Link, useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import CodeEditor from "../components/trucos/CodeEditor";
import Header from "../components/layout/Header";
import TestResults from "../components/trucos/TestResults";
import { trucosService } from "../services/trucosService";
import "../css/SolveTrick.css";

export default function SolveTrick() {
  const { id } = useParams(); // Para obtener el ID del truco de la URL
  const [truco, setTruco] = useState(null);
  const [rating, setRating] = useState(0);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(true);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [code, setCode] = useState("// Tu código aquí\n");
  const [testResults, setTestResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState(null);
  const popupRef = useRef(null);

  // Cargar datos del truco
  useEffect(() => {
    const cargarTruco = async () => {
      try {
        const trucoData = await trucosService.getTrucoById(id);
        setTruco(trucoData);

        // Si es tipo terrorífico, cargar los test cases
        if (trucoData.tipo_truco === "terrorifico") {
          const testData = await trucosService.getTestCases(id);
          // Aquí podrías guardar los test cases en un estado si los necesitas
        }
      } catch (err) {
        setError(err.message);
      }
    };

    if (id) {
      cargarTruco();
    }
  }, [id]);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const toggleAnimation = (event) => {
    event.stopPropagation();
    setIsAnimationPlaying(!isAnimationPlaying);
  };

  const showPopup = (event) => {
    event.stopPropagation();
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const handleMouseDown = (e) => {
    const popup = popupRef.current;
    let shiftX = e.clientX - popup.getBoundingClientRect().left;
    let shiftY = e.clientY - popup.getBoundingClientRect().top;

    const onMouseMove = (event) => {
      popup.style.left = `${event.pageX - shiftX}px`;
      popup.style.top = `${event.pageY - shiftY}px`;
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", onMouseMove);
      },
      { once: true }
    );
  };
  const handleRunTests = async () => {
    setIsRunning(true);
    try {
      const response = await trucosService.submitSolution(id, code);
      setTestResults({
        passed: response.success,
        results: response.results,
        message: response.message,
      });
    } catch (error) {
      setTestResults({
        passed: false,
        error: error.message,
      });
    } finally {
      setIsRunning(false);
    }
  };

  if (error) return <div>Error: {error}</div>;
  if (!truco) return <div>Cargando...</div>;

  return (
    <div className="bg-customDarkPurple text-white min-h-screen">
      <Header />
      <main className="container mx-auto">
        <div className="flex justify-around w-full bg-customePurple p-4">
          <div className="w-1/2">
            <h1 className="text-super font-creepster mb-6">
              {truco.titulo_truco}
            </h1>
            <p className="text-title3 mb-8">{truco.descripcion_truco}</p>
          </div>
          <div
            className={`w-1/2 relative h-64 overflow-hidden cursor-pointer ${
              isAnimationPlaying ? "" : "paused"
            }`}
            onClick={toggleAnimation}
          >
            <div className="flex flex-col space-y-4">
              <div className="rain-button bg-customDarkOrange px-6 py-2 shadow-lg rounded font-michroma text-title2">
                {truco.lenguaje_id}{" "}
                {/* Aquí deberías mostrar el nombre del lenguaje */}
              </div>
              <div className="rain-button bg-customDarkOrange px-6 py-2 shadow-lg rounded font-michroma text-title2">
                {truco.tipo_truco.toUpperCase()}
              </div>
              <button
                onClick={showPopup}
                className="rain-button bg-customGreen text-black px-6 py-2 shadow-lg rounded font-michroma text-title2 transition duration-200 hover:bg-green-700 hover:shadow-xl hover:text-white"
              >
                ¿Trato?
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-6 mt-8">
          {/* Challenge Area */}
          <div className="flex-1 bg-white text-black p-6 rounded flex flex-col justify-between">
            <div>
              <h2 className="text-title2 font-michroma mb-4">
                Descripción del Reto
              </h2>
              <div className="w-full h-72 border-2 border-gray-300 rounded mb-4 overflow-y-auto p-4">
                {/* Aquí va la descripción del reto y ejemplos */}
                <p className="mb-4">Implementa una función que...</p>
                <div className="bg-gray-100 p-4 rounded">
                  <h3 className="font-bold mb-2">Ejemplo:</h3>
                  <pre className="bg-gray-800 text-white p-2 rounded">
                    {`Input: [1, 2]\nExpected Output: 3`}
                  </pre>
                </div>
              </div>
            </div>
            <div>
              <div className="text-normal">Puntúa el ejercicio:</div>
              <div className="flex gap-2 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} onClick={() => handleRating(star)}>
                    <span
                      className={`text-3xl ${
                        rating >= star ? "text-customOrange" : "text-gray-400"
                      }`}
                    >
                      ★
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Response Area */}
          <div className="flex-1 bg-white text-black p-6 rounded">
            <h2 className="text-title2 font-michroma mb-4">Tu respuesta</h2>
            <CodeEditor
              language={truco.nombre_lenguaje}
              code={code}
              onChange={setCode}
            />
            {testResults && (
              <div className="mt-4">
                <h3 className="font-bold mb-2">Resultados:</h3>
                {testResults.results?.map((result, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded mb-2 ${
                      result.passed ? "bg-green-100" : "bg-red-100"
                    }`}
                  >
                    <p>Test {index + 1}:</p>
                    <p>Input: {result.input}</p>
                    <p>Expected: {result.expected}</p>
                    <p>Got: {result.got}</p>
                    {result.error && (
                      <p className="text-red-500">Error: {result.error}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
            <button
              onClick={handleRunTests}
              disabled={isRunning}
              className="bg-customGreen px-6 py-2 rounded font-michroma text-title2"
            >
              {isRunning ? "Ejecutando..." : "Ejecutar Código"}
            </button>
          </div>
        </div>
      </main>

      {isPopupVisible && (
        <div
          ref={popupRef}
          className="fixed top-1/3 left-1/3 bg-customPurple text-white p-20 rounded shadow-lg z-10 cursor-move"
          onMouseDown={handleMouseDown}
        >
          <div className="flex justify-between items-center mb-4">
            <p>Este es un trato especial para {truco.titulo_truco}</p>
            <button
              onClick={closePopup}
              className="text-xl top-2 right-2 absolute"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
