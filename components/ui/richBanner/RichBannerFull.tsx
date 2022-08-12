import { FC } from "react"
import { Box, Heading, Text, VStack } from "@chakra-ui/react"

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

const RichBannerFull: FC<Props> = ({
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
			backgroundImage={`url(${banner})`}
		>
			<VStack spacing={8} p='50px' maxW='50%' h='100%' justifyContent='center' alignContent='flex-start'>
				<Box w='full' color='baseLight'>
					{pretitle && (
						<Text as='h5' fontSize='lg' fontWeight='bold' mb={2} className='shadowText'>
							{pretitle}
						</Text>
					)}
					<Heading as='h3' size='3xl' mb={4} className='shadowText'>
						{title}
					</Heading>
					{subtitle && (
						<Heading as='h4' size='2xl' mb={4} className='shadowText'>
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

export default RichBannerFull
