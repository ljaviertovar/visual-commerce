import { FC } from "react"
import { Box, Text } from "@chakra-ui/react"

interface Props {
	price: string
	currency: string
}

const ProductPrice: FC<Props> = ({ price, currency }) => {
	return (
		<>
			<Text as='span' fontSize='xl' fontWeight='black' color='dark'>
				{price}
				<Box fontSize='xs' fontWeight='black' color='dark' as='span'>
					{" "}
					{currency}
				</Box>
			</Text>
		</>
	)
}

export default ProductPrice
