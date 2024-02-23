import { useState } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface ErrorResponse {
    error: string;
}

interface UsePostResponse {
    postData: (path: string, body: string) => void; // Remove the token parameter
    response: any[];
    isLoading: boolean | null;
    error: string | null;
}

export const usePost = (): UsePostResponse => {
    const token = useSelector((state: RootState) => state.auth); // Assuming token is stored in auth slice
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean | null>(null);
    const [response, setResponse] = useState<any[]>([{}])

    const postData = async (path: string, body: string) => { // Remove the token parameter
        console.log("path :", path, "body :", body);
        setIsLoading(true);

        try {
            const response = await fetch(path, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // Use the token obtained from Redux
                },
                body: body,
            });

            const json = await response.json();

            if (!response.ok) {
                setError((json as ErrorResponse).error);
            }
            if (response.ok) {
                setResponse((prevData) => [...prevData, ...(json as any[])]);
            }
        } catch (error) {
            setError("An error occurred while processing your request.");
        } finally {
            setIsLoading(false);
        }
    };

    return { postData, response, isLoading, error };
};
