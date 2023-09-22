/* eslint-disable jsx-a11y/alt-text */
'use client';
import Image from 'next/image';
import {useSession, signIn, signOut} from 'next-auth/react';
import Styles from './../login.module.scss';
import { redirect } from 'next/dist/server/api-utils';
import { useEffect } from 'react';

const LoginContainer = () => {
  const {data:session} = useSession();

  console.log(session);
  if(session && session.user){
    window.location.href = '/dashboard';
  }
    return(
    <div className={`${Styles.mainContainer} bg-zinc-50`}>
        <div className={Styles.view}>
        <div className={Styles.diagnol}>
        </div>
        <div className={Styles.contents}>
          <div className={Styles.logo}>
          <Image src="/logo.png" width="50" height="50" alt='logoImage' />
          </div>
          <div className={Styles.brandContainer}>
          <h2>.Pears</h2>
          <div className={Styles.icons}>
            <Image src="/github.svg" width="50" height="50" alt='github'/>
            <Image src="/twitter.svg" width="50" height="50" alt='twitter'/>
            <Image src="/linkedin.svg" width="50" height="50" alt='linkedin' />
            <Image src="/discord.svg" width="50" height="50" alt='discord'/>
          </div>
          </div>
        </div>
        </div>
        <div className={`${Styles.logincontainer} h-full`}>
            <div className={Styles.headerContainer}>
                <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold'>Sign In</h2>
                <p>Sign in to your account</p>
            </div>
            <div className={Styles.btnContainer}>
            <button className="bg-slate-100 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded inline-flex items-center" onClick={() => signIn('google')}>
        <Image width='25' height="25" style={{paddingRight: '5px'}} alt='Google' src="https://i.ibb.co/cgTYRDJ/google-logo-png-29546.png" />
  <span>Sign in with Google</span>
</button>
<button className="bg-slate-100 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded inline-flex items-center" disabled>
        <Image width='22' height="22" style={{paddingRight: '10px'}} alt="Apple" src="https://i.ibb.co/ykw4txp/apple-1-3x.png" />
  <span>Sign in with Apple</span>
</button>
        </div>
        <div className={`${Styles.formContainer} min-h-full`}>
  <form className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm mb-2" htmlFor="username">
        Email address
      </label>
      <input className="shadow appearance-none border bg-zinc-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=""/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border bg-zinc-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder=""/>
      {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
    <div className="flex flex-col items-start gap-3 justify-between">
      <a className="block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="">
        Forgot Password?
      </a>
      <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
    </div>
  </form>
<p className='text-zinc-500'>Don&apos;t have a account ?<span className='text-sky-500'> Register here</span></p>
        </div>
</div>
<div className={Styles.iconshidden}>
            <Image src="/github.svg" width="50" height="50" alt='github'/>
            <Image src="/twitter.svg" width="50" height="50" alt='twitter'/>
            <Image src="/linkedin.svg" width="50" height="50" alt='linkedin' />
            <Image src="/discord.svg" width="50" height="50" alt='discord'/>
          </div>
        </div>
    )
}

export default LoginContainer;