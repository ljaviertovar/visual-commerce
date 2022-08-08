import { Box, Center, Link } from "@chakra-ui/react"
import NextLink from "next/link"

const HeadBandShop = () => {
	return (
		<Center w='100%' bg='emphasis'>
			<Box padding='4' color='baseLight' maxW='lg' textTransform='uppercase' fontSize='sm'>
				Join the Visual Commerce fam. Explore all promotions{" "}
				<NextLink href='/' passHref>
					<Link textDecor='underline'>Here</Link>
				</NextLink>
			</Box>
		</Center>
	)
}

export default HeadBandShop
