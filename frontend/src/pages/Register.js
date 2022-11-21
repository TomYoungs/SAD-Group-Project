import {useState} from 'react'
import { useRegister } from '../hooks/useRegister'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const {register, error, isLoading} = useRegister()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await register(name, email, password)
    }

    return (
        <form className='signup' onSubmit={handleSubmit}>
            <h3>Register</h3>

            <label>Full Name:</label>
            <input
                type="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <label>Email:</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Password:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button disabled={isLoading}>Sign up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Register