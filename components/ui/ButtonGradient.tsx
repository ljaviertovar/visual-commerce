import { Button } from "@chakra-ui/react"

const ButtonGradient = ({ text }) => {
	return (
		<Button
			size='lg'
			maxW='min-content'
			bgGradient='linear(to-r, primary, secondary)'
			_hover={{
				bgGradient: "linear(to-r, secondary, primary)",
			}}
			_active={{
				background: "linear(to-r, secondary, primary)",
			}}
		>
			{text}
		</Button>
	)
}

export default ButtonGradient
