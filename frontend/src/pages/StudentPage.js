import { useState } from "react";
import { useSubmitCode } from "../hooks/useSubmitCode";

const StudentPage = () => {
  const [code, setCode] = useState("");
  const { submitCode, error, isLoading, success } = useSubmitCode();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await submitCode(code);
    setCode("");
  };

  return (
    <form className="Submit Code" onSubmit={handleSubmit}>
      <h2>Report attendance</h2>

      <input
        type="code"
        onChange={(e) => setCode(e.target.value)}
        value={code}
      />
      <button disabled={isLoading}>Submit Code</button>
      {success && <div className="error">Code Submitted!</div>}
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default StudentPage;
