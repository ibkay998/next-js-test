import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../components/Header/topHeader'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import firebase from '../firebase/firebase'
import WriteToCloudFiresore from '../firebase/firestore'
import {
  Image,
  SimpleGrid,
  Text,
  Box,
  Spacer,
  Grid,
  GridItem,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
  Circle,
} from "@chakra-ui/react";


firebase()

import { getSortedPostsData } from '../lib/posts'
import { Flex } from '@chakra-ui/layout'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  

  return (
    <Flex className="homepage" display="flex" flexDir="column">
      <SimpleGrid columns={2}>
        <Text
          mt={[6]}
          ml={[6]}
          color="white"
          fontFamily="Roboto"
          fontSize="24px"
          fontWeight="bold"
          flexWrap="wrap"
        >
          PiSurv
        </Text>
        <Breadcrumb mt={[6]} color="white" fontFamily="Roboto" fontSize="20px">
          <BreadcrumbItem className="breadguy">
            <BreadcrumbLink
              pr={["none", "none", 30, 50, 100]}
              display={[
                "none",
                "none",
                "inline-block",
                "inline-block",
                "inline-block",
              ]}
            >
              Home
            </BreadcrumbLink>
            <BreadcrumbLink
              pr={["none", "none", 30, 50, 100]}
              display={[
                "none",
                "none",
                "inline-block",
                "inline-block",
                "inline-block",
              ]}
            >
              Surveys
            </BreadcrumbLink>
            <BreadcrumbLink
              pr={["none", "none", 30, 50, 100]}
              display={[
                "none",
                "none",
                "inline-block",
                "inline-block",
                "inline-block",
              ]}
            >
              About
            </BreadcrumbLink>
            <BreadcrumbLink className="signin">Sign In</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </SimpleGrid>
      <Breadcrumb
        color="white"
        ml={"40%"}
        display={["flex", "flex", "none", "none", "none"]}
      >
        <BreadcrumbLink>Home</BreadcrumbLink>
        <BreadcrumbLink>Surveys</BreadcrumbLink>
        <BreadcrumbLink>About</BreadcrumbLink>
      </Breadcrumb>
      <Box>
        <SimpleGrid columns={2}>
          <Box>
            <Text>Imagine no more </Text>
            <Text
              fontFamily="Roboto"
              color="white"
              fontSize="59px"
              borderBottom="solid"
              borderBottomColor="white"
              pb="4px"
            >
              Pisurv
            </Text>

            <Button> Get Started</Button>
            <Text color="white">
              A platform where companies meet users to get surveys filled
            </Text>
          </Box>

          <Image color="white" display="block" src="rightsection.png" />
        </SimpleGrid>
      </Box>
      <Box></Box>
    </Flex>
    // <Layout home>
    //   {/* Keep the existing code here */}

    //   {/* Add this <section> tag below the existing <section> tag */}
    //   {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    //     <WriteToCloudFiresore/>
    //     <Link href={`/posts/login`}>
    //       <a>Login</a>
    //     </Link>
    //     <ul className={utilStyles.list}>
    //       {allPostsData.map(({ id, date, title }) => (
    //         <li className={utilStyles.listItem} key={id}>
    //         <Link href={`/posts/${id}`}>
    //           <a>{title}</a>
    //         </Link>
    //         <br />
    //         <small className={utilStyles.lightText}>
    //           <Date dateString={date} />
    //         </small>
    //       </li>
    //       ))}
    //     </ul>
    //   </section> */}
    // </Layout>
  );
}