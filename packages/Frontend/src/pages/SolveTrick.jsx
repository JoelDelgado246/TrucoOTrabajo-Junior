import { Link, useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Header from "../components/layout/Header";
import TestResults from "../components/trucos/TestResults";
import MultipleChoice from "../components/trucos/MultipleChoice";
import { trucosService } from "../services/trucosService";
import ImageQuestion from "../components/trucos/ImageQuestion";
import "../css/SolveTrick.css";

export default function SolveTrick() {
  const { id } = useParams(); // Para obtener el ID del truco de la URL
  const [truco, setTruco] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(true);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showTrato, setShowTrato] = useState(false);
  const [error, setError] = useState(null);
  const popupRef = useRef(null);
  // Añadir al principio del componente
  const [tratoGuardado, setTratoGuardado] = useState(
    localStorage.getItem(`trato_${id}`) || null
  );

  // Cargar datos del truco
  useEffect(() => {
    const cargarTruco = async () => {
      try {
        setLoading(true);
        // Usar el query parameter para obtener un truco específico
        const response = await trucosService.getAllTrucos({ id });
        console.log("Truco recibido:", response); // Para debugging
        setTruco(response);
      } catch (err) {
        console.error("Error al cargar el truco:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      cargarTruco();
    }
  }, [id]);

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

  // Función para manejar la puntuación
  const handleRating = async (rate) => {
    setRating(rate);
    try {
      // Aquí puedes agregar la llamada al backend para guardar la puntuación
      await trucosService.guardarPuntuacion(id, rate);
    } catch (error) {
      console.error("Error al guardar puntuación:", error);
    }
  };

  const handleSubmitAnswer = async (opcionId) => {
    if (!opcionId) return;

    setIsLoading(true);
    try {
      // Buscar la opción seleccionada en las opciones del truco
      const opcionSeleccionada = truco.opciones.find(
        (opcion) => opcion.id === opcionId
      );

      if (opcionSeleccionada) {
        setTestResults({
          passed: opcionSeleccionada.esCorrecto,
          message: opcionSeleccionada.esCorrecto
            ? "¡Respuesta correcta!"
            : "Respuesta incorrecta. ¡Inténtalo de nuevo!",
        });

        if (opcionSeleccionada.esCorrecto) {
          // Guardar en localStorage que el truco fue completado
          localStorage.setItem(`truco_completado_${id}`, "true");
          setShowTrato(true);
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setTestResults({
        passed: false,
        message: "Error al verificar la respuesta",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageAnswer = async (answer) => {
    if (!answer) return;

    setIsLoading(true);
    try {
      // Verificar si la respuesta coincide con espacio_completar
      const isCorrect =
        answer.trim().toLowerCase() ===
        truco.preguntaImagen.respuestaCorrecta.toLowerCase();

      setTestResults({
        passed: isCorrect,
        message: isCorrect
          ? "¡Correcto! Has completado el código correctamente."
          : "Incorrecto. Intenta de nuevo.",
      });

      if (isCorrect) {
        localStorage.setItem(`truco_completado_${id}`, "true");
        setShowTrato(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setTestResults({
        passed: false,
        message: "Error al verificar la respuesta",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Modificar la función que maneja el éxito de la solución
  const handleSuccess = (result) => {
    setTestResults(result);
    if (result.success) {
      // Guardar el trato en localStorage
      localStorage.setItem(
        `trato_${id}`,
        JSON.stringify({
          tratoId: truco.trato?.trato_id,
          completadoEn: new Date().toISOString(),
        })
      );
      setTratoGuardado(true);
      setShowTrato(true);
    }
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!truco) return <div>No se encontró el truco</div>;

  return (
    <div className="bg-customDarkPurple text-white min-h-screen">
      <Header />
      <main className="container mx-auto">
        <div className="flex justify-around w-full bg-customePurple p-4">
          <div className="w-1/2">
            <div className="flex items-center gap-4">
              <h1 className="text-super font-creepster mb-6">
                {truco?.titulo}
              </h1>
              {tratoGuardado && (
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  Completado
                </span>
              )}
            </div>
            {/* Descripción */}
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-2">Descripción:</h3>
              <p>{truco?.descripcion}</p>
            </div>
          </div>

          <div
            className={`w-1/2 relative h-64 overflow-hidden cursor-pointer ${
              isAnimationPlaying ? "" : "paused"
            }`}
            onClick={toggleAnimation}
          >
            <div className="flex flex-col space-y-4">
              <div className="rain-button bg-customDarkOrange px-6 py-2 shadow-lg rounded font-michroma text-title2">
                {truco.lenguaje_id || "JS"}
              </div>
              <div className="rain-button bg-customDarkOrange px-6 py-2 shadow-lg rounded font-michroma text-title2">
                {truco.dificultad || "Dificultad"}
              </div>
              <div className="rain-button bg-customDarkOrange px-6 py-2 shadow-lg rounded font-michroma text-title2">
                Categoría
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
              <div className="w-full h-72 border-2 border-gray-300 rounded mb-4 overflow-y-auto p-4">
                {/* Instrucciones */}
                {truco?.instrucciones && (
                  <div className="mb-6">
                    <h3 className="font-bold text-lg mb-2">Instrucciones:</h3>
                    <p>{truco.instrucciones}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sistema de puntuación */}
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

            {truco.dificultad === "terrorifico" ? (
              // Para trucos terroríficos (preguntas con imagen)
              <ImageQuestion
                imageUrl={truco.preguntaImagen?.url}
                onSubmit={handleImageAnswer}
              />
            ) : (
              // Para trucos fáciles e intermedios (opción múltiple)
              <MultipleChoice
                opciones={truco.opciones}
                onSubmit={handleSubmitAnswer}
              />
            )}

            {testResults && (
              <div
                className={`mt-4 p-4 rounded ${
                  testResults.passed ? "bg-green-100" : "bg-red-100"
                }`}
              >
                <p>{testResults.message}</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Modal de Trato */}
      {showTrato && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md text-black">
            <h3 className="text-xl font-bold mb-4">¡Felicitaciones!</h3>
            <p className="mb-4">Has completado el reto exitosamente.</p>

            {/* Link provisional o mensaje */}
            <p className="mb-4">
              Tu recompensa está esperando en la sección de tratos.
            </p>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowTrato(false)}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
              >
                Cerrar
              </button>
              <Link
                to="/tratos"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Ver Recompensa
              </Link>
            </div>
          </div>
        </div>
      )}

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
