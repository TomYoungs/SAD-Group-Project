import { useEffect, useState } from 'react'
import ModuleDetails from '../components/ModuleDetails'
import AllAttendancePieChart from '../components/AllAttendancePieChart'
import { useAuthContext } from '../hooks/useAuthContext'

const StaffPage = () => {
  const [modules, setModules] = useState(null)
  const { user } = useAuthContext()


  useEffect(() => {

    const fetchModules = async () => {
      let query = '/api/module/getModulesByTutor/'+user.id
      const response = await fetch(query, {
          headers: {
              'Authorization': `Bearer ${user.token}`
          }
      })
      const json = await response.json()

      if (response.ok) {
          setModules(json)
      }
    }

    if (user) {
        fetchModules()
    }

    }, [user])




    return (
        <div className='StaffPage'>
            <h2>StaffPage</h2>
            <div>
            {modules &&modules.map((module) => (
                <ModuleDetails key={module._id} module={module} />
            ))}
            </div>
            <div>
            {modules && <AllAttendancePieChart modules={modules} />}

            </div>
        </div>
    )
}

export default StaffPage
