import { Box } from "@chakra-ui/react"
import { Grid, GridItem } from "@chakra-ui/react"
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
    <div >
       <Box w="100%" bg="teal.500" h="30px">
       <Breadcrumb float="right">
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
       </Box>
      {!home && (
        <div >
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}