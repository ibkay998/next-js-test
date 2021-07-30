import Head from 'next/head'
import { getSortedPostsData } from "../lib/posts";
import { useEffect } from 'react'
import Navbar from '../components/Header/topHeader'
import SideMenu from '../components/Header/sideMenu'
import MainContainer from '../components/Header/mainContainer'
import utilStyles from '../styles/utils.module.css'
import SurveyCard from "../components/Header/surveycard";
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

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

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
          <MainContainer className="main-container" w="400px" overflowY="scroll" overflow="hidden">
            <ul>
              {allPostsData.map(({ id, date, title, questions }) => (
                <li className={utilStyles.listItem} key={id}>
                  <SurveyCard>
                    {title}
                    <br />
                    {id}
                    <br />
                    {date}
                    <br />
                    {questions}
                  </SurveyCard>
                </li>
              ))}
            </ul>
          </MainContainer>
        </Flex>
      </Flex>
    </Box>
  );
}