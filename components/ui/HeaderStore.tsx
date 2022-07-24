import Image from "next/image"
import { Flex, Spacer } from '@chakra-ui/react'
import { SideMenuStore, NavbarStore, NavActionStore } from "./"


const HeaderStore = () => {
	return (
		<header >
			<Flex align="center" justify={'space-between'} px={3}>
				<SideMenuStore />
				<Image 
					width={200}
					height={50}
					src="/img/header/SHENDY-VENDY-1.png"
					alt="Shendy Vendy"/>
				{/* <NavbarStore /> */}
				<NavActionStore />
			</Flex>
		</header>
	)
}

export default HeaderStore
