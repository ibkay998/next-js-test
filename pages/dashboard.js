import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../components/Header/topHeader'
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
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={1}
            >
            <GridItem rowSpan={1} colSpan={2} ><Navbar home user/></GridItem>
            <GridItem rowSpan={2} colSpan={1} bg="papayawhip" />
            <GridItem rowSpan={2} colSpan={1} bg="tomato" />
          
        </Grid>

        

        
      
      
    )}