/* eslint-disable @typescript-eslint/no-unused-vars */
import ImageCarousel from "../ui/ImageCarousel";
import { IoRestaurant } from "react-icons/io5";
import { FaCoffee } from "react-icons/fa";
import { HiCurrencyEuro } from "react-icons/hi";
import { FaDumbbell } from "react-icons/fa6";
import GenericCard from "../ui/GenericCard";
import useEvents from "@/hooks/useEvents";
import useCategories from "@/hooks/usecategories";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const { events, loading, error } = useEvents();
  const { catLoading, catError, categories } = useCategories();
  const slugify = (text: string) =>
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w\\-]+/g, "") // Remove all non-word chars
      .replace(/\\-\\-+/g, "-"); // Replace multiple - with single -

  const categoryLogos: { [key: string]: React.ReactElement } = {
    Restaurants: <IoRestaurant size={35} className="text-blue-950" />,
    "Coffe Shops": <FaCoffee size={35} className="text-blue-950" />,
    "Money exchange": <HiCurrencyEuro size={35} className="text-blue-950" />,
    Gym: <FaDumbbell size={35} className="text-blue-950" />,
    // Add more mappings as needed
  };

  const displayCategories = useMemo(() => {
    return categories.map((category) => ({
      id: category.id,
      name: category.label,
      logo: categoryLogos[category.label] , 
      linkTo: `/${slugify(category.label)}`, // Create the link using the label
    }));
  }, [categories]);

  return (
       <div className=" w-full h-full flex flex-col mb-16">
      {/**mobile */}
      <div className=" mt-2  ">
        <h1 className=" mx-4 text-black  font-poppins font-semibold text-[22px]">
          Navigate Hadrumet & Enjoy the Jewel of Sahel
        </h1>
        <div className="ml-4 ">
          <ImageCarousel />
        </div>

        {/**categories */}
        <div className="w-full mt-6">
          <div className="mx-4 grid grid-cols-4 gap-x-5 gap-y-4">
            {/* 5. Handle loading and error states for categories */}
            {catLoading ? (
              <p>Loading categories...</p>
            ) : catError ? (
              <p className="text-red-500">{catError}</p>
            ) : (
              // 6. Map over the new 'displayCategories' array
              displayCategories.map((category) => (
                <Link to={category.linkTo} key={category.id}>
                  <div
                    className="shadow-lg flex justify-center rounded-lg bg-white duration-300 transition-colors ease-in-out hover:bg-blue-600/15 cursor-pointer border-blue-950 border-2 p-5 items-center"
                  >
                    {category.logo}
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
        
        {/**events */}
        <div className="mx-4 mt-6">
          {loading ? (
            <p>Loading events...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : events.length > 0 ? (
            <div>
              <h1 className="text-black font-poppins font-semibold text-[22px]">
                Events
              </h1>
              {events.map((event) => (
                <GenericCard
                  key={event.id}
                  type={event.eventType ?? ""}
                  linkTo={`/events/${slugify(event.title)}`}
                  image={event.picture}
                  speciality=""
                  description={event.description}
                  title={event.title}
                  date={event.startDate}
                  location={event.location}
                  working_time={event.dayTime}
                />
              ))}
            </div>
          ) : (
            <div className="w-full text-center mt-10">
              <p className="text-gray-400 text-xl">No Events found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
