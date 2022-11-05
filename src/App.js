import { Routes, Route } from 'react-router-dom'
import Login from './features/auth/Login'

function App() {
    return (
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />          
        </Route>
      </Routes>
    );
}

export default App;