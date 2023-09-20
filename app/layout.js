import './globals.css'
import { getServerSession } from 'next-auth'
import SessionProvider from './Components/SessionProvider'
import Navbar from './Components/navbar';

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
        {children}
        </SessionProvider>
        </body>
    </html>
  )
}
