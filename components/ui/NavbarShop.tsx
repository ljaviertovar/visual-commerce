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
import { ChevronDownIcon } from "@chakra-ui/icons"
import { BiCart, BiHeart } from "react-icons/bi"

const NavbarShop = () => {
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
				Actions
			</MenuButton>
			<MenuList>
				<MenuItem>Download</MenuItem>
				<MenuItem>Create a Copy</MenuItem>
				<MenuItem>Mark as Draft</MenuItem>
				<MenuItem>Delete</MenuItem>
				<MenuItem>Attend a Workshop</MenuItem>
				<MenuItem>
					<BiCart />
				</MenuItem>
				<MenuItem>
					<BiHeart />
				</MenuItem>
			</MenuList>
		</Menu>
	)
}
export default NavbarShop
