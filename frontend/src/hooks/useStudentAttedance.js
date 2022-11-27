import { useState } from "react";

export const useStudentAttendance = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [attendance, setAttendance] = useState(null);

  const studentAttendance = async (userID, moduleID) => {
    setError(null);
    setIsLoading(true);

    const response = await fetch("/api/attendance/getbyuseridmoduleid", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userID, moduleID }),
      // headers: {
      //     'Authorization': `Bearer ${user.token}`
      // }
    });

    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      setAttendance(json);
      setIsLoading(false);
    }
  };

  return { studentAttendance, error, isLoading, attendance };
};
