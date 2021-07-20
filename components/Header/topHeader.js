import { Box } from "@chakra-ui/react"
import { Grid, GridItem } from "@chakra-ui/react"
import styles from "../layout.module.css"

import { IconButton,SearchIcon,PhoneIcon,Menu } from "@chakra-ui/react"
import { Input,InputGroup,InputLeftElement } from "@chakra-ui/react"
import { Flex,Avatar, Wrap, WrapItem, AvatarBadge, AvatarGroup } from "@chakra-ui/react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from "@chakra-ui/react"

import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'
// import Script from 'next/script'

const name = 'Ibukunoluwa Oyeniyi'
const isloggedout= 'None'
export const siteTitle = 'Next.js Sample Website'

export default function Navbar({ children, user,home}) {
  return (
       <Flex  className={styles.boxna}>
           <Wrap float="left">
                <WrapItem>
                    <p className={styles.logoname}>PISURV</p>
                </WrapItem>

                <WrapItem >
                    <InputGroup className={styles.searchinput}>
                        <InputLeftElement
                            pointerEvents="none"
                            color="gray.300"
                            fontSize="1.2em"
                            children="#"/>
                        <Input w="400px" type="tel" placeholder="Search" />
                    </InputGroup>
                </WrapItem>
           </Wrap>
           


        
           
                {/* <ol>
                    <Menu>Notification</Menu>
                    <Link href="/">
                        Login
                    </Link>
                </ol> */}
                
                
               
            
            
       </Flex>

  )
}