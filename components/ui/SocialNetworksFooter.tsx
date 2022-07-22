import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaTiktok } from "react-icons/fa";
import { 
    Wrap,
    WrapItem,
    Center,
    Link
	} from '@chakra-ui/react'

const SocialNetworksFooter = () => {
	return (
    <Wrap px={3}>
        <Link href='#' isExternal>
            <WrapItem>
                <Center w='35px' h='30px' bg='red.200'>
                    <FaFacebook fontSize='28px' />
                </Center>
            </WrapItem>
        </Link>
        <Link href='#'>
            <WrapItem>
                <Center w='35px' h='30px' bg='green.200'>
                    <FaInstagram fontSize='28px' />
                </Center>
            </WrapItem>
        </Link>
        <Link href='#'>
            <WrapItem>
                <Center w='35px' h='30px' bg='tomato'>
                    <FaTwitter fontSize='28px' />  
                </Center>
            </WrapItem>
        </Link>
        <Link href='#'>
            <WrapItem>
                <Center w='35px' h='30px' bg='blue.200'>
                    <FaPinterest fontSize='28px' />
                </Center>
            </WrapItem>
        </Link>
        <Link href='#'>
            <WrapItem>
                <Center w='35px' h='30px' bg='yellow.200'>
                    <FaTiktok fontSize='28px' />
                </Center>
            </WrapItem>
        </Link>
    </Wrap>
	)
}

export default SocialNetworksFooter