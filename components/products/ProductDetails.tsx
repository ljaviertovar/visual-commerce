import { FC } from "react"
import { Box, Flex } from "@chakra-ui/react"

interface Props {
	sizes?: string[]
	colors?: string[]
}

const ProductDetails: FC<Props> = ({ sizes, colors }) => {
	return (
		<>
			{sizes && (
				<Flex fontWeight='semibold' mb={1} alignItems='baseline'>
					Tallas
					<Flex ml={4} fontWeight='normal' gap={1}>
						{sizes?.map(size => (
							<Box key={size} border='1px' borderColor='base' bg='base' color='white' px={1}>
								{size}
							</Box>
						))}
					</Flex>
				</Flex>
			)}
			{colors && (
				<Flex fontWeight='semibold' mb={1} alignItems='baseline'>
					Colores{" "}
					<Box ml={4} fontWeight='normal'>
						{colors?.map(color => (
							<Box key={color} bg={color} w={4} h={4} borderRadius='full' border='1px'></Box>
						))}
					</Box>
				</Flex>
			)}
		</>
	)
}

export default ProductDetails
