import { Box, Grid, GridItem } from "@chakra-ui/react"
import CategoryCard from "./CategoryCard"

const MainCategories = () => {
	return (
		<>
			<Box>
				<Grid templateColumns='repeat(3, 1fr)' gap={8}>
					<GridItem w='100%' h='400px'>
						<CategoryCard />
					</GridItem>
					<GridItem w='100%' h='400px'>
						<CategoryCard />
					</GridItem>
					<GridItem w='100%' h='400px'>
						<CategoryCard />
					</GridItem>
				</Grid>
			</Box>
		</>
	)
}

export default MainCategories
