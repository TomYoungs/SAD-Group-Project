import React from "react";
import { useState } from "react";
import { useStudentAttendance } from "../hooks/useStudentAttedance";
import PieChart from "./PieChart";

export const StudentTab = ({ modules, tutorsUsers }) => {
  const [attendanceWeekEndID, setAttendanceWeekEndID] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const { studentAttendance, attendance } = useStudentAttendance();

  let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const handleSubmit = async (userID, moduleID) => {
    await studentAttendance(userID, moduleID);
  };

  const getPresentInModule = (attendance) => {
    let present = 0;
    //Calculate number of students present in a given module
    for (let x in attendance) {
      for (let y in attendance[x]) {
        if (attendance[x][y] === true && y <= attendanceWeekEndID && y >= 1) {
          present++;
        }
      }
    }

    return present;
  };
  const getAbsentInModule = (attendance) => {
    let absent = 0;
    //Calculate number of students absent in a given module
    for (let x in attendance) {
      for (let y in attendance[x]) {
        if (attendance[x][y] === false && y <= attendanceWeekEndID && y >= 1) {
          absent++;
        }
      }
    }

    return absent;
  };

  return (
    <>
      <div className="default-tab tab3">
        <div className="students-info">
          <div className="week-selector-container">
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
          <div className="students-list">
          {tutorsUsers &&
            tutorsUsers.map((users, index) => (
              <div className="students-in-module">
                <h3 key={index}>{modules[index].name}</h3>
                {users.map((user, counter) => (
                  <p
                    key={counter}
                    onClick={() => {
                      handleSubmit(user._id, modules[index]._id);
                      setSelectedUser(user);
                    }}
                  >
                    {user.name}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className="attendance-pie">
            {selectedUser && (
              <div className="attendancezone">
                <h2>{selectedUser.name}</h2>
                <PieChart
                  present={getPresentInModule(attendance)}
                  absent={getAbsentInModule(attendance)}
                />
              </div>
            )}
          </div>
          <div className="attendance-pie-mobile">
            {selectedUser && (
              <div>
                <h2>{selectedUser.name}</h2>
                <PieChart
                  present={getPresentInModule(attendance)}
                  absent={getAbsentInModule(attendance)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentTab;