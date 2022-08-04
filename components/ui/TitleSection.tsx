import { Box, Heading, Text } from "@chakra-ui/react"
import { FC } from "react"

interface Props {
	title: string
	subtitle?: string
	pretitle?: string
	align: "center"
}

const TitleSection: FC<Props> = ({ title, subtitle, pretitle, align = "center" }) => {
	return (
		<Box m={8} textAlign={align} w='full'>
			{pretitle && (
				<Text fontSize={{ base: "md", lg: "lg" }} color='primary' fontWeight='light'>
					{pretitle}
				</Text>
			)}
			<Heading as='h1' size='2xl' fontWeight='light'>
				{title}
			</Heading>
			{subtitle && (
				<Heading as='h2' size='lg' fontWeight='light'>
					{subtitle}
				</Heading>
			)}
		</Box>
	)
}

export default TitleSection
