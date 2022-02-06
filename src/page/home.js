import { useEffect, useState } from 'react'
import { useAuth } from '../context/authContext'
import { db } from '../firebase/firebase'
import { collection, getDoc, doc } from 'firebase/firestore'

export const Home = () => {
    const [tasks, setTaks] = useState([]);
    const { user, logout, loading } = useAuth()



    const hundleLogout = async () => {
        await logout()
    }

    useEffect(() => {

        const getTask = async () => {

            const docRef = doc(db, "taks", "XVySWeUDRIhBZCsETpTa")
            const docSnap = await getDoc(docRef)

            setTaks(docSnap.data().tasks)
        }
        getTask()
    }, []);






    if (loading) { return <p>Loading</p> }

    return (
        <>
            <h1>Welcome {user.email} </h1>
            <button
                onClick={hundleLogout}
            >
                logout
            </button>


            {tasks.map(task => <p key={task.task}>{task.task}</p>)}
        </>

    )
}

//1:18