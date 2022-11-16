// import React from 'react'
// import { useEffect, useState } from 'react';
// import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from "react-chartjs-2";
// import { Pie } from "react-chartjs-2";
// ChartJs.register(
//   Tooltip, Title, ArcElement, Legend
// );


// //AttendanceForModule is an object with 2 atributes present and Absent
// //these two variables are the number of present and absent stundent throughout
// //the modules runtime
// const PieChart = (AttendanceForModule) => {
//   console.log(AttendanceForModule)
//   const data= {
//   datasets: [{
//       data: [AttendanceForModule.present, AttendanceForModule.absent],
//       //ToDo green and red look ugly maybe check with others for better schema?
//       backgroundColor:[
//         'Green',
//         'Red',
//       ]
//   },
// ],
// //These are purely for the key
// labels: [
//     'Present',
//     'Absent',
// ],
// }

//   return (
//     <div className='pie-chart'>
//       <Pie data={data}/>
//     </div>
//   )
// }

// export default PieChart
