// src/pages/Trucos.jsx
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import DifficultySection from "../components/trucos/DifficultySection";

const challenges = {
  facil: [
    {
      id: "facil-1",
      title: "SUMA SIMPLE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      language: "JS",
    },
    {
      id: "facil-2",
      title: "CONTADOR",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      language: "JS",
    },
    {
      id: "facil-3",
      title: "TODO LIST",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      language: "JS",
    },
    {
      id: "facil-4",
      title: "CALCULADORA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      language: "JS",
    },
    {
      id: "facil-5",
      title: "VALIDADOR",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      language: "JS",
    },
    {
      id: "facil-6",
      title: "CONVERSOR",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      language: "JS",
    },
    {
      id: "facil-7",
      title: "CONVERSOR",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      language: "JS",
    },
    {
      id: "facil-8",
      title: "CONVERSOR",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      language: "JS",
    },
  ],
  medio: [
    {
      id: "medio-1",
      title: "API REST",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      language: "JS",
    },
    {
      id: "medio-1",
      title: "API REST",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      language: "JS",
    },
    {
      id: "medio-1",
      title: "API REST",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      language: "JS",
    },
    // ... Copiar y pegar 5 veces más cambiando id y title
    {
      id: "medio-6",
      title: "AUTH SYSTEM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      language: "JS",
    },
  ],
  terrorifico: [
    {
      id: "terror-1",
      title: "BLOCKCHAIN",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      language: "JS",
    },
    {
      id: "terror-1",
      title: "BLOCKCHAIN",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      language: "JS",
    },
    {
      id: "terror-1",
      title: "BLOCKCHAIN",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      language: "JS",
    },
    {
      id: "terror-1",
      title: "BLOCKCHAIN",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      language: "JS",
    },
    // ... Copiar y pegar 5 veces más cambiando id y title
    {
      id: "terror-6",
      title: "IA MODEL",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      language: "JS",
    },
  ],
};

export default function Trucos() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="bg-customPurple py-12 px-6">
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
