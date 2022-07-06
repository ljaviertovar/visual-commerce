import Image from "next/image"
import { NavbarStore, NavActionStore } from "./"

const HeaderStore = () => {
	return (
    <header>
 
			<NavbarStore />
			<NavActionStore />
		</header>
	)
}

export default HeaderStore
