import { Link } from "react-router-dom";

export default function SectionCard({
  title,
  description,
  buttonText,
  buttonLink,
  labelText,
}) {
  return (
    <div className="bg-purple-700 p-8 flex justify-between items-center">
      <div className="max-w-2xl">
        <p className="text-white text-[13px] mb-4">{description}</p>
      </div>
      <div className="text-right">
        <p className="text-lime-400 text-[13px] mb-2">{labelText}</p>
        <Link
          to={buttonLink}
          className="inline-block bg-orange-500 text-[21px] font-creepster px-6 py-2 rounded text-white hover:bg-orange-600"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
