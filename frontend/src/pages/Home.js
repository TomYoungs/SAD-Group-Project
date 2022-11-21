import { useEffect, useState } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import PieChart from '../components/PieChart'
import { useAuthContext } from '../hooks/useAuthContext'



const Home = () => {
    const [workouts, setWorkouts] = useState(null)
    const { user } = useAuthContext()

    useEffect(() => {

        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                setWorkouts(json)
            }
        }
        if (user) {
            fetchWorkouts()
        }
    }, [user])
    const getPresentInModuel = () => {
      //code for getting data from database
      const attendance =[[true,false,true,true,true,true,true],
                        [false,true,true,true,true,true,true],
                        [true,true,true,false,true,true,true],
                        [true,true,true,true,false,true,true],
                        [true,false,false,true,true,false,true]]
      let present = 0;
      //code to calculate number of students present in a given moduel here
      for (let x in attendance) {
         for (let y in attendance[x]) {
           if (attendance[x][y]) {
             present++
           }
         }
       }

      return present
    }
    const getAbsentInModuel = () => {
      //code for getting data from database
      const attendance =[[true,false,true,true,true,true,true],
                        [false,true,true,true,true,true,true],
                        [true,true,true,false,true,true,true],
                        [true,true,true,true,false,true,true],
                        [true,false,false,true,true,false,true]]
     let absent = 0
     //code to calculate number of students absent in a given moduel here
     for (let x in attendance) {
        for (let y in attendance[x]) {
          let status = !(attendance[x][y])
          if (status) {
            absent++
          }
        }
      }


      return absent

    }

    return (
        <div classname="home"style ={{display: 'grid', 'grid-template-columns': 'auto auto'}}>
            <div className='workouts'>
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <div classname="PieChart" style ={{width:'8%', height:'8%', position: 'absolute',right: '0px'}}>
              <PieChart present = {getPresentInModuel()} absent = {getAbsentInModuel()} />
            </div>
        </div>

    )
}

export default Home
