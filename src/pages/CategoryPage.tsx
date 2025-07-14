import { useParams} from "react-router-dom";
import Navbar from "@/components/ui/Navbar";
import GenericCard from "@/components/ui/GenericCard";
import { appData } from "@/data/appData";

const CategoryPage = () => {
  const { categorySlug } = useParams();

  // Find the category in our data that matches the slug
  const category = appData.find((cat) => cat.slug === categorySlug);
  
  // If no category is found, show an error
  if (!category) {
    return (
      <div>
        <Navbar />
        <h1 className="text-center text-2xl font-bold mt-10">Category not found!</h1>
      </div>
    );
  }
   return (
    <div>
      <Navbar />
      {/* Display the category name dynamically */}
      <h1 className="ml-6 mt-3 pt-2 font-poppins text-blue-950 text-[23px] font-bold tracking-wide">
        {category.name}
      </h1>

      {/* Grid for the cards */}
      <div className="mx-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Map over the elements of the found category */}
        {category.elements.map((element) => (
          <GenericCard
            key={element.id}
            type={element.type ?? ""}
            linkTo={`/${category.slug}/${element.slug}`}
            image={element.image}
            speciality={element.speciality}
            description={element.description}
            title={element.title}
            date="" 
            location={element.location}
            working_time={element.working_time}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
