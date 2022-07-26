import type { AppProps } from "next/app"

import "@fontsource/bebas-neue"
import "@fontsource/poppins"

import { ChakraProvider } from "@chakra-ui/react"
import theme from "../styles/theme"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
