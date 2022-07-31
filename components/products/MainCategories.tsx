import { Box, Grid, GridItem } from "@chakra-ui/react"
import { TitleSection } from "../ui"
import CategoryCard from "./CategoryCard"

const MainCategories = () => {
	return (
		<>
			<TitleSection title='Categorías destacadas' />
			<Box>
				<Grid templateColumns='repeat(3, 1fr)' gap={4}>
					<GridItem w='100%' h='400px' className='shadow' borderRadius={"md"}>
						<CategoryCard />
					</GridItem>
					<GridItem w='100%' h='400px' className='shadow' borderRadius={"md"}>
						<CategoryCard />
					</GridItem>
					<GridItem w='100%' h='400px' className='shadow' borderRadius={"md"}>
						<CategoryCard />
					</GridItem>
				</Grid>
			</Box>
		</>
	)
}

export default MainCategories
