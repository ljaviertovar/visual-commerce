import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"

import styles from "../../styles/Products.module.css"

const CategoryCard = () => {
	return (
		<motion.div whileHover={{ scale: 1.1, zIndex: 99 }} whileTap={{ scale: 0.9 }} style={{ height: "100%" }}>
			<Box
				// key={index}
				height='100%'
				width='100%'
				position='relative'
				backgroundPosition='center'
				backgroundRepeat='no-repeat'
				backgroundSize='cover'
				backgroundImage={`url(https://secureservercdn.net/198.71.233.70/qpd.3b2.myftpupload.com/wp-content/uploads/2022/05/716A0754-300x300.jpg)`}
				className={styles.categoryCard}
			>
				<Flex flexDirection='column' p='4' h='100%' justifyContent='flex-end' bg='blackAlpha.200'>
					<Heading as='h3' size='lg' color='emphasis'>
						MENS
					</Heading>
					<Text fontWeight='semibold'>10 Productos</Text>
					<Box maxW='min-content' mt='4' className={styles.categoryCardBtn}>
						<Button variant='solid' bg='white' size='md'>
							Comprar
						</Button>
					</Box>
				</Flex>
			</Box>
		</motion.div>
	)
}

export default CategoryCard
