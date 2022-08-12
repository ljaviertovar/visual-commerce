import { useMediaQuery } from "@chakra-ui/react"
import { NavBarMobile, NavBarDesktop, HeadbandShop } from "."

const HeaderShop = () => {
	const [isDesktop] = useMediaQuery("(min-width: 769px)")

	return (
		<>
			<HeadbandShop
				title='Join the Visual Commerce fam. Explore all promotions'
				titleSize='sm'
				textLink='Here'
				link='/'
			/>
			<header>{isDesktop ? <NavBarDesktop /> : <NavBarMobile />}</header>
		</>
	)
}

export default HeaderShop
