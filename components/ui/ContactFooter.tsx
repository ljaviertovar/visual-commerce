import { BiPhone, BiMailSend } from "react-icons/bi";
import { 
    Container,
    Center,
    Heading,
    Link,
    Flex,
    Text
	} from '@chakra-ui/react'

const ContactFooter = () => {
	return (
    <Container m={3} p={0}>
        <Heading as='h3' size='md'>
            Contacto
        </Heading>
        <Link href='tel: 5545431007' isExternal>
            <Flex>
                <Center mr={2}>
                    <BiPhone /> 
                </Center>
                <Center>
                    <Text>Teléfono: 55 45 43 10 07</Text>
                </Center>
            </Flex>
        </Link>
        <Link href='mailto:shendyvendy.publicidad@gmail.com' isExternal>
            <Flex>
                <Center mr={2}>
                    <BiMailSend /> 
                </Center>
                <Center>
                    <Text>Correo: shendyvendy.publicidad@gmail.com</Text>
                </Center>
            </Flex>
        </Link>
    </Container>
	)
}

export default ContactFooter