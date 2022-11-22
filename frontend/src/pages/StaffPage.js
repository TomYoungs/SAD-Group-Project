import { ModulePicker } from "../components/ModulePicker";
import { WeekPicker } from "../components/WeekPicker";
import { useEffect, useState } from "react";
import { useGenerateCode } from "../hooks/useGenerateCode";

const StaffPage = () => {
  let items = [1,2,3,4,5,6,7,8];
  const [modules, setModule] = useState(null);
  const userid = JSON.parse(localStorage.getItem("user")).id;
  const [moduleID, setModuleID] = useState("");
  const [codeID, setCodeID ] = useState("")
  const [weekID, setWeekID] = useState("");
  const { generateCode, error, isLoading } = useGenerateCode();


  const handleGenerate = async (e) => {
    e.preventDefault();
    // console.log("TEST")
    // console.log(modules[0]._id)
    // console.log(moduleID)
    // console.log(weekID)
    setCodeID(await generateCode(moduleID, weekID))
    setModuleID("")
    setWeekID("")
  };

  useEffect(() => {
    const fetchModules = async () => {
      const response = await fetch("/api/module/getausersmodule/" + userid, {
        method: "GET",
      });
      const json = await response.json();

      if (response.ok) {
        setModule(json);
      }
    };
    fetchModules();
  }, []);

  return (
    <>
    <form className="module-picker" onSubmit={handleGenerate}>
      <h3>Module Code Generator</h3>
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
      <button type="submit" disabled={isLoading}>
        Generate
      </button>
      {error && <div className="error">{error}</div>}
    </form>

    <div>{codeID}</div>
    </>
  );
};

export default StaffPage;

//dropdown of modules
//week selector

