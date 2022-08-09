import { FC } from "react"
// import { motion } from "framer-motion"

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"

import { Category } from "../../ts/interfaces/product.interface"

import styles from "../../styles/Products.module.css"

interface Props {
	category: Category
}

const CategoryCard: FC<Props> = ({ category }) => {
	return (
		<Box
			height='100%'
			width='100%'
			position='relative'
			backgroundPosition='center'
			backgroundRepeat='no-repeat'
			backgroundSize='cover'
			backgroundImage={`url(${category.image})`}
			overflow='hidden'
			className={styles.categoryCard}
		>
			<Box pos='absolute' w='full' h='full' className={styles.categoryCardDetailsGrad}></Box>
			<Box pos='absolute' top='calc(100% - 92px)' p={4} className={styles.categoryCardDetails}>
				<Heading as='h3' size='lg' color='emphasis' className='shadowText'>
					{category.name}
				</Heading>
				<Text fontWeight='semibold'>{category.totalProducts} Productos</Text>
				<Box maxW='min-content' mt='4'>
					<Button bg={"white"} size='md'>
						Comprar
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

export default CategoryCard
