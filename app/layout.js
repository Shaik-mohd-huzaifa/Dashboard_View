import './globals.css'
import { getServerSession } from 'next-auth'
import SessionProvider from './Components/SessionProvider'
import Navbar from './Components/navbar';
import {PopUpContextProvider} from './Context/popup.context'

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <PopUpContextProvider>
        <SessionProvider session={session}>
        {children}
        </SessionProvider>
        </PopUpContextProvider>
        </body>
    </html>
  )
}
