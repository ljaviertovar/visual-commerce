import type { NextPage } from "next"
import { ShopLayout } from "../components/layouts"
import { ChakraProvider } from "@chakra-ui/react"

const Home: NextPage = () => {
	return (
		<ChakraProvider>
			<ShopLayout title='Shendy Vendy' pageDescription='Find the best products here.'>
				<h1>Home Page, fores besa limpis, pero tavis lo besa más rico siempre</h1>
			</ShopLayout>
		</ChakraProvider>
	)
}

export default Home
