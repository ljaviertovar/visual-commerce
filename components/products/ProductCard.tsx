import { FC, useState } from "react"

import NextLink from "next/link"

import { Box, Image, Text, Flex, Button, Icon, Link } from "@chakra-ui/react"
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs"

import { ProductDetails, ProductBreadcrump, ProductPrice, ProductTags, ProductTagsPromotions } from "./"

import styles from "../../styles/Products.module.css"

import tn1 from "../../public/img/BLANCO-300x300.png"
import tn2 from "../../public/img/BEIGE-300x300.png"

const property = {
	id: 1,
	imagesUrl: [tn1.src, tn2.src],
	imageAlt: "Tennis Cardiff",
	category: "hombre",
	subcategory: "tennis de hombre",
	currentCategory: "tennis de hombre",
	categoryTree: ["hombre", "tennis de hombre"],
	title: "Cardiff",
	formattedPrice: "$350.00",
	currency: "MXN",
	reviewCount: 34,
	rating: 4,
	tags: ["Top"],
	promotionTags: ["50% descuento"],
	sizes: ["22", "24", "26"],
	colors: ["gray"],
}

interface Props {
	id: string
}

const ProductCard: FC<Props> = ({ id }) => {
	const [iconFavHovered, setIconFavHovered] = useState(false)

	const changeImage = (imageId: number) => {
		const eImage = document.getElementById(`${property.title}${id}`)
		eImage?.setAttribute("src", property.imagesUrl[imageId])
	}

	return (
		<Box
			border='1px solid white'
			overflow='hidden'
			pos='relative'
			maxW='300px'
			bg='white'
			m='auto'
			mb={4}
			className={`${styles.productCard}`}
			h='416px'
			_hover={{ cursor: "pointer", border: "1px solid black" }}
			onMouseEnter={() => changeImage(0)}
			onMouseLeave={() => changeImage(1)}
			bgGradient='linear-gradient(0deg, rgba(255,255,255,0) 20%, rgba(0,0,0,0.2) 100%)'
		>
			<Flex pos='absolute' justifyContent={"space-between"} w='full' zIndex='10' p={4}>
				<ProductTagsPromotions promotionTags={property.promotionTags} />
				<Icon
					as={iconFavHovered ? BsSuitHeartFill : BsSuitHeart}
					onMouseEnter={() => setIconFavHovered(true)}
					onMouseLeave={() => setIconFavHovered(false)}
					_hover={{ cursor: "pointer" }}
				/>
			</Flex>

			<Box mt={8} mb={4} mx={4} pos='relative'>
				<Image src={property.imagesUrl[0]} alt={property.imageAlt} objectFit='cover' id={`${property.title}${id}`} />
			</Box>

			<Box className={styles.productDetails} backdropFilter='auto' backdropBlur='0' bg='whiteAlpha.600' p={4}>
				<ProductBreadcrump categories={property.categoryTree} currentCategory='currentCategory' size='xs' />

				<Flex gap='4' alignItems={"center"}>
					<Text fontWeight='black' as='h3' size='lg' noOfLines={1}>
						{property.title}
					</Text>
					<ProductTags tags={property.tags} />
				</Flex>

				<ProductPrice price={property.formattedPrice} currency={property.currency} />

				<Box mt={4} fontSize='xs'>
					<ProductDetails sizes={property.sizes} colors={property.colors} />
				</Box>

				<Box pos='absolute' bottom={0} right={0} className={styles.buttonCard} p={4}>
					<NextLink href='/' passHref>
						<Link _hover={{ textDecor: "none" }}>
							<Button bg={"white"} size='sm'>
								Ver más
							</Button>
						</Link>
					</NextLink>
				</Box>
			</Box>
		</Box>
	)
}

export default ProductCard
