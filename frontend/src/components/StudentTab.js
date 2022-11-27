import React from "react";
import { useState } from "react";
import { useStudentAttendance } from "../hooks/useStudentAttedance";
import PieChart from "./PieChart";

export const StudentTab = ({ modules, tutorsUsers }) => {
  const [studentWeekID, setStudentWeekID] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  // const [userID, setUserID] = useState(null);
  // const [moduleID, setmoduleID] = useState(null);
  const {studentAttendance, attendance} = useStudentAttendance()
  
  let items = [1, 2, 3, 4, 5, 6, 7, 8];


  const handleSubmit = async (userID, moduleID) => {
    
    await studentAttendance(userID, moduleID);
  };

  const getPresentInModule = (attendance) => {
    //code for getting data from database

    let present = 0;
    //code to calculate number of students present in a given moduel here
    for (let x in attendance) {
      for (let y in attendance[x]) {
        if (attendance[x][y] === true) {
          present++;
        }
      }
    }

    return present;
  };
  const getAbsentInModule = (attendance) => {
    //code for getting data from database

    let absent = 0;
    //code to calculate number of students absent in a given moduel here
    for (let x in attendance) {
      for (let y in attendance[x]) {
        if (attendance[x][y] === false) {
          absent++;
        }
      }
    }

    return absent;
  };

  return (
    <>
      <div className="week-selector">
        <label>Select Current Week:</label>
        <select
          onChange={(e) => {
            const selectedWeek = e.target.value;
            setStudentWeekID(selectedWeek);
          }}
        >
          <option value=""></option>
          {items.map((item) => (
            <option key={item} value={item}>
              Week: {item}
            </option>
          ))}
        </select>
      </div>
      <div className="studentstab">
        {tutorsUsers &&
          tutorsUsers.map((users, index) => (
            <div>
              <h3 key={index} >{modules[index].name}</h3>
              {users.map((user, counter) => (
                <p key={counter} onClick={() => {
                  handleSubmit(user._id, modules[index]._id)
                  setSelectedUser(user)}}>
                  {user.name}
                </p>
              ))}
            </div>
          ))}
        <div>
          {selectedUser && (
            <div className="attendancezone">
              <h2>{selectedUser.name}</h2>
              <p>Here there would be a graph</p>
              <PieChart
                present={getPresentInModule(attendance)}
                absent={getAbsentInModule(attendance)}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StudentTab;
//get attendance of user based off UserID and ModuleID
