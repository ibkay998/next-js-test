import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../components/Header/topHeader'
import SideMenu from '../components/Header/sideMenu'
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
            templateColumns="repeat(2, 1fr)"
            gap={1}
            >
            <GridItem rowSpan={1} colSpan={2} ><Navbar home user/></GridItem>
            <GridItem h="827px" w="288px" rowSpan={2} colSpan={1} bg="papayawhip">
                <SideMenu/>
            </GridItem>
          
        </Grid>

      
      
    )}