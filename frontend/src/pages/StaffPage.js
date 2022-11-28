// import { ModulePicker } from "../components/ModulePicker";
// import { WeekPicker } from "../components/WeekPicker";
import ModuleDetails from "../components/ModuleDetails";
import AllAttendancePieChart from "../components/AllAttendancePieChart";
import { useEffect, useState } from "react";
import Tabs from "../components/Tabs";
import { useAuthContext } from '../hooks/useAuthContext'
import StudentTab from "../components/StudentTab";
import CodeTab from "../components/CodeTab";


const StaffPage = () => {
  const [modules, setModule] = useState(null);
  const [tutorsUsers, setTutorsUsers] = useState(null);
  const userid = JSON.parse(localStorage.getItem("user")).id;
  const role = JSON.parse(localStorage.getItem("user")).role;
  const userToken = JSON.parse(localStorage.getItem("user")).token;
  const [moduleID, setModuleID] = useState("");
  const [codeID, setCodeID] = useState("");
  const [weekID, setWeekID] = useState("");
  let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [attendanceWeekStart, setAttendanceWeekStartID] = useState(0);
  const [attendanceWeekEnd, setAttendanceWeekEndID] = useState(8);

  useEffect(() => {
    const fetchModules = async () => {
      const response = await fetch("/api/module/getbyuser/" + userid, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${userToken}`
        }
      });
      const json = await response.json();

      if (response.ok) {
        setModule(json);
      }
    };

    const fetchModulesStudents = async () => {
      const response = await fetch("/api/user/modulesusers/" + userid, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${userToken}`
        }
      });
      const json = await response.json();

      if (response.ok) {
        setTutorsUsers(json);
      }
    };

    
    //search for users based on moduleID
    fetchModules();
    fetchModulesStudents();
    displayTeacherCodes(role)
  }, []);
  function displayTeacherCodes(props) {
    var res = <></>;

    if (props === 1)
    {
      res = <div label="Today's Code">
      <CodeTab modules={modules} />
    </div>
    }

    return res;
  }

  function displayStudents(props) {
    var res = <></>;

    if (props === 3)
    {
      res = <div label="Students">
      {tutorsUsers && (
        <StudentTab modules={modules} tutorsUsers={tutorsUsers} />
      )}
    </div>
    }

    return res;
  }

  function displayTitle(props) {
    var role;
    switch (props)
    {
      case 1:
        role="Tutor"
        break
      case 2:
        role="Academic Advisor"
        break
      case 3:
        role="Module Leader"
        break
    }
    
    var res = <h1>Welcome to the {role} Page!</h1>

    return res;
  }
  
  return (
    <>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      {displayTitle(role)}
      <div id="staffTabs">
        <Tabs>
          {displayTeacherCodes(role)}
          <div label="Modules">
            <div className="default-tab tab2">
              <div className="module-info">
                <div className="week-selector-container">
                  <div className="week-selector-item">
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
                  <div className="week-selector-item">
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
                <div className="module-list">
                  {modules &&
                    modules.map((module) => (
                      <ModuleDetails
                        key={module._id}
                        module={module}
                        weekStart={attendanceWeekStart}
                        weekEnd={attendanceWeekEnd}
                      />
                    ))}
                </div>
                <div className="attendance-pie">
                  {modules && (
                    <AllAttendancePieChart
                      key={[attendanceWeekStart, attendanceWeekEnd]}
                      modules={modules}
                      weekStart={attendanceWeekStart}
                      weekEnd={attendanceWeekEnd}
                    />
                  )}
                </div>
                <div className="attendance-pie-mobile">
                  {modules && (
                    <AllAttendancePieChart
                      key={[attendanceWeekStart, attendanceWeekEnd]}
                      modules={modules}
                      weekStart={attendanceWeekStart}
                      weekEnd={attendanceWeekEnd}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          {displayStudents(role)}
        </Tabs>
      </div>
    </>
  );
};

export default StaffPage;

//dropdown of modules
//week selector