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
    Grid,
    GridItem,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from "@chakra-ui/react"

export default function Dashboard({ allPostsData }) {
  
    return (
        <Grid
            h="20px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(4, 1fr)"
            gap={0}
            >
            <GridItem rowSpan={1} colSpan={4} ><Navbar home user/></GridItem>
            <GridItem h="827px" w="288px" rowSpan={1} colSpan={1} >
                <SideMenu/>
            </GridItem>
            <GridItem borderRadius= "30px" className="main-container"  bg="blue" rowSpan={1} colSpan={3}></GridItem>
          
        </Grid>

      
      
    )}