/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useState, useEffect } from "react";

// The interface remains the same, which is great.
interface Contact {
  id: string;
  image: string;
  fullName: string;
  phone: number;
  facebook_link: string;
  role: string;
}

const useContacts = () => {
  const [loading, setLoading] = useState(true); // Set initial loading to true
  const [error, setError] = useState("");
  const [contacts, setContacts] = useState<Contact[]>([]);

  // useEffect will run once when the hook is first used, thanks to the empty dependency array [].
  useEffect(() => {
    // We define an async function inside useEffect to perform the data fetching
    const fetchContacts = async () => {
      setLoading(true); // Ensure loading is true at the start of the fetch
      setError("");
      try {
        // As before, ensure the protocol (http://) is present
        const response = await axios.get(
          "http://192.168.1.131:3000/api/contacts",
          {
            headers: {
              // Note: For a GET request, Content-Type is not strictly necessary,
              // but Accept is good to have.
              Accept: "application/json",
              // You might need an Authorization header here in a real app
              // "Authorization": `Bearer ${your_auth_token}`
            },
          }
        );

        if (response.status === 200) {
          console.log(response.data);
          setContacts(response.data);
        }
      } catch (error: any) {
        if (error.response) {
          // Server responded with an error
          console.error("Error response data:", error.response.data);
          const serverError =
            error.response.data?.error || "Failed to load contacts.";
          setError(serverError);
        } else if (error.request) {
          // No response was received from the server
          setError("Network error: No response from server.");
        } else {
          // Something else went wrong
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false); // Set loading to false in both success and error cases
      }
    };

    fetchContacts(); // Call the async function
  }, []); // The empty array [] ensures this effect runs only once on mount.

  return {
    loading,
    error,
    contacts,
  };
};

export default useContacts;
