import { IconButton } from "@chakra-ui/react"
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuDivider,
	Button,
} from "@chakra-ui/react"

import { BiCart, BiHeart } from "react-icons/bi"

const NavbarShop = () => {
	return (
		<Menu>
			<IconButton colorScheme='teal' aria-label='Call Segun' size='lg' icon={<BiHeart />} />
		</Menu>
	)
}
export default NavbarShop
