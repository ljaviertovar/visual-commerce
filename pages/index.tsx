import type { NextPage } from "next"
import { ShopLayout } from "../components/layouts"
import { HeroSlider } from "../components/ui"

const Home: NextPage = () => {
	return (
		<ShopLayout title='Shendy Vendy' pageDescription='Find the best products here.'>
			<HeroSlider />
			<span>Fuck yeah</span>
		</ShopLayout>
	)
}

export default Home
