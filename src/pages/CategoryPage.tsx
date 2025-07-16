import { useParams } from "react-router-dom";
import Navbar from "@/components/ui/Navbar";
import GenericCard from "@/components/ui/GenericCard";
import usePlaces from "@/hooks/usePlaces"; // <-- IMPORT THE HOOK

const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  // Use the hook to get all data, loading, and error states
  const { categories, loading, error } = usePlaces();

  // --- RENDER STATES ---

  if (loading) {
    return (
      <div>
        <Navbar />
        <h1 className="text-center text-blue-950 text-2xl font-bold mt-10">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Navbar />
        <h1 className="text-center text-2xl font-bold mt-10 text-red-500">
          Error: {error}
        </h1>
      </div>
    );
  }

  // Find the category AFTER data has loaded
  const category = categories.find((cat) => cat.slug === categorySlug);

  if (!category) {
    return (
      <div>
        <Navbar />
        <div className="w-full  text-center mt-10 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <h1 className="text-xl font-bold">Category Not Found</h1>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  // --- RENDER CONTENT ---
  return (
    <div>
      <Navbar />
      <h1 className="ml-6 mt-3 pt-2 font-poppins text-blue-950 text-[23px] font-bold tracking-wide">
        {category.name}
      </h1>
      <div className="mx-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
