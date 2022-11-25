// import { ModulePicker } from "../components/ModulePicker";
// import { WeekPicker } from "../components/WeekPicker";
import ModuleDetails from "../components/ModuleDetails";
import PieChart from "../components/PieChart";
import AllAttendancePieChart from "../components/AllAttendancePieChart";
import { useEffect, useState } from "react";
import { useGenerateCode } from "../hooks/useGenerateCode";
import Tabs from "../components/Tabs";

const StaffPage = () => {
  let items = [1, 2, 3, 4, 5, 6, 7, 8];
  const [modules, setModule] = useState(null);
  const [tutorsUsers, setTutorsUsers] = useState(null);
  const userid = JSON.parse(localStorage.getItem("user")).id;
  const [moduleID, setModuleID] = useState("");
  const [codeID, setCodeID] = useState("");
  const [weekID, setWeekID] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const { generateCode, error, isLoading } = useGenerateCode();

  const handleGenerate = async (e) => {
    e.preventDefault();
    setCodeID(await generateCode(moduleID, weekID));
    setModuleID("");
    setWeekID("");
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

    const fetchModulesStudents = async () => {
      const response = await fetch("/api/user/modulesusers/" + userid, {
        method: "GET",
      });
      const json = await response.json();

      if (response.ok) {
        setTutorsUsers(json);
      }
    };

    //search for users based on moduleID

    fetchModules();
    fetchModulesStudents();
  }, []);

  return (
    <>
      <div id="staffTabs">
        <Tabs>
          <div label="Today's Code">
            <div className="tab1">
              <form
                className="module-picker tab-content"
                onSubmit={handleGenerate}
              >
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
                <button
                  className="defaultButton"
                  type="submit"
                  disabled={isLoading}
                >
                  Generate
                </button>
                {error && <div className="error">{error}</div>}
                {codeID && <div className="generated-code">{codeID}</div>}
              </form>
            </div>
          </div>
          <div label="Modules">
            <h2>StaffPage</h2>
            <div>
              {modules &&
                modules.map((module) => (
                  <ModuleDetails key={module._id} module={module} />
                ))}
            </div>
            <div>{modules && <AllAttendancePieChart modules={modules} />}</div>
          </div>
          <div label="Students">
            <div className="studentstab">
              {tutorsUsers &&
                tutorsUsers.map((users, index) => (
                  <div>
                    <h3 key={modules[index]._id}>{modules[index].name}</h3>
                    {users.map((user) => (
                      <button
                        key={user._id}
                        onClick={() => setSelectedUser(user)}
                      >
                        {user.name}
                      </button>
                    ))}
                  </div>
                ))}
              <div className="attendancezone">
                {selectedUser && (
                  <>
                    <h2>{selectedUser.name}</h2>
                    <p>Here there would be a graph</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default StaffPage;

//dropdown of modules
//week selector
