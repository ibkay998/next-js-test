import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../components/Header/topHeader'
import SideMenu from '../components/Header/sideMenu'
import MainContainer from '../components/Header/mainContainer'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import firebase from '../firebase/firebase'
import {
    Box,
    Grid,
    GridItem,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Flex,
  } from "@chakra-ui/react"

export default function Dashboard({ allPostsData }) {
  
    return (
      <Box>
        <Flex w="100%">
          <Navbar home user />
        </Flex>
        <Flex flexDirection="row">
          <Flex display={["none", "none", "flex", "flex", "flex"]}>
            <SideMenu />
          </Flex>
          <Flex w="100%">
            <MainContainer />
          </Flex>
        </Flex>
      </Box>
    );}