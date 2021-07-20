import '../styles/global.css'
import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"

export default function App({ Component, pageProps }) {
  return (
       
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
   )
  
}
