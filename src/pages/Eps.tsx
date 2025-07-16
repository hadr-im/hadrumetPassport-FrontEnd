import Navbar from "@/components/ui/Navbar";
import PersonCard from "@/components/ui/PersonCard";
import person from "../assets/images/people/person.jpeg";

const Eps = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-8 mx-6">
        <h1 className=" underline text-black font-poppins font-semibold text-[22px]">
          Exchange Participants
        </h1>
        <div className=" mt-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PersonCard
            image={person}
            name="Gehad Moro Mohamed"
            phone="+216 22 523 215"
            facebook_link=""
            nationality="Egyptian"
            experience="volunteering experience"
            term="short term"
            position=""
          />
        </div>
      </div>
    </div>
  );
};

export default Eps;
