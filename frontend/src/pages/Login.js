import {useState} from 'react'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <form className='Login' onSubmit={handleSubmit}>
            <h2>Log In</h2>
            
            {/* <label>Email:</label> */}
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="email address"
            />
            {/* <label>Password:</label> */}
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="password"
            />
            <button className='default-button' disabled={isLoading}>Log In</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default Login