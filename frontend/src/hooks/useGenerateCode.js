import { useState } from "react";

export const useGenerateCode = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const generateCode = async (moduleID, weekID) => {
    setIsLoading(true);
    setError(null);

    const coderesponse = await fetch("/api/codes/createacode", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ moduleID, weekID }),
    });
    const json = await coderesponse.json();

    if (!coderesponse.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (coderesponse.ok) {
      setIsLoading(false);
      return json.codeID
    }
  };

  return { generateCode, isLoading, error };
};
