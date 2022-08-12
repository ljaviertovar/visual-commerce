import { Box, Heading, Stack, VStack } from "@chakra-ui/react"
import { FC } from "react"

import LinkButton from "../LinkButton"

interface Props {
	banner: string
	pretitle?: string
	title: string
	subtitle?: string
	sizeButton: string
	textButton?: string
	linkButton?: string
}

const RichBannerR: FC<Props> = ({ banner, pretitle, title, subtitle, textButton, linkButton }) => {
	return (
		<Box bgGradient='linear-gradient(to right, btnPrimaryBase, btnSecondaryBase)' h='100%'>
			<Stack spacing={8} direction='row' h='100%'>
				<VStack spacing={8} p='50px' w='40%' justifyContent='center' alignContent='flex-start'>
					<Box w='full'>
						{pretitle && (
							<Heading as='h5' size='md' mb={2} color='emphasis' className='shadowText'>
								{pretitle}
							</Heading>
						)}
						<Heading as='h3' size='2xl' mb={4} color='white'>
							{title}
						</Heading>
						{subtitle && (
							<Heading as='h4' size='xl' mb={4} color='white'>
								{subtitle}
							</Heading>
						)}
					</Box>
					{textButton && linkButton && (
						<Box w='full'>
							<LinkButton text={textButton} size={"md"} link={linkButton} />
						</Box>
					)}
				</VStack>
				<Box
					w='60%'
					// h='100%'
					backgroundPosition='center'
					backgroundRepeat='no-repeat'
					backgroundSize='cover'
					backgroundImage={`url(${banner})`}
				></Box>
			</Stack>
		</Box>
	)
}

export default RichBannerR
