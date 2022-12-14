import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentPage from "./pages/StudentPage";
import StaffPage from "./pages/StaffPage";
import ErrorPage from "./pages/404";
import AdminPage from "./pages/AdminPage";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/register"
              element={!user ? <Register /> : <Navigate to="/studentpage" />}
            />
            <Route
              path="/login"
              element={
                !user ? (
                  <Login />
                ) : //if there is a user, performs checks below, role being 0 means student, 4 means admin, rest are a tutor (1 = regular tutor, 2 = Academic Advisor, 3 = Course Leader)
                  user.role === 0 ? (
                    <StudentPage />
                  ) : user.role === 4 ? (
                    <Navigate to="/adminpage" />
                  ) : (
                    <Navigate to="/staffpage" />
                  )
              }
            />
            <Route
              path="/studentpage"
              element={
                !user ? (
                  <Login />
                ) : user.role === 0 ? (
                  <Navigate to="/adminpage" />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/staffpage"
              element={
                !user ? (
                  <Login />
                ) : user.role < 4 && user.role > 0 ? (
                  <StaffPage />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/adminpage"
              element={
                !user ? (
                  <Login />
                ) : user.role === 4 ? (
                  <AdminPage />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;