import { useState } from "react";

export const useSubmitCode = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [success, setSuccess] = useState(null);

  const submitCode = async (codeID) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);
    let query = '/api/codes/getacode/'+codeID
    //proxy to localhost:4000
    const coderesponse = await fetch(query, {
      method: "GET",
    });
    const json = await coderesponse.json();
    if (!coderesponse.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (coderesponse.ok) {
      //TODO: update this to be better
      const userID = JSON.parse(localStorage.getItem("user")).id;
      const moduleID = json.moduleID;
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
      if (!attendanceresponse.ok) {
        setIsLoading(false);
        setError(json.error);
      }
      if (attendanceresponse.ok) {
        setIsLoading(false);
        setSuccess(true);
      }
    }
  };

  return { submitCode, isLoading, error, success };
};
