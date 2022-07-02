import type { NextPage } from "next"
import { LayoutStore } from "../components/layouts"
import { ChakraProvider } from "@chakra-ui/react"

const Home: NextPage = () => {
	return (
		<ChakraProvider>
			<LayoutStore>
				<h1>Home Page, fores besa limpis, pero tavis lo besa más rico siempre</h1>
			</LayoutStore>
		</ChakraProvider>
	)
}

export default Home
