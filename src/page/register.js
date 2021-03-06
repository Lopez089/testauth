import { useState } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const { signup } = useAuth()
    const navigate = useNavigate()

    const handleChange = ({ target: { name, value } }) => {

        setUser({ ...user, [name]: value })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signup(user.email, user.password)
            navigate('/')
        } catch (err) {
            setError(err.message)
            setInterval(() => setError(''), 5000)

        }
    }

    return (
        <>
            <h1>register</h1>
            {error && <p>{error}</p>}
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email'
                    onChange={(e) => handleChange(e)}
                />
                <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Password'
                    onChange={(e) => handleChange(e)}
                />
                <button type='submit' >Submit</button>
            </form>
        </>
    )
}