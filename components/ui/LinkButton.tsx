import NextLink from "next/link"
import { Button, Link } from "@chakra-ui/react"
import { FC } from "react"

interface Props {
	text: string
	link: string
	size: "xs" | "sm" | "md" | "lg"
}

const LinkButton: FC<Props> = ({ text, link, size }) => {
	return (
		<NextLink href={link} passHref>
			<Link _hover={{ textDecor: "none" }}>
				<Button
					size={size}
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
			</Link>
		</NextLink>
	)
}

export default LinkButton
