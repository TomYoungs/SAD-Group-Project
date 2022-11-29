import { useEffect, useState } from 'react'
import AllModuleDetails from '../components/AllModuleDetails'
import { useAuthContext } from '../hooks/useAuthContext'
import AllUserDetails from '../components/UserDetails'

const AdminPage = () => {
    const [modules, setModules] = useState(null)
    const { user } = useAuthContext()

    useEffect(() => {

        const fetchModules = async () => {
            const response = await fetch('/api/module/getallmodules', {
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
            console.log(modules)
        }
    }, [])

    //need to be styled prob in tabs so each are easily distinguishable
    return (
        <div className="admin-page">
            <div className='modules'>
                <h3>Module Details</h3>
                {modules && modules.map((module, index) => (
                    <AllModuleDetails key={index} module={module} />
                ))}
            </div>
            <div>
                <AllUserDetails />
            </div>
        </div>
    )
}

export default AdminPage