import { Box } from "@chakra-ui/react"
import type { NextPage } from "next"
import { ShopHomeLayout } from "../components/layouts"
import { FeaturedCategories, ProductSlider } from "../components/products"

const Home: NextPage = () => {
	return (
		<ShopHomeLayout title='Shendy Vendy' pageDescription='Find the best products here.'>
			<Box as='section' mt={12} mb={8}>
				<FeaturedCategories categories={[]} />
			</Box>
			<Box as='section' mt={12} mb={8}>
				<ProductSlider />
			</Box>
		</ShopHomeLayout>
	)
}

export default Home
