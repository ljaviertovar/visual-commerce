import { Button } from "@chakra-ui/react"
import { FC } from "react"

interface Props {
	text: string
	size: "xs" | "sm" | "md" | "lg" | (string)
}

const ButtonGradient: FC<Props> = ({ text, size }) => {
	return (
		<Button
			size={size}
			maxW='min-content'
			bgGradient='linear-gradient(to right, btnPrimaryBase 0%, btnSecondaryBase  51%, btnPrimaryBase  100%)'
			transition='0.5s'
			backgroundSize='200% auto'
			color='white'
			_hover={{
				backgroundPosition: "right center",
			}}
		>
			{text}
		</Button>
	)
}

export default ButtonGradient
