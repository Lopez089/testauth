import { useState } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleChange = ({ target: { name, value } }) => {

        setUser({ ...user, [name]: value })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(user.email, user.password)
            navigate('/')
        } catch (err) {
            setError(err.message)
            setInterval(() => setError(''), 5000)

        }
    }
    return (
        <>
            <div className='shadow-xl p-7 center gap-4 w-80 rounded-md	'>
                <h1 className='text-3xl	'>Login</h1>
                {error && <p>{error}</p>}
                <form onSubmit={(e) => handleSubmit(e)} >
                    <div className='mt-5'>
                        <label>Email</label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Email'
                            onChange={(e) => handleChange(e)}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        />
                    </div>
                    <div className='mt-5'>
                        <label>Password</label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            placeholder='Password'
                            onChange={(e) => handleChange(e)}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        />
                    </div>
                    <button
                        type='submit'
                        className="mt-5 bg-indigo-400 py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

                    >
                        Submit
                    </button>
                </form>
            </div>
        </>


    )
}