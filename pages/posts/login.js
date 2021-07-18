import { Flex,Heading,Input,Button,useColorMode,useColorModeValue } from "@chakra-ui/react"
import styles from './layout.module.css'
import Link from 'next/link'

import { ChakraProvider } from "@chakra-ui/react"

export default function IndexPage({ }) {
    const { toggleColorMode } = useColorMode()
    const formbackground = useColorModeValue("gray.100","gray.700")

    return <Flex height="100vh" align="center" justifyContent="center">
                <Flex direction="column" background={formbackground} p={12} rounded={6}>
                    <Heading mb={6}>Log in</Heading>
                    <Input placeholder="lazar@chakra-ui.com" variant="filled" mb={3} type="email"/>
                    <Input placeholder="*************" variant="filled" mb={6} type="password"  />
                    <Button colorScheme="teal"> Log in </Button>
                    <Button onClick={toggleColorMode}> Dark Mode</Button>
                    <div className={styles.backToHome}>
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                </Flex>
                
           </Flex>
    
  }