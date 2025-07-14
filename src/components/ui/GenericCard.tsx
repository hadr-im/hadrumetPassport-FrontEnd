
import { IoMdTime } from "react-icons/io";
import { MdOutlinePlace } from "react-icons/md";
// 1. Import Link from react-router-dom
import { Link } from "react-router-dom";

interface cardProps {
  image: string;
  description: string;
  title: string;
  date: string;
  location: string;
  working_time: string;
  linkTo: string; 
  speciality?: string;
  type: string
}

const GenericCard = ({ image,type, speciality, description, title, date, location, working_time, linkTo }: cardProps) => {
  return (

    <div className="shadow-lg p-4 mt-3 rounded-lg bg-white flex flex-col h-full">

      <Link to={linkTo} className="group">
        <div className="w-full">
          <img
            src={image}
            className="w-full h-[120px] object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            alt={title}
          />
        </div>
        <h1 className="mt-3 text-blue-950 font-poppins font-semibold text-[20px] ">
          {title}
        </h1>
        <h1 className=" text-md text-gray-900">{speciality}</h1>
        <h1 className=" text-md font-semibold text-gray-900">{type}</h1>
      </Link>
      
      <p className="text-gray-600 mt-1 font-poppin text-[14px] line-clamp-3 flex-grow">
        {description}
      </p>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <IoMdTime className="text-blue-950" size={25} />
          <div className="flex flex-col ml-2">
            <span className="text-blue-950 font-semibold text-sm">
              {date}
            </span>
            <span className="text-gray-500 font-medium text-xs">
              {working_time}
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <MdOutlinePlace className="text-blue-950" size={24} />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={location}
            className="ml-1 text-blue-950 font-semibold text-sm hover:underline"
          >
            See location
          </a>
        </div>
      </div>
    </div>
  );
};

export default GenericCard;