import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout  } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

export const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
   <header>
    <div className="container">
        <Link to="/login">
            <h1>Class Scheduler📝</h1>
        </Link>
        <nav>
          { user && (
          <div>
            <span className='email-address'>{user.email}</span>
            <button className='default-button' onClick={handleClick}>logout</button>
          </div>
          )}
          {!user && (
          <div>
            <Link to="/login">Login </Link>
            <Link to="/register">Register </Link>
          </div>
          )}
        </nav>
    </div>
   </header>
  )
}

export default Navbar