import { Box } from "@chakra-ui/react"
import { Grid, GridItem } from "@chakra-ui/react"
import styles from "../layout.module.css"
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
                    <Avatar name="pi survey" src="public\images\profile.jpg" alt="couldn't find image"/>
                </WrapItem>
           </Wrap>
           <p className={styles.logoname}>PISURV</p>
           
        <Breadcrumb className={styles.nav}>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem >
                    <BreadcrumbLink href="/aboutus">About us</BreadcrumbLink>
                </BreadcrumbItem>
                
                <BreadcrumbItem >
                <BreadcrumbLink action={isloggedout}>
                    {!user ? (
                    <p>Login</p> )
                    : <p>Logout</p>

                    }
                    </BreadcrumbLink>
                </BreadcrumbItem>
            
            </Breadcrumb>
       </Flex>

  )
}