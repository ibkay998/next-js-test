import React, { useState } from 'react'
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
    Flex,
    Heading,
    Avatar,
    AvatarGroup,
    Text,
    Icon,
    IconButton,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Divider,
    Link,
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react'
import {
    FiHome,
    FiPieChart,
    FiDollarSign,
    FiBox,
    FiMenu,
    FiCalendar,
    FiChevronDown,
    FiChevronUp,
    FiPlus,
    FiCreditCard,
    FiSearch,
    FiBell
} from "react-icons/fi"



export default function SideMenu({ children, user,home}) {
    return (
        
        <Flex
            className="sidebar-container2"
            flexDir="column"
            h={[null, null, "100vh"]}
            justifyContent="space-between"
        >
            
            <Flex
            
                className="sidebar-container1"
                flexDir="column"
                as="nav"
            >
                
                <Heading
                    mt={50}
                    mb={[25, 50, 100]}
                    fontSize={["4xl", "4xl", "2xl", "3xl", "4xl",]}
                    alignSelf="center"
                    letterSpacing="tight"
                >
                    <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
                        <Avatar my={2} src="avatar-1.jpg" />
                        <Text textAlign="center">Calvin West</Text>
                    </Flex>
                </Heading>
                <Flex
                    className="sidebar-container"
                    
                    flexDir={["row", "row", "column", "column", "column"]}
                    pt="15px"
                    align={["center", "center", "center", "flex-start", "flex-start"]}
                    wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
                    justifyContent="center"
                >
                    <Flex className="sidebar-items" mr={[4]}>
                        <Link textAlign="center" display={["none", "none", "flex", "flex", "flex"]}>
                            <Icon as={FiHome}  className="active-icon" />
                        </Link>
                        <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                            <Text className="active" color="black">OVERVIEW</Text>
                        </Link>
                    </Flex>
                    <Flex className="sidebar-items" mr={[4]}>
                        <Link display={["none", "none", "flex", "flex", "flex"]}>
                            <Icon as={FiPieChart} fontSize="2xl" />
                        </Link>
                        <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                            <Text>SURVEY</Text>
                        </Link>
                    </Flex>
                    <Flex className="sidebar-items" mr={[4]}>
                        <Link display={["none", "none", "flex", "flex", "flex"]}>
                            <Icon as={FiDollarSign} fontSize="2xl" />
                        </Link>
                        <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                            <Text>HISTORY</Text>
                        </Link>
                    </Flex>
                    <Flex className="sidebar-items" mr={[4]}>
                        <Link display={["none", "none", "flex", "flex", "flex"]}>
                            <Icon as={FiBox} fontSize="2xl" /></Link>
                        <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                            <Text>SETTINGS</Text>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Flex> )}