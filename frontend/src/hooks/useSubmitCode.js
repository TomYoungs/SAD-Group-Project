import { useState } from "react";

export const useSubmitCode = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const userToken =JSON.parse(localStorage.getItem("user")).token;

  const submitCode = async (codeID) => {
    setIsLoading(true);
    setError(null);

    //proxy to localhost:4000
    const coderesponse = await fetch("/api/codes/getacode", {
      method: "POST",
      headers: { "Content-Type": "application/json" ,'Authorization': `Bearer ${userToken}`},
      body: JSON.stringify({ codeID }),
    });
    const json = await coderesponse.json();

    if (!coderesponse.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (coderesponse.ok) {
      setIsLoading(false);
      //TODO: update this to be better
      const userID = JSON.parse(localStorage.getItem("user")).id;
      const moduleID = json.moduleName;
      const weekID = json.weekID;

      const attendanceresponse = await fetch(
        "/api/attendance/updateuserattendance",
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userID, moduleID, weekID }),
        }
      );
      const resjson = await attendanceresponse.json();
      if (!resjson.ok) {
        setIsLoading(false);
        setError(json.error);
      }
      if (resjson.ok) {
        setIsLoading(false);
      }
    }
  };

  return { submitCode, isLoading, error };
};
