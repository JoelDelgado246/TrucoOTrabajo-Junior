import { Link } from "react-router-dom";

export default function SectionCard({
  description,
  buttonText,
  buttonLink,
  labelText,
}) {
  return (
    <div className="bg-customPurple p-12 flex justify-between items-center ">
      <div className="max-w-2xl">
        <p className="text-white text-[13px] mb-4 font-michroma">{description}</p>
      </div>
      <div className="text-right">
        <p className="text-customGreen text-[13px] mb-2 font-michroma">{labelText}</p>
        <Link
          to={buttonLink}
          className="inline-block bg-customDarkOrange text-[21px] font-creepster px-6 py-2 rounded text-black hover:bg-orange-600"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
