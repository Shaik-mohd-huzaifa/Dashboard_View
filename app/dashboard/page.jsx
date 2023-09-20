'use client'
import { useSession, signOut } from "next-auth/react";

const Dashboard = () => {
    const {data: session} = useSession();
    if(!session || session.user){
        window.location.href = '/'
    }
    return (
        <>
        <button className="btn" onClick={() => signOut()}>Click to logout</button>
        <div>This is dashboard</div>
        </>
    )
}

export default Dashboard;