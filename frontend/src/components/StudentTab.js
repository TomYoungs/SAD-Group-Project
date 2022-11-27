import React from "react";
import { useEffect, useState } from "react";
import PieChart from "./PieChart";

export const StudentTab = ({ modules, tutorsUsers }) => {
  const [studentWeekID, setStudentWeekID] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  let items = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    console.log("studenttab component created");
  }, []);
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
          <option key="empty" value=""></option>
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
              <h3 key={modules[index]._id}>{modules[index].name}</h3>
              {users.map((user) => (
                <button key={user._id} onClick={() => setSelectedUser(user)}>
                  {user.name}
                </button>
              ))}
            </div>
          ))}
        <div>
          {selectedUser && (
            <div className="attendancezone">
              <h2>{selectedUser.name}</h2>
              <p>Here there would be a graph</p>
                {/* <PieChart present={1} absent={1}/> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StudentTab;
