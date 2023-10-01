import LoginContainer from "./Components/Login"
import Head from "next/head"
import RootLayout from "./layout"

export default function Home() {
  return (
    <RootLayout>
      <>
    <Head>
    <link rel="preload" href="./globals.css" as="style" />
    </Head>
      <LoginContainer/>
      </>
      </RootLayout>
  )
}
