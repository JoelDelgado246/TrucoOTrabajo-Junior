// src/components/trucos/ChallengeCard.jsx
import { Link } from 'react-router-dom'

export default function ChallengeCard({ id, title, description, language }) {
  return (
    <div className="bg-orange-500 rounded-2xl p-5 h-full flex flex-col">
      <h3 className="font-creepster text-[28px] text-black mb-3">{title}</h3>
      <p className="text-black text-sm mb-4 flex-grow">{description}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="bg-orange-400 text-black px-3 py-1 rounded-lg text-sm">
          {language}
        </span>
        <Link 
          to={`/trucos/${id}`} 
          className="bg-customPurple text-white font-creepster px-3 py-1 rounded-lg hover:bg-purple-900 text-sm"
        >
          ¿TE ATREVES?
        </Link>
      </div>
    </div>
  )
}