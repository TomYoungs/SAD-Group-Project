import { useEffect, useState } from 'react'
import React from 'react'
import PieChart from '../components/PieChart'
import { useAuthContext } from '../hooks/useAuthContext'


const AllAttendancePieChart = ({modules, weekStart, weekEnd}) => {
  const [present, setPresent] = useState(0)
  const [absent, setAbsent] = useState(0)
  const { user } = useAuthContext()
  useEffect(() => {
   const fetchAttendances = async (module) => {
     const urls =[]
    {modules &&modules.map((module) => (
       urls.push('/api/attendance/getByModuleIdForCharts/'+module._id)
      ))}
      const response = Promise.all(urls.map(url =>
                   fetch(url)
                      .then(checkStatus)  // check the response of our APIs
                      .then(parseJSON)    // parse it to Json
                      .catch(error => console.log('There was a problem!', error))
              )).then(data => {
                setPresent(getPresentInModuels(data))
                setAbsent(getAbsentInModuel(data))
              })



   }
   if (user) {
        fetchAttendances()
   }
   }, [user])
   function checkStatus(response) {
         if (response.ok) {
             return Promise.resolve(response);
         } else {
             return Promise.reject(new Error(response.statusText));
         }
     }

   function parseJSON(response) {
       return response.json();
   }

    function getPresentInModuels (attendance) {
      //code for getting data from database

      let present = 0;
      //code to calculate number of students present in a given moduel here
      for (let x in attendance) {
         for (let y in attendance[x]) {
           for (let z in attendance[x][y]) {
             if ((attendance[x][y][z] == true) && (z<=weekEnd)&& (z>=weekStart)) {
               present++
             }
           }
         }
       }

      return present
    }
    function getAbsentInModuel  (attendance) {
      //code for getting data from database

     let absent = 0
     //code to calculate number of students absent in a given moduel here
     for (let x in attendance) {
        for (let y in attendance[x]) {
          for (let z in attendance[x][y]) {
            if ((attendance[x][y][z] == false) && (z<=weekEnd)&& (z>=weekStart)) {
              absent++
            }
          }
        }
      }
      console.log(weekEnd);
      return absent
    }




  return (

        <div classname="PieChart" style ={{width:'20%', height:'100%'}}>
          Total Attendance Statistics
          <PieChart present = {present} absent = {absent} />
        </div>
  )
}

export default AllAttendancePieChart
