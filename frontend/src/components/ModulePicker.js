// import React, {useState} from "react";

// export const ModulePicker = ({ modules, setModuleID}) => {
//   const [moduleID, setModuleID] = useState('')
  
//   return (
//     <div className="module-selector">
//       <label>Choose one of your Modules:</label>
//       <select onChange={(e)=>{
//         const selectedModule=e.target.value;
//         setModuleID(selectedModule)
//       }}>
//         {modules &&
//           modules.map((module) => (
//             <option key={module._id} value={module._id}>{module.name}</option>
//           ))}
//       </select>
//     </div>
//   );
// };

// export default ModulePicker;
