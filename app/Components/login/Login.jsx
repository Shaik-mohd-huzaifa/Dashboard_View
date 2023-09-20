/* eslint-disable jsx-a11y/alt-text */
'use client';
import Image from 'next/image';
import {useSession, signIn, signOut} from 'next-auth/react';
import Styles from './login.module.scss';
import { redirect } from 'next/dist/server/api-utils';

const LoginContainer = () => {
    const {data: session} = useSession();
    
    if(session && session.user){
        window.location.href = '/dashboard';
        return null
    }
    return(
        <div className="container">
            <div className="">
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <Image width='25' height="25" style={{paddingRight: '5px'}} src="https://i.ibb.co/cgTYRDJ/google-logo-png-29546.png" />
  <span>Sign in with Google</span>
</button>
<button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" disabled>
        <Image width='22' height="22" style={{paddingRight: '10px'}} src="https://i.ibb.co/ykw4txp/apple-1-3x.png" />
  <span>Sign in with Apple</span>
</button>
        </div>
        </div>
    )
}

export default LoginContainer;