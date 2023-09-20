/* eslint-disable jsx-a11y/alt-text */
'use client'
import Image from 'next/image';
import {useSession, signIn, signOut} from 'next-auth/react';

const Navbar = () => {
    const {data:session} = useSession();
    if(session && session.user){
        console.log(session.user);
        return (
            <div className="">
                <Image width="200" height="200" src={session.user.image}/>
                <p>Username: {session.user.name}</p>
                <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={() => signOut()}>Sign Out</button>
            </div>
        )
    }
    return (
        <div className="">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => signIn('google')}>Sign in</button>
        </div>
    )
}

export default Navbar;