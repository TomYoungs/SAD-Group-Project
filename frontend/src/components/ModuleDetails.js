import { useEffect, useState } from 'react'
import React from 'react'
import PieChart from '../components/PieChart'
import MiniPieChart from './MiniPieChart'
import { useAuthContext } from '../hooks/useAuthContext'


const ModuleDetails = ({module, weekStart, weekEnd}) => {
  const [attendance, setAttendance] = useState(null)
  const { user } = useAuthContext()
  useEffect(() => {
    let query = '/api/attendance/getbymoduleidforcharts/'+module._id
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
           if ((attendance[x][y] == true) && (y<=weekEnd) && (y>=weekStart)) {
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
          if ((attendance[x][y] == false) && (y<=weekEnd)&& (y>=weekStart)) {
            absent++
          }
        }
      }

      return absent
    }











  return (
     <div className='individual-module' style ={{display: 'grid', 'grid-template-columns': 'auto auto'}}>
        <div>
        <h3>{module.name}</h3>
        <br/>
        </div>
        <div classname="MiniPieChart" style ={{width:'80px', height:'80px', position: 'absolute',right: '10px'}}>
          <MiniPieChart present = {getPresentInModuel(attendance)} absent = {getAbsentInModuel(attendance)} />
        </div>
    </div>
  )
}

export default ModuleDetails
