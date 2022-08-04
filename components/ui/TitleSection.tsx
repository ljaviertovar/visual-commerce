import { Box, Heading, Text } from "@chakra-ui/react"
import { FC } from "react"

interface Props {
	title: string
	subtitle?: string
	pretitle?: string
	align: string
}

const TitleSection: FC<Props> = ({ title, subtitle, pretitle, align = "center" }) => {
	return (
		<Box m={8} textAlign={align} w='full'>
			{pretitle && (
				<Text fontSize={{ base: "md", lg: "lg" }} color='primary' fontWeight='extrabold'>
					{pretitle}
				</Text>
			)}
			<Heading as='h1' size='2xl'>
				{title}
			</Heading>
			{subtitle && (
				<Heading as='h2' size='lg'>
					{subtitle}
				</Heading>
			)}
		</Box>
	)
}

export default TitleSection
