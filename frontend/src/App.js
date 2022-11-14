import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import Home from './pages/Home'
import Navbar from  './components/Navbar'
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
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/register"
              element={!user ? <Register /> : <Navigate to="/" />}
            />
            <Route
              path="/studentpage" 
              element={<StudentPage />}
            />
            <Route 
              path="/StaffPage"
              element={<StaffPage />}
            />
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
