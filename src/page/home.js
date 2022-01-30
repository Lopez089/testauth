import { useAuth } from '../context/authContext'

export const Home = () => {

    const { user, logout, loading } = useAuth()

    const hundleLogout = async () => {
        await logout()
    }

    if (loading) { return <p>Loading</p> }

    return (
        <>
            <h1>Welcome {user.email} </h1>
            <button
                onClick={hundleLogout}
            >
                logout
            </button>
        </>

    )
}

//1:18