import { useMediaQuery } from '@chakra-ui/react'
import { NavBarMobile, NavBarDesktop } from "."


const HeaderShop = () => {
	const [isDesktop] = useMediaQuery('(min-width: 769px)')
	return (
		<header>
			{isDesktop ? <NavBarDesktop /> : <NavBarMobile />}
		</header>
	)
}

export default HeaderShop
