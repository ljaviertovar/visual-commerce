import { FC } from "react"
import NextLink from "next/link"

import { Box, Grid, GridItem, Link } from "@chakra-ui/react"

import CategoryCard from "./CategoryCard"

import { Category } from "../../ts/interfaces/product.interface"

import women from "../../public/img/categories/women.jpg"
import men from "../../public/img/categories/men.jpg"
import kids from "../../public/img/categories/kids.jpg"

const data = {
	categories: [
		{
			id: 1,
			level: 1,
			name: "Men",
			image: men.src,
			url: "/",
			totalProducts: 100,
			featured: true,
		},
		{
			id: 2,
			level: 1,
			name: "Women",
			image: women.src,
			url: "/",
			totalProducts: 60,
			featured: true,
		},
		{
			id: 3,
			level: 1,
			name: "Kids",
			image: kids.src,
			url: "/",
			totalProducts: 40,
			featured: true,
		},
	],
}

interface Props {
	categories: Category[]
}

const FeaturedCategories: FC<Props> = () => {
	return (
		<>
			<Box>
				<Grid templateColumns='repeat(3, 1fr)' gap={8}>
					{data.categories.map(category => (
						<GridItem key={category.id} w='100%' h='400px'>
							<NextLink href={category.url} passHref>
								<Link _hover={{ textDecoration: "none" }}>
									<CategoryCard category={category} />
								</Link>
							</NextLink>
						</GridItem>
					))}
				</Grid>
			</Box>
		</>
	)
}

export default FeaturedCategories
