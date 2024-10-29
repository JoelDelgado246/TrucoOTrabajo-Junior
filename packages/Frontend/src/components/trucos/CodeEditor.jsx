import React from "react";
import PropTypes from "prop-types";
import Editor from "@monaco-editor/react";

const LANGUAGE_CONFIG = {
  JavaScript: "javascript",
  Python: "python",
  Java: "java",
  "C++": "cpp",
  Ruby: "ruby",
  PHP: "php",
  Go: "go",
  Swift: "swift",
  Kotlin: "kotlin",
  "C#": "csharp",
};

const getInitialCode = (trucoId) => {
  switch (trucoId) {
    case 21: // Fetch API
      return `async function fetchData(url) {
  // Tu código aquí
  // Debe hacer un fetch a la URL proporcionada y retornar un array
}`;
    case 22: // Async/Await
      return `async function asyncExample() {
  // Tu código aquí
  // Debe retornar "completed" después de una operación asíncrona
}`;
    case 23: // Closure
      return `function createMultiplier(n) {
  // Tu código aquí
  // Debe crear un closure que multiplique el número por n
}`;
    // ... más casos según el ID del truco
    default:
      return "// Tu código aquí\n";
  }
};

export default function CodeEditor({ language, code, onChange, trucoId }) {
  const initialCode = trucoId ? getInitialCode(trucoId) : code;

  return (
    <Editor
      height="400px"
      defaultLanguage={LANGUAGE_CONFIG[language] || "javascript"}
      value={initialCode}
      onChange={onChange}
      theme="vs-dark"
      options={{
        minimap: { enabled: false },
        fontSize: 14,
        lineNumbers: "on",
        scrollBeyondLastLine: false,
        automaticLayout: true,
      }}
    />
  );
}

CodeEditor.propTypes = {
  language: PropTypes.string,
  code: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  trucoId: PropTypes.number,
};

CodeEditor.defaultProps = {
  language: "JavaScript",
  code: "// Tu código aquí\n",
};
