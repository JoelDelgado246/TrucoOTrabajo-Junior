import { Link } from "react-router-dom";

export default function SectionCard({
  description,
  buttonText,
  buttonLink,
  labelText,
}) {
  return (
    <div className="bg-customPurple rounded-lg p-8 flex justify-between items-center flex-col md:flex-row gap-4">
      <div className="max-w-2xl text-center md:text-left flex-1">
        <p className="text-white text-title3 font-michroma">{description}</p>
      </div>
      <div className="flex flex-col items-center md:items-start space-y-4 mt-4 md:mt-0">
        <Link
          to={buttonLink}
          className="inline-block bg-customDarkOrange text-[21px] font-creepster px-20 py-2 rounded text-black hover:bg-orange-600"
        >
          {buttonText}
        </Link>
        <p className="text-customGreen text-normal mt-4 font-michroma">{labelText}</p>
        
      </div>
    </div>
  );
}
