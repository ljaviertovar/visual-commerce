import { Box } from "@chakra-ui/react"
import type { NextPage } from "next"
import { ShopHomeLayout } from "../components/layouts"
import { ProductSlider } from "../components/products"

import { FeaturedCategories } from "../components/categories"
import { RichBannerLR, SliderBrands } from "../components/ui"

import bannerImg from "../public/img/richBanners/banner.jpg"

const rBanner1 = {
	banner: bannerImg,
	pretitle: "Hot promotions here",
	title: "Visual Commerce. The best!",
	subtitle: "Create yout own fashion",
	textButton: "Comprar ahora",
	linkButton: "/",
}

const Home: NextPage = () => {
	return (
		<ShopHomeLayout title='Shendy Vendy' pageDescription='Find the best products here.'>
			<Box as='section' mt={12} mb={8} className='shopSection'>
				<SliderBrands />
			</Box>
			<Box as='section' mt={12} mb={8} className='shopSection'>
				<FeaturedCategories categories={[]} />
			</Box>
			<Box as='section' mt={12} mb={8} className='shopSection'>
				<ProductSlider />
			</Box>
			<Box as='section' mt={12} mb={8} h='500px'>
				<RichBannerLR
					banner={rBanner1.banner.src}
					title={rBanner1.title}
					subtitle={rBanner1.subtitle}
					pretitle={rBanner1.pretitle}
					textButton={rBanner1.textButton}
					linkButton={rBanner1.linkButton}
				/>
			</Box>
		</ShopHomeLayout>
	)
}

export default Home
