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
				<Button bg={"white"} size={size}>
					{text}
				</Button>
			</Link>
		</NextLink>
	)
}

export default LinkButton
