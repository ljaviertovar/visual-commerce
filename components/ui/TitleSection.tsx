import { Center, Heading } from "@chakra-ui/react"
import { FC } from "react"

interface Props {
	title: string
}

const TitleSection: FC<Props> = ({ title }) => {
	return (
		<Center m={8}>
			<Heading as='h1' size='2xl'>
				{title}
			</Heading>
		</Center>
	)
}

export default TitleSection
