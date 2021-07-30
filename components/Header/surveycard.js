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

export default function SurveyCard({ children, user,home}) {
    return (
      <Box
        h="300px"
        w="450px"
        overflow="hidden"
        overflowY="scroll"
        backgroundColor="#9A249C"
        color="white"
        border="solid"
        borderRadius="10px"
      >
        {children}
      </Box>
    );}