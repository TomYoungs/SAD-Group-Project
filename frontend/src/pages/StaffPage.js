// import { ModulePicker } from "../components/ModulePicker";
// import { WeekPicker } from "../components/WeekPicker";
import ModuleDetails from "../components/ModuleDetails";
import AllAttendancePieChart from "../components/AllAttendancePieChart";
import { useEffect, useState } from "react";
import Tabs from "../components/Tabs";
import StudentTab from "../components/StudentTab";
import CodeTab from "../components/CodeTab";

const StaffPage = () => {
  const [modules, setModule] = useState(null);
  const [tutorsUsers, setTutorsUsers] = useState(null);
  const userid = JSON.parse(localStorage.getItem("user")).id;

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
            <CodeTab modules={modules} />
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
            {tutorsUsers && (
              <StudentTab modules={modules} tutorsUsers={tutorsUsers} />
            )}
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default StaffPage;

//dropdown of modules
//week selector
