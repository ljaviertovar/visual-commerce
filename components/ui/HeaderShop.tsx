import { NavbarShop, NavActionStore } from "."
import NavbarSearchShop from "./NavbarSearchShop"

const HeaderShop = () => {
	return (
		<header>
			<NavbarSearchShop />
			<NavbarShop />
			<NavActionStore />
		</header>
	)
}

export default HeaderShop
