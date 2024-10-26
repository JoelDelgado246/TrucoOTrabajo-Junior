// src/components/challenges/CodeEditor.jsx
import Editor from "@monaco-editor/react";

export default function CodeEditor({ language, code, onChange }) {
  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <Editor
        height="400px"
        defaultLanguage={language}
        defaultValue={code}
        theme="vs-dark"
        onChange={onChange}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
}
