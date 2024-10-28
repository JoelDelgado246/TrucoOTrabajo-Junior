// src/pages/challenges/ChallengeDetail.jsx
import { useParams } from "react-router-dom";
import Header from "../../components/layout/Header";

export default function ChallengeDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      <Header />

      <main className="bg-purple-800 min-h-screen py-12 px-6">
        <div className="container mx-auto">
          {/* Encabezado del reto */}
          <div className="bg-orange-500 rounded-lg p-8 mb-8">
            <h1 className="font-creepster text-[45px] mb-4">TÍTULO DEL RETO</h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-orange-400 text-black px-4 py-1 rounded-lg">
                JS
              </span>
              <span className="text-lime-400 font-creepster">FÁCIL</span>
            </div>
            <p className="text-black">Descripción detallada del reto...</p>
          </div>

          {/* Contenido del reto */}
          <div className="grid grid-cols-2 gap-8">
            {/* Instrucciones */}
            <div className="bg-orange-500 rounded-lg p-8">
              <h2 className="font-creepster text-[34px] mb-4">INSTRUCCIONES</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Paso 1...</li>
                <li>Paso 2...</li>
                <li>Paso 3...</li>
              </ul>
            </div>

            {/* Editor/Solución */}
            <div className="bg-orange-500 rounded-lg p-8">
              <h2 className="font-creepster text-[34px] mb-4">TU SOLUCIÓN</h2>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-white">
                  <code>
                    function tuSolucion(){" "}
                    {
                      // Código aquí
                    }
                  </code>
                </pre>
              </div>
              <button className="bg-purple-800 text-white font-creepster px-6 py-2 rounded-lg mt-4 hover:bg-purple-900">
                PROBAR SOLUCIÓN
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
