import { useEffect, useState } from "react";

interface ErrorResponse {
  error: string;
}

interface UseGetResponse {
  getData: (path: string, token: string) => void;
  data: any[]; // Update this type based on the response structure
  isLoading: boolean | null;
  error: string | null;
}

export const useGet = (): UseGetResponse => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [data, setData] = useState<any[]>([]); // Update the type based on the response structure

  const getData = async (path: string, token: string) => {
    console.log(path, "path");
    setIsLoading(true);

    try {
      const response = await fetch(path, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const json = await response.json();

      if (!response.ok) {
        setError((json as ErrorResponse).error);
      }
      if (response.ok) {
        localStorage.setItem("token", json.token);
        setData((prevData) => [...prevData, json]);
      }
    } catch (error) {
      setError("An error occurred while processing your request.");
    } finally {
      setIsLoading(false);
    }
  };

  return { getData, data, isLoading, error };
};
