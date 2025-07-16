/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {  useState } from 'react'
import  axios from 'axios';
import { useNavigate } from 'react-router-dom';
const useLogin = () => {
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");
    const [appId,setAppId]= useState("");
    const [password,setPassword]= useState("");
    const navigate = useNavigate();

    const handleSubmit = async ( e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const response = await axios.post(
               "http://192.168.1.131:3000/api/auth/login",
              {
                appID: appId,
                password: password
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
              }
            );
            if (response.status === 200) {
              console.log(response.data);
              const {token}= response.data;
              localStorage.setItem("token", token);
              navigate("/");
            }
        } catch (error: any) {
      if (error.response) {
        // Server responded with error status (4xx, 5xx)
        console.error("Error response data:", error.response.data);

        // Extract server error message
        let serverError = error.response.data?.error;
        if (typeof serverError === "string") {
          if (serverError.includes(": ")) {
            serverError = serverError.split(": ")[1];
          }
        }
        setError(serverError);
      }
    } finally {
      setLoading(false);
    }
    }
  return (
    {
      error,
      loading,
      handleSubmit,
      setAppId,
      setPassword
    }
  )
}

export default useLogin
