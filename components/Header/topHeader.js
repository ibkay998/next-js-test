import { Box } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import styles from "../layout.module.css";
import { useState, } from "react"
import { useDisclosure } from "@chakra-ui/react"
import {React} from "react"

import { IconButton, SearchIcon, PhoneIcon} from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement,Button,Stack,Radio,RadioGroup, } from "@chakra-ui/react";
import {
  
  FiMenu,
  FiHome,
  FiPieChart,
  FiDollarSign,
  FiBox,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiPlus,
  FiCreditCard,
  FiSearch,
  FiBell
} from "react-icons/fi"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react"

import {
  Link,
  Flex,
  Icon,
  Text,
  Avatar,
  Wrap,
  WrapItem,
  AvatarBadge,
  AvatarGroup,
} from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

import Head from "next/head";
import Image from "next/image";


// import Script from 'next/script'

const name = "Ibukunoluwa Oyeniyi";
const isloggedout = "None";
export const siteTitle = "Next.js Sample Website";

export default function Navbar({ children, user, home }) {
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = useState("left")
  
  
  return (
    <Flex className={styles.boxna}>
        <Head><meta name="viewport" content="width=device-width, initial-scale=1.0"/></Head>
        
        <IconButton icon={<FiMenu/>} display={["flex","flex","none","none","none"]}colorScheme="blue" onClick={onOpen} mt="33px" ml={[4,4,14,14,14]} bg="#9A249C">
          Open
        </IconButton>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        
        <Text className={styles.appname} mt={[10]} ml={[2]} color="#9A249C" fontFamily="Robot" fontSize="24px" fontWeight="bold">PISURV</Text>
        
        <Wrap float="left">
        <WrapItem>
          <InputGroup className={styles.searchinput} mt={[10]} ml={[200]} mb={[3]} >
            <Icon as={FiSearch} w={8} h={8} className="active-icon" />
            {/* <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children="#"
            />
            <Input w={[null, null, 300,400,500]} type="tel" placeholder="Search" /> */}
          </InputGroup>
        </WrapItem>
      </Wrap>

      {/* <ol>
                    <Menu>Notification</Menu>
                    <Link href="/">
                        Login
                    </Link>
                </ol> */}
    </Flex>
  );
}
