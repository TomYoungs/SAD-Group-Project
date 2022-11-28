import React from "react";
import { useEffect, useState } from "react";
import { useGenerateCode } from "../hooks/useGenerateCode";

export const CodeTab = ({ modules }) => {
  const { generateCode, error, isLoading } = useGenerateCode();
  const [moduleID, setModuleID] = useState("");
  const [codeID, setCodeID] = useState("");
  const [weekID, setWeekID] = useState("");
  let items = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleGenerate = async (e) => {
    e.preventDefault();
    setCodeID(await generateCode(moduleID, weekID));
    setModuleID("");
    setWeekID("");
  };

  return (
    <div className="default-tab tab1">
      <form className="module-picker" onSubmit={handleGenerate}>
        <h2>Generate Code</h2>
        <div className="module-selector">
          <label>Choose one of your Modules:</label>
          <select
            onChange={(e) => {
              const selectedModule = e.target.value;
              setModuleID(selectedModule);
            }}
          >
            <option key="empty" value=""></option>
            {modules &&
              modules.map((module) => (
                <option key={module._id} value={module._id}>
                  {module.name}
                </option>
              ))}
          </select>
        </div>

        <div className="week-selector">
          <label>Choose a week:</label>
          <select
            onChange={(e) => {
              const selectedWeek = e.target.value;
              setWeekID(selectedWeek);
            }}
          >
            <option key="empty" value=""></option>
            {items.map((item) => (
              <option key={item} value={item}>
                Week: {item}
              </option>
            ))}
          </select>
        </div>
        <button className="default-button" type="submit" disabled={isLoading}>
          Generate
        </button>
        {error && <div className="error">{error}</div>}
        {codeID && <div className="generated-code">{codeID}</div>}
      </form>
    </div>
  );
};
export default CodeTab;
