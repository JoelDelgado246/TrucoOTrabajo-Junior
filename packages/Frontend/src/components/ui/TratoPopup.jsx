import React from "react";

export default function TratoPopup({ trato, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-customOrange p-6 rounded-lg max-w-md text-black">
        <h3 className="text-title1 font-creepster">{trato.titulo_trato}</h3>
        <p className="mb-4 text-title3 font-michroma">
          {trato.texto_contenido}
        </p>
        <div className="flex justify-between">
          {trato.enlace_tutorial && (
            <a
              href={trato.enlace_tutorial}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-customGreen text-black font-creepster text-title3 px-4 py-2 rounded"
            >
              Ver Tutorial
            </a>
          )}
          {trato.enlace_curso && (
            <a
              href={trato.enlace_curso}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-customGreen text-black font-creepster text-title3 px-4 py-2 rounded"
            >
              Ver Curso
            </a>
          )}
          <button
            onClick={onClose}
            className="bg-customDarkPurple text-white text-title3 font-michroma px-4 py-2 rounded"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
