// src/components/trucos/ChallengeCard.jsx
export default function ChallengeCard({ title, description, language }) {
  return (
    <div className="bg-orange-500 rounded-lg p-6 flex flex-col h-full">
      <h3 className="font-creepster text-[34px] text-black mb-4">{title}</h3>
      <p className="text-black mb-6 flex-grow">{description}</p>
      <div className="flex justify-between items-center">
        <span className="bg-orange-400 text-black px-4 py-1 rounded-lg">
          {language}
        </span>
        <button className="bg-purple-800 text-white font-creepster px-4 py-2 rounded-lg hover:bg-purple-900">
          ¿TE ATREVES?
        </button>
      </div>
    </div>
  );
}
