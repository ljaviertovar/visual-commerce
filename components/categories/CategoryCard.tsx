import { FC } from "react"
import { Box, Button, Heading, Text } from "@chakra-ui/react"

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
			border='1px'
			borderColor='blackAlpha.900'
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
				<Heading as='h3' size='lg' color='white' className='shadowText'>
					{category.name}
				</Heading>
				<Text fontWeight='semibold' color='white' className='shadowText'>
					{category.totalProducts} Productos
				</Text>
				<Box maxW='min-content' mt='4'>
					<Button
						bg={"white"}
						size='md'
						bgGradient='linear-gradient(to right, btnPrimaryBase 0%, btnSecondaryBase  51%, btnPrimaryBase  100%)'
						transition='0.5s'
						backgroundSize='200% auto'
						color='white'
						_hover={{
							backgroundPosition: "right center",
						}}
					>
						View more
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

export default CategoryCard
