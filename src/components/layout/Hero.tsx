import ImageCarousel from "../ui/ImageCarousel";
import { IoRestaurant } from "react-icons/io5";
import { FaCoffee } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { HiCurrencyEuro } from "react-icons/hi";
import { FaDumbbell } from "react-icons/fa6";
import { PiSwimmingPoolBold } from "react-icons/pi";
import park from "../../assets/images/Sousse/s5.jpg";
import GenericCard from "../ui/GenericCard";

const Hero = () => {
  const categories = [
    {
      id: 1,
      name: "Restaurants",
      logo: <IoRestaurant size={35} className="text-blue-950" />,
    },
    {
      id: 2,
      name: "Coffe Shops",
      logo: <FaCoffee size={35} className="text-blue-950" />,
    },
    {
      id: 3,
      name: "shopping",
      logo: <FaShoppingCart size={35} className="text-blue-950" />,
    },
    {
      id: 4,
      name: "Money exchange",
      logo: <HiCurrencyEuro size={35} className="text-blue-950" />,
    },
    {
      id: 5,
      name: "Gym",
      logo: <FaDumbbell size={35} className="text-blue-950" />,
    },
    {
      id: 6,
      name: "Water Parks",
      logo: <PiSwimmingPoolBold size={35} className="text-blue-950" />,
    },
  ];
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
        <div className="   w-full mt-6">
          <div className=" mx-4 grid grid-cols-4 gap-x-5 gap-y-4  ">
            {categories.map((category,index) => (
              <div key={index} className=" shadow-lg flex rounded-lg bg-white duration-300 transition-colors ease-in-out  hover:bg-blue-600/15 cursor-pointer  border-blue-950 border-2 p-5 items-center ">
                {category.logo}
              </div>
            ))}
          </div>
        </div>
        {/**events */}
        <div className="mx-4  mt-6">
          <h1 className=" text-black  font-poppins font-semibold text-[22px]">
            Events
          </h1>
          <GenericCard
            linkTo=""
            image={park}
            description=" "
            type="Outing"
            title="Visitting the Kantaoui"
            speciality=""
            date="12 Jul, 10 AM"
            location="https://www.google.com/maps/place/Port+El+Kantaoui/@35.8902918,10.5905234,16z/data=!4m10!1m2!2m1!1sPort+El-Kantaoui!3m6!1s0x12fd89ecfd64d773:0xf1f190f2015f81ef!8m2!3d35.8924975!4d10.5998394!15sChBQb3J0IEVsLUthbnRhb3VpWhIiEHBvcnQgZWwga2FudGFvdWmSAQhzZWFfcG9ydKoBOBABMh4QASIahG99Jolt6_jn8rXXVncoUTdQt0AKIrfRlPIyFBACIhBwb3J0IGVsIGthbnRhb3Vp4AEA!16zL20vMDR4aDJx?entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D"
            working_time=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
