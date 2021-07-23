import React, { useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Grid,
    GridItem,
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
    FiCalendar,
    FiChevronDown,
    FiChevronUp,
    FiPlus,
    FiCreditCard,
    FiSearch,
    FiBell
} from "react-icons/fi"

export default function MainContainer({ children, user,home}) {
    return (
      <Flex flexDirection="column" w="100%">
        <Box textAlign="center">
          <Text my="6px" fontSize="24px" fontFamily="Roboto" fontWeight="100">
            Welcome Obiofiong
          </Text>
          <Text my="6px" fontSize="15px" fontFamily="Roboto" fontWeight="100">
            Total Surveys taken
          </Text>
          <Text my="6px" fontSize="15px" fontFamily="Roboto" fontWeight="100">
            Amount of pi earned
          </Text>
        </Box>
        <Box>ibk</Box>
        <Box>ibk</Box>
      </Flex>
    );
    }