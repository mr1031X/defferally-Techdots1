import { useState } from "react";
import { IUserSignUpResponse } from "@/src/interfaces/user";

interface ErrorResponse {
    error: string;
}

interface UsePostResponse {
    postData: (path: string, body: string) => void;
    response: IUserSignUpResponse | null; // Adjusted type to IUserSignUpResponse | null
    isLoading: boolean | null;
    error: string | null;
}

export const usePost = (): UsePostResponse => {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean | null>(null);
    const [response, setResponse] = useState<IUserSignUpResponse | null>(null); // Adjusted initial state

    const postData = async (path: string, body: string) => {
        console.log("path :", path, "body :", body);
        setIsLoading(true);

        try {
            const response = await fetch(path, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: body,
            });

            const json = await response.json();

            if (!response.ok) {
                setError((json as ErrorResponse).error);
            } else {
                setResponse(json as IUserSignUpResponse); // Updated to setResponse with correct type
            }
        } catch (error) {
            setError("An error occurred while processing your request.");
        } finally {
            setIsLoading(false);
        }
    };

    return { postData, response, isLoading, error };
};
