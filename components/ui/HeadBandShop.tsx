import { Center, Link, Flex, Text, Box } from "@chakra-ui/react"
import NextLink from "next/link"
import { FC } from "react"
import LinkButton from "./LinkButton"

interface Props {
	title: string
	titleSize: string
	textBtn?: string
	textLink?: string
	link: string
}

const HeadBandShop: FC<Props> = ({ title, textLink, titleSize, link, textBtn }) => {
	return (
		<Center w='100%' bg='emphasis' className='borderDiv'>
			<Flex padding='4' maxW='xl' textTransform='uppercase' fontSize='sm' alignItems='center'>
				<Text fontSize={titleSize} fontWeight={`${textBtn ? "bold" : "normal"}`}>
					{title}
				</Text>
				{textBtn && (
					<Box ml={4}>
						<LinkButton text={textBtn} size={"md"} link={link} />
					</Box>
				)}
				{textLink && (
					<NextLink href={link} passHref>
						<Link textDecor='underline' marginLeft={2}>
							{textLink}
						</Link>
					</NextLink>
				)}
			</Flex>
		</Center>
	)
}

export default HeadBandShop
