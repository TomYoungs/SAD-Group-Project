import { useState } from "react";
import { useSubmitCode } from "../hooks/useSubmitCode";

const StudentPage = () => {
  const [code, setCode] = useState("");
  const { submitCode, error, isLoading, accepted } = useSubmitCode();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await submitCode(code);
  };

  return (
    <form className="submit-code" onSubmit={handleSubmit}>
      <h2>Report Attendance</h2>

      <input
        type="code"
        onChange={(e) => setCode(e.target.value)}
        value={code}
        placeholder="attendance code"
      />
      <button className="default-button" disabled={isLoading}>
        Submit
      </button>
      {error && <div className="error">{error}</div>}
      {accepted && (
        <div>
          {accepted === "yes" ? (
            <div className="success-message">Submitted!</div>
          ) : (
            <></>
          )}
        </div>
      )}
    </form>
  );
};

export default StudentPage;
