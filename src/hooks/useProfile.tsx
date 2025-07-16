/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import axios from "axios";


interface Logistics {
  accommodation_provided: string;
  accommodation_covered: string;
  transportation_provided: string;
  transportation_covered: string;
  food_provided: string;
  food_covered: string;
  computer_provided: string;
  no_of_meals: string;
}

interface Opportunity {
  programmeId: string;
  description: string;
  company: string;
  placeId: string;
  logistics: Logistics;
  salary: number | null;
  duration: string;
}

interface UserProfile {
  applicationId: string;
  epId: string;
  fullName: string;
  email: string;
  role: string;
  password?: string; // It's good practice to make passwords optional as they shouldn't always be sent
  lc: string;
  mc: string;
  status: string;
  startDate: string;
  endDate: string;
  opportunity: Opportunity;
}


const useProfile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfileData = async () => {
      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get("http://192.168.1.131:3000/api/auth/me", {
          headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}` 
          },
        });

       
        if (response.status === 200 && response.data.user) {
        console.log(response.data.user);
          setProfile(response.data.user);
        } else {
          throw new Error("User data not found in response");
        }
      } catch (err: any) {
        if (err.response) {
          console.error("Error response:", err.response.data);
          setError(err.response.data?.error || "Failed to fetch profile.");
        } else if (err.request) {
          console.error("Error request:", err.request);
          setError("Network error. Please check your connection.");
        } else {
          console.error("Error:", err.message);
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []); 

  return { profile, loading, error };
};

export default useProfile;