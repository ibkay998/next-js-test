import Head from 'next/head'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from "@chakra-ui/react"
import { useEffect } from 'react'
import Navbar from '../components/Header/topHeader'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import firebase from '../firebase/firebase'
import { getUser } from '../firebase/users'

export default function Dashboard({ allPostsData }) {
  
    return (
      <Navbar home/>
      
    )}