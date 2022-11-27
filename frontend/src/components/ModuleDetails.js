import { useEffect, useState } from 'react'
import React from 'react'
import PieChart from '../components/PieChart'
import { useAuthContext } from '../hooks/useAuthContext'


const ModuleDetails = ({module}) => {
  const [attendance, setAttendance] = useState(null)
  const { user } = useAuthContext()
  useEffect(() => {
    let query = '/api/attendance/getByModuleIdForCharts/'+module._id
    const fetchModuleAttendance = async () => {
      const response = await fetch(query, {
          headers: {
              'Authorization': `Bearer ${user.token}`
          }
      })
      const json = await response.json()
      if (response.ok) {
          setAttendance(json)
      }
    }
    if (user) {
        fetchModuleAttendance()
    }

    }, [user])

    const getPresentInModuel = (attendance) => {
      //code for getting data from database  

      let present = 0;
      //code to calculate number of students present in a given moduel here
      for (let x in attendance) {
         for (let y in attendance[x]) {
           if (attendance[x][y] == true) {
             present++
           }
         }
       }

      return present
    }
    const getAbsentInModuel = (attendance) => {
      //code for getting data from database

     let absent = 0
     //code to calculate number of students absent in a given moduel here
     for (let x in attendance) {
        for (let y in attendance[x]) {
          if (attendance[x][y] == false) {
            absent++
          }
        }
      }

      return absent
    }
  return (
    <div className='workout-details' style ={{display: 'grid', 'grid-template-columns': 'auto auto'}}>
        <div>
        <h4>{module.name}</h4>
        <br/>
        </div>
        <div className="PieChart" style ={{width:'6%', height:'100%', position: 'absolute',right: '100px'}}>
          <PieChart present = {getPresentInModuel(attendance)} absent = {getAbsentInModuel(attendance)} />
        </div>
    </div>
  )
}

export default ModuleDetails
