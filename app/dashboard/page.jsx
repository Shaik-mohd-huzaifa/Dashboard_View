'use client'
import { useSession, signOut } from "next-auth/react";

const Dashboard = () => {
    const {data: session} = useSession();
    console.log(session)
    const signOutprocess = async () => {
        await signOut();
        window.location.href = '/';
    }
    return (
        <>
        <button className="btn" onClick={() => signOutprocess()}>Click to logout</button>
        <div>This is dashboard : {session.user.name}</div>
        </>
    )
}

export default Dashboard;