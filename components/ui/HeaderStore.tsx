import Image from "next/image"
import { NavbarStore, NavActionStore } from "./"


const HeaderStore = () => {
	return (
		<header>
			<Image 
				width={200}
				height={50}
				src="/img/header/SHENDY-VENDY-1.png"
				alt="Shendy Vendy"/>
			<NavbarStore />
			<NavActionStore />
		</header>
	)
}

export default HeaderStore
