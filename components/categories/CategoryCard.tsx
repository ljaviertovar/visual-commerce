import { FC } from "react"
import { motion } from "framer-motion"

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"

import { Category } from "../../ts/interfaces/product.interface"

import styles from "../../styles/Products.module.css"

interface Props {
	category: Category
}

const CategoryCard: FC<Props> = ({ category }) => {
	return (
		<motion.div whileHover={{ scale: 1.1, zIndex: 99 }} whileTap={{ scale: 0.9 }} style={{ height: "100%" }}>
			<Box
				height='100%'
				width='100%'
				position='relative'
				backgroundPosition='center'
				backgroundRepeat='no-repeat'
				backgroundSize='cover'
				backgroundImage={`url(${category.image})`}
				className={styles.categoryCard}
			>
				<Flex flexDirection='column' p='4' h='100%' justifyContent='flex-end' bg='blackAlpha.200'>
					<Heading as='h3' size='lg' color='emphasis'>
						{category.name}
					</Heading>
					<Text fontWeight='semibold'>{category.totalProducts} Productos</Text>
					<Box maxW='min-content' mt='4' className={styles.categoryCardBtn}>
						<Button bg={"white"} size='md'>
							Comprar
						</Button>
					</Box>
				</Flex>
			</Box>
		</motion.div>
	)
}

export default CategoryCard
