import Navbar from "@/components/ui/Navbar";
import useEvents from "@/hooks/useEvents";
import React from "react";
import { useParams } from "react-router-dom";

const EventDetail = () => {
  const { eventSlug } = useParams();
  const { events, loading, error } = useEvents();

  const renderContent = () => {
    if (loading) {
      return (
        <div className="w-full h-screen flex items-center justify-center">
          <h1 className="text-xl font-semibold">Loading...</h1>
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
    const event = events.find((event) => cat.slug === categorySlug);
    const element = category?.elements.find((el) => el.slug === elementSlug);

    return (
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact) => (
          <PersonCard
            key={contact.id}
            image={contact.image || ""}
            name={contact.fullName}
            phone={contact.phone}
            facebook_link={contact.facebook_link}
            nationality="Tunisian"
            experience=""
            term=""
            position={contact.role}
          />
        ))}
      </div>
    );
  };
  return <div></div>;
};

export default EventDetail;
