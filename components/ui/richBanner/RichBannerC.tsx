import { Box, Heading, Stack, VStack } from "@chakra-ui/react"
import { FC } from "react"

import LinkButton from "../LinkButton"

interface Props {
	banner: string
	center?: boolean
	textCenter?: boolean
	textRight?: boolean
	pretitle?: string
	title: string
	subtitle?: string
	sizeButton: "sm" | "md" | "lg" | "xs"
	textButton?: string
	linkButton?: string
}

const RichBanner: FC<Props> = ({
	banner,
	textCenter,
	textRight,
	pretitle,
	title,
	subtitle,
	sizeButton,
	textButton,
	linkButton,
}) => {
	return (
		<Box
			w='full'
			h='100%'
			position='relative'
			backgroundPosition='center'
			backgroundRepeat='no-repeat'
			backgroundSize='cover'
			// bgGradient='linear-gradient(to right, secondary, primary)'
			backgroundImage={`url(${banner})`}
		>
			<VStack spacing={8} p='50px' maxW='50%' h='100%' justifyContent='center' alignContent='flex-start'>
				<Box w='full'>
					{pretitle && (
						<Heading as='h5' size='md' mb={2} color='emphasis' className='shadowText'>
							{pretitle}
						</Heading>
					)}
					<Heading as='h3' size='2xl' mb={4}>
						{title}
					</Heading>
					{subtitle && (
						<Heading as='h4' size='xl' mb={4}>
							{subtitle}
						</Heading>
					)}
				</Box>
				{textButton && linkButton && (
					<Box w='full'>
						<LinkButton text={textButton} size={sizeButton} link={linkButton} />
					</Box>
				)}
			</VStack>
		</Box>
	)
}

export default RichBanner
