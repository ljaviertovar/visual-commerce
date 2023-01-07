import NextLink from "next/link"
import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react"
import { TbTruckDelivery, TbTruckReturn, TbShieldCheck } from "react-icons/tb"

const HeadbandGaranties = () => {
	return (
		<Flex justifyContent='space-around' borderY='1px' borderColor='blackAlpha.900'>
			<Box textAlign='center' p={8} flex={1}>
				<Icon as={TbTruckDelivery} w={9} h={9} />
				<Text fontWeight='bold' fontSize='md'>
					Delivery
				</Text>
				<Text fontSize='sm'>Fast shipping</Text>
				<NextLink href='/' passHref>
					<Link fontSize='xs'>See details</Link>
				</NextLink>
			</Box>
			<Box textAlign='center' p={8} flex={1} borderX='1px' borderColor='blackAlpha.900'>
				<Icon as={TbTruckReturn} w={9} h={9} />
				<Text fontWeight='bold' fontSize='md'>
					Free return
				</Text>
				<Text fontSize='sm'>In 14 days</Text>
				<NextLink href='/' passHref>
					<Link fontSize='xs'>See details</Link>
				</NextLink>
			</Box>
			<Box textAlign='center' p={8} flex={1}>
				<Icon as={TbShieldCheck} w={9} h={9} />
				<Text fontWeight='bold' fontSize='md'>
					Convenient and safe payments
				</Text>
				<Text fontSize='sm'>Cards or PayPal</Text>
				<NextLink href='/' passHref>
					<Link fontSize='xs'>See details</Link>
				</NextLink>
			</Box>
		</Flex>
	)
}

export default HeadbandGaranties
