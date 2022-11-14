import { useEffect, useState } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
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

    return (
        <div classname="home">
            <div className='workouts'>
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
        </div>
    )
}

export default Home