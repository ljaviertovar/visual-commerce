import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaTiktok } from "react-icons/fa";
import { 
	Grid,
    GridItem,
    Wrap,
    WrapItem,
    Center
	} from '@chakra-ui/react'

const SocialNetworksFooter = () => {
	return (
    <Wrap>
        <WrapItem>
            <Center w='35px' h='30px' bg='red.200'>
                <FaFacebook fontSize='28px' />
            </Center>
        </WrapItem>
        <WrapItem>
            <Center w='35px' h='30px' bg='green.200'>
                <FaInstagram fontSize='28px' />
            </Center>
        </WrapItem>
        <WrapItem>
            <Center w='35px' h='30px' bg='tomato'>
                <FaTwitter fontSize='28px' />  
            </Center>
        </WrapItem>
        <WrapItem>
            <Center w='35px' h='30px' bg='blue.200'>
                <FaPinterest fontSize='28px' />
            </Center>
        </WrapItem>
        <WrapItem>
            <Center w='35px' h='30px' bg='yellow.200'>
                <FaTiktok fontSize='28px' />
            </Center>
        </WrapItem>
    </Wrap>
	)
}

export default SocialNetworksFooter