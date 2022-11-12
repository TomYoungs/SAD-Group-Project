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
        <Link to="/">
            <h1>Class Scheduler📝</h1>
        </Link>
        <nav>
          { user && (
          <div>
            <span>{user.email}</span>
            <button onClick={handleClick}>logout</button>
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