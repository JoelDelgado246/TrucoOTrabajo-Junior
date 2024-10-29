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

export default function CodeEditor({ language, code, onChange }) {
  return (
    <Editor
      height="400px"
      defaultLanguage={LANGUAGE_CONFIG[language]}
      value={code}
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
