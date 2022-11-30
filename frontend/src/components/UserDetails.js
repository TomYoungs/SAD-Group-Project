import { useEffect, useState } from 'react'
import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'


const AllUserDetails = () => {
    const [users, setUsers] = useState("")
    const { user } = useAuthContext()
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('/api/user/getall', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()
            console.log(json[0]);
            if (response.ok) {
                setUsers(json)
            }
        }
        if (user) {
            fetchUsers()
        }

    }, [user])

    return (
        <div className='user-details' >
            <h3>User Details</h3>
            {users && users.map((auser) => (
                <div className='user-container' style={{ padding: "10px" }}>
                    <div style={{ backgroundColor: "white", padding: "5px" }}>
                        <h3>{auser.name}</h3>
                        <p>Email: {auser.email}</p>
                        <p>User Role: {auser.role}</p>
                        {auser.Modules.map((usermodules) => (
                            <p>{usermodules}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

//role,name,email,password,Modules
export default AllUserDetails