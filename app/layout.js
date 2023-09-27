import './globals.css'
import { getServerSession } from 'next-auth'
import SessionProvider from './Components/SessionProvider'
import Navbar from './Components/navbar';
import {PopUpContextProvider} from './Context/popup.context'
import {ProfileInfoProvider} from './Context/Profile-Info.content'
import {PopupFormToggleProvider} from './Context/Toggle-Popup'
import {DashboardVisibilityProvider} from "./Context/dashboardDataProvider"

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <ProfileInfoProvider>
        <DashboardVisibilityProvider>
        <PopUpContextProvider>
          <PopupFormToggleProvider>
        <SessionProvider session={session} basePath='https://react-intern-assignment-cjk7how6u-shaik-mohd-huzaifa.vercel.app/api/auth'>
        {children}
        </SessionProvider>
        </PopupFormToggleProvider>
        </PopUpContextProvider>
        </DashboardVisibilityProvider>
        </ProfileInfoProvider>
        </body>
    </html>
  )
}
