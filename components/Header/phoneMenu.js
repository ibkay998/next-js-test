import {
    Flex,
    Avatar,
    Link,
    Icon,
    Text,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from "@chakra-ui/react"
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




export default function PhoneMenu({ children, user,home}) {
    return (
            <DrawerContent
                className="sidebar-container1"
                as="nav"
            >
                <DrawerHeader
                    mt={50}
                    mb={[25, 50, 50]}>
                    <Flex flexDir="column" alignItems="center"  mb={10} mt={5}>
                        <Avatar ml={75} size="2xl" src="avatar-1.jpg" />
                        <Text w={200} ml={55} >Calvin West</Text>
                    </Flex>
                </DrawerHeader>
                    <DrawerBody
                        className="sidebar-container"
                        pt="15px"
                        align="center"
                        justifyContent="center"
                    >
                        <Flex className="sidebar-items" mr={[4]}>
                            <Link textAlign="center" >
                                <Icon as={FiHome}  className="active-icon" />
                            </Link>
                            <Link _hover={{ textDecor: 'none' }} >
                                <Text className="active" color="black">OVERVIEW</Text>
                            </Link>
                        </Flex>
                        <Flex className="sidebar-items" mr={[4]}>
                            <Link >
                                <Icon as={FiPieChart} fontSize="2xl" />
                            </Link>
                            <Link _hover={{ textDecor: 'none' }} >
                                <Text>SURVEY</Text>
                            </Link>
                        </Flex>
                        <Flex className="sidebar-items" mr={[4]}>
                            <Link >
                                <Icon as={FiDollarSign} fontSize="2xl" />
                            </Link>
                            <Link _hover={{ textDecor: 'none' }} >
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
                    </DrawerBody>
            </DrawerContent>
    )}
