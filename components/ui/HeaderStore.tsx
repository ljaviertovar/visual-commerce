import Image from "next/image"
import { NavbarStore } from "./"


const HeaderStore = () => {
	return (
		<header>
			<Image 
				width={200}
				height={50}
				src="/img/header/SHENDY-VENDY-1.png"
				alt="Shendy Vendy"/>
			<NavbarStore />
		</header>
	)
}

export default HeaderStore
