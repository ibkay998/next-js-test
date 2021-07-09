import '../styles/global.css'
import * as React from "react"
// 1. import `ChakraProvider` component
// import { ChakraProvider } from "@chakra-ui/react"

export default function App({ Component, pageProps }) {
  return (
        <Component {...pageProps} />)
  // <ChakraProvider>
        
        {/* </ChakraProvider> */}
  
}
