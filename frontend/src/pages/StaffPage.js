// import { ModulePicker } from "../components/ModulePicker";
// import { WeekPicker } from "../components/WeekPicker";
import ModuleDetails from '../components/ModuleDetails'
import PieChart from '../components/PieChart'
import AllAttendancePieChart from '../components/AllAttendancePieChart'
import { useEffect, useState } from "react";
import { useGenerateCode } from "../hooks/useGenerateCode";
import Tabs from "../components/Tabs";

const StaffPage = () => {
  let items = [1, 2, 3, 4, 5, 6, 7, 8];
  const [modules, setModule] = useState(null);
  const userid = JSON.parse(localStorage.getItem("user")).id;
  const [moduleID, setModuleID] = useState("");
  const [codeID, setCodeID] = useState("")
  const [weekID, setWeekID] = useState("");
  const [attendanceWeekStart, setAttendanceWeekStartID] = useState(0);
  const [attendanceWeekEnd, setAttendanceWeekEndID] = useState(8);
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
      <div id="staffTabs">
        <Tabs>
          <div label="Today's Code">
            <div className="tab1">
              <form className="module-picker tab-content" onSubmit={handleGenerate}>
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
                <button className="defaultButton" type="submit" disabled={isLoading}>
                  Generate
                </button>
                {error && <div className="error">{error}</div>}
                {codeID && <div className="generated-code">{codeID}</div>}
              </form>
            </div>
          </div>
          <div label="Modules">
            <h2>StaffPage</h2>
            <div class="grid-container">
              <div class="grid-item">
                <p>Starting Week</p>
                <select
                  onChange={(e) => {
                    const selectedWeek = e.target.value - 1;
                    setAttendanceWeekStartID(selectedWeek);
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
              <div class="grid-item">
                <p>Ending Week</p>
                <select
                  onChange={(e) => {
                    const selectedWeek = e.target.value - 1;
                    setAttendanceWeekEndID(selectedWeek);
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
            </div>
            <div>
              {modules && modules.map((module) => (
                <ModuleDetails key={module._id} module={module} weekStart={attendanceWeekStart} weekEnd={attendanceWeekEnd} />
              ))}
            </div>
            <div>
              {modules && <AllAttendancePieChart key={[attendanceWeekStart, attendanceWeekEnd]} modules={modules} weekStart={attendanceWeekStart} weekEnd={attendanceWeekEnd} />}

            </div>
          </div>
          <div label="Students">
            Nothing to see here, this tab is <em>extinct</em>!
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default StaffPage;

//dropdown of modules
//week selector
