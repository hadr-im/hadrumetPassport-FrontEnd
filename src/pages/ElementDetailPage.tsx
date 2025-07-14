import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/ui/Navbar";
import { FiPhone } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { MdOutlinePlace, MdOutlineDeliveryDining } from "react-icons/md";
import { appData } from "@/data/appData"; // Import our data

const ElementDetailPage = () => {
  // Get both slugs from the URL
  const { categorySlug, elementSlug } = useParams();

  // Find the correct category
  const category = appData.find((cat) => cat.slug === categorySlug);
  // Find the correct element within that category
  const element = category?.elements.find((el) => el.slug === elementSlug);

  // If we can't find the element, show an error
  if (!element || !category) {
    return (
      <div>
        <Navbar />
        <h1 className="text-center text-2xl font-bold mt-10">
          Item not found!
        </h1>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      {/* Dynamic Breadcrumb */}
      <div className="ml-6 mt-3 pt-2 font-poppins text-blue-950 text-[23px] font-bold tracking-wide">
        <Link
          to={`/${category.slug}`}
          className="underline "
        >
          {category.name}
        </Link>
        <span className="">/{element.title}</span>
      </div>

      <div className="mx-6">
        <div className="w-full mt-5">
          <img
            src={element.image}
            className="w-full object-cover h-[200px] rounded-md"
            alt={element.title}
          />
          <div className="bg-white px-4 py-3 mt-3 rounded-lg shadow-md">
            <h1 className="mt-2 text-blue-950 font-poppins font-semibold text-[23px]">
              {element.title}
            </h1>
            <h1 className=" text-gray-900 font-poppins font-semibold text-[19px]">
              {element.type}
            </h1>
            <h2 className="text-md text-gray-800">{element.speciality}</h2>
            <p className="text-gray-600 mt-2 font-poppins text-[16px]">
              {element.description}
            </p>

            {/* Conditionally render details if they exist in the data */}
            {element.phone && (
              <div className="flex items-center mt-4">
                <FiPhone size={20} className="text-blue-950" />
                <h3 className="text-blue-950 ml-2 font-semibold text-[17px]">
                  {element.phone}
                </h3>
              </div>
            )}

            <div className="flex items-center mt-2">
              <IoMdTime size={25} className="text-blue-950" />
              <h3 className="text-blue-950 ml-2 font-semibold text-[17px]">
                {element.working_time}
              </h3>
            </div>

            <a
              href={element.location}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center mt-2">
                <MdOutlinePlace size={25} className="text-blue-950" />
                <h3 className="text-blue-950 ml-2 font-semibold text-[17px] hover:underline">
                  See Location
                </h3>
              </div>
            </a>

            {element.delivery && (
              <div className="flex items-center mt-2 mb-4">
                <MdOutlineDeliveryDining size={25} className="text-blue-950" />
                <h3 className="text-blue-950 ml-2 font-semibold text-[17px]">
                  Delivery Available
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementDetailPage;
