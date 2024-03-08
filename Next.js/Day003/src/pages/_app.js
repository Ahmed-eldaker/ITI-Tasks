import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.js")
  }, []);
  if((<Component {...pageProps} />).type.displayName === "ErrorPage") return <Component {...pageProps} />
  return (
    <>
    <SessionProvider session={session}>
      <NavBar />
      <div className="container ">
        <Component {...pageProps} />  
      </div>
      </SessionProvider>
    </>
  ) 
}
