import LoginContainer from "./Components/Login"
import Head from "next/head"

export default function Home() {
  return (
    <>
    <Head>
    <link rel="preload" href="./globals.css" as="style" />
    </Head>
      <LoginContainer/>
      </>
  )
}
