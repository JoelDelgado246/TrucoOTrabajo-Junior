// src/pages/Trucos.jsx
import Header from "../components/layout/Header";
import DifficultySection from "../components/trucos/DifficultySection";

const challenges = {
  facil: [
    {
      title: "TÍTULO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      language: "JS",
    },
    // ... más retos
  ],
  medio: [
    // ... retos de dificultad media
  ],
  terrorifico: [
    // ... retos terroríficos
  ],
};

export default function Trucos() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="bg-purple-800 py-12 px-6">
        <div className="container mx-auto">
          <DifficultySection
            title="FÁCIL"
            challenges={challenges.facil}
            titleColor="text-lime-400"
          />

          <DifficultySection
            title="MEDIO"
            challenges={challenges.medio}
            titleColor="text-lime-400"
          />

          <DifficultySection
            title="TERRORÍFICO"
            challenges={challenges.terrorifico}
            titleColor="text-lime-400"
          />
        </div>
      </main>
    </div>
  );
}
