import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../components/Header/topHeader'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import firebase from '../firebase/firebase'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from "@chakra-ui/react"

export default function Dashboard({ allPostsData }) {
  
    return (
      <Navbar home user/>
    )}