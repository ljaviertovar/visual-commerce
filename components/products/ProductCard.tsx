import { Badge, Box, Image, Text, Center, Flex } from "@chakra-ui/react"

import styles from "../../styles/Products.module.css"

const property = {
	id: 1,
	imagesUrl: [
		"https://shendyvendy.com/wp-content/uploads/2022/05/BEIGE-300x300.jpg",
		"https://shendyvendy.com/wp-content/uploads/2022/05/BLANCO-300x300.jpg",
	],
	imageAlt: "Tennis Cardiff",
	category: "hombre",
	subcategory: "tennis de hombre",
	title: "Cardiff",
	formattedPrice: "$350.00",
	currency: "MXN",
	reviewCount: 34,
	rating: 4,
	tags: ["Top"],
	sizes: ["22", "24", "26"],
	colors: ["beage"],
}

const ProductCard = ({ id }) => {
	const changeImage = imageId => {
		const eImage = document.getElementById(`${property.title}${id}`)
		eImage?.setAttribute("src", property.imagesUrl[imageId])
	}

	return (
		<Box
			borderWidth='1px'
			borderRadius='md'
			overflow='hidden'
			pos='relative'
			border={0}
			maxW='300px'
			bg='white'
			m='auto'
			mb={4}
			className={`shadow ${styles.productCard}`}
			h='400px'
			onMouseEnter={() => changeImage(0)}
			onMouseLeave={() => changeImage(1)}
		>
			<Badge borderRadius='full' px='2' bg='secondary' color='white' pos='absolute' right={5}>
				{property.tags[0]}
			</Badge>

			<Center m={4} maxH='270px'>
				<Image src={property.imagesUrl[0]} alt={property.imageAlt} objectFit='cover' id={`${property.title}${id}`} />
			</Center>

			<Box className={styles.productDetails} backdropFilter='auto' backdropBlur='8px' p={4}>
				<Box display='flex' alignItems='baseline'>
					<Box color='gray.500' letterSpacing='wide' fontSize='xs' textTransform='uppercase' mr='2'>
						{`${property.category} / ${property.subcategory}`}
					</Box>
				</Box>

				<Text fontWeight='black' as='h3' size='lg' noOfLines={1}>
					{property.title}
				</Text>

				<Text as='span' fontSize='xl' fontWeight='black' color='dark'>
					{property.formattedPrice}
					<Box fontSize='xs' fontWeight='black' color='dark' as='span'>
						{" "}
						{property.currency}
					</Box>
				</Text>

				<Box className={styles.productMoreDetails} mt={4}>
					<Flex fontSize='sm' fontWeight='semibold' mb={1}>
						Tallas
						<Flex ml={4} fontWeight='normal' gap={1}>
							{property.sizes?.map(size => (
								<Box key={size} border='1px' borderColor='gray.300' px={1}>
									{size}
								</Box>
							))}
						</Flex>
					</Flex>
					<Flex fontSize='sm' fontWeight='semibold' mb={1}>
						Colores{" "}
						<Box ml={4} fontWeight='normal'>
							{property.colors?.map(color => (
								<Box key={color} bg={color} w={4} h={4} borderRadius='full'></Box>
							))}
						</Box>
					</Flex>
				</Box>
			</Box>
		</Box>
	)
}

export default ProductCard
