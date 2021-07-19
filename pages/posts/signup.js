import { Flex,Heading,Input,Switch,Button,useColorMode,useColorModeValue } from "@chakra-ui/react"
import styles from './layout.module.css'
import Link from 'next/link'
// import {Formik} from '../../components/formik'
import {
    
    Form,
    Field,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Formik
  } from "@chakra-ui/react"

import { ChakraProvider } from "@chakra-ui/react"




export default function SignUpPage({ }) {
    const { toggleColorMode } = useColorMode()
    const formbackground = useColorModeValue("gray.100","gray.700")
        return (
            <Flex height="100vh" align="center" justifyContent="center">
                <Flex direction="column" background={formbackground} p={12} rounded={6}>
                    <a href="/posts/login">Login</a>
                    <Heading mb={6}>Sign Up</Heading>
                    <Input placeholder="lazar@chakra-ui.com" variant="filled" mb={3} type="email"/>
                    <Input placeholder="*************" variant="filled" mb={6} type="password"  />
                    <Button colorScheme="teal"> Sign Up </Button>
                    <Switch isDisabled={toggleColorMode}> Dark Mode</Switch>
                    <div className={styles.backToHome}>
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                </Flex>
                
           </Flex>
            //   <Form>
            //     <Field name="name">
            //       {({ field, form }) => (
            //         <FormControl isInvalid={form.errors.name && form.touched.name}>
            //           <FormLabel htmlFor="name">First name</FormLabel>
            //           <Input {...field} id="name" placeholder="name" />
            //           <FormErrorMessage>{form.errors.name}</FormErrorMessage>
            //         </FormControl>
            //       )}
            //     </Field>
            //     <Button
            //       mt={4}
            //       colorScheme="teal"
            //       type="submit"
            //     >
            //       Submit
            //     </Button>
            //   </Form>
           
        )
      } 
  