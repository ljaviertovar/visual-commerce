import { extendTheme, type ThemeConfig } from "@chakra-ui/react"
// Global style overrides
import { styles } from "./styles"

const config: ThemeConfig = {
	initialColorMode: "light",
	useSystemColorMode: true,
}

// Foundational style overrides
// import borders from './foundations/borders'

// Component style overrides
// import Button from './components/button'

const overrides = {
	...config,
	...styles,
	// borders,
	// Other foundational style overrides go here
	// components: {
	// Button,
	// Other components go here
	// },
}

export default extendTheme(overrides)
