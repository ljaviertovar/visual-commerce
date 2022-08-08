import { useMediaQuery } from "@chakra-ui/react"
import { NavBarMobile, NavBarDesktop } from "."
import HeadBandShop from "./HeadBandShop"

const HeaderShop = () => {
	const [isDesktop] = useMediaQuery("(min-width: 769px)")

	return (
		<>
			<HeadBandShop />
			<header>{isDesktop ? <NavBarDesktop /> : <NavBarMobile />}</header>
		</>
	)
}

export default HeaderShop
