import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import { checkLogin } from './hooks/checkLogin'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import StudentPage from './pages/StudentPage'
import StaffPage from './pages/StaffPage'
import ErrorPage from './pages/404'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/register"
              element={!user ? <Register /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> :
                //if there is a user, performs checks below, role being 0 means student, 4 means admin, rest are a tutor
                user.role === 0 ? <Navigate to="/studentpage" /> : user.role === 4 ? <Navigate to="/" /> : <Navigate to="/staffpage" />}
            />
            <Route
              path="/studentpage"
              element={!user ? <Login /> : user.role === 0 ? <Navigate to="/studentpage" /> : <Navigate to="/login" />}
            />
            <Route
              path="/staffpage"
              element={!user ? <Login /> : user.role < 4 && user.role > 0 ? <Navigate to="/staffpage" /> : <Navigate to="/login" />}
            />
            {/* <Route UNCOMMENT WHEN ADMIN PAGE UP AND RUNNING
              path="/adminpage"
              element={!user ? <Login /> : user.role === 4 ? <Navigate to="/adminpage" /> : <Navigate to="/login" />}
            /> */}
            <Route
              path="*"
              element={<ErrorPage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
