// src/components/trucos/ImageQuestion.jsx
import { useState } from "react";

export default function ImageQuestion({ imageUrl, onSubmit }) {
  const [answer, setAnswer] = useState("");

  return (
    <div className="space-y-4">
      <div className="border-2 border-gray-200 rounded-lg p-4">
        <img src={imageUrl} alt="Código a completar" className="w-full mb-4" />

        <div className="flex gap-2">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Completa el código..."
            className="flex-1 p-2 border-2 border-gray-300 rounded focus:border-purple-500 outline-none"
          />

          <button
            onClick={() => onSubmit(answer)}
            disabled={!answer.trim()}
            className={`px-4 py-2 rounded ${
              !answer.trim()
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-customGreen text-black hover:bg-green-600 hover:text-white"
            }`}
          >
            Verificar
          </button>
        </div>
      </div>
    </div>
  );
}
