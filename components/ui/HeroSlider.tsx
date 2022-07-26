import { useState } from "react"
import { motion } from "framer-motion"

import { Box, IconButton, useBreakpointValue, Stack, Heading, Text, Container, Button } from "@chakra-ui/react"
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
// And react-slick as our Carousel Lib
import Slider from "react-slick"

// Settings for the slider
const settings = {
	dots: true,
	arrows: false,
	fade: true,
	infinite: true,
	autoplay: true,
	speed: 500,
	autoplaySpeed: 5000,
	slidesToShow: 1,
	slidesToScroll: 1,
}

const SliderHero = () => {
	// As we have used custom buttons, we need a reference variable to
	// change the state
	const [slider, setSlider] = useState<Slider | null>(null)

	// These are the breakpoints which changes the position of the
	// buttons as the screen size changes
	const top = useBreakpointValue({ base: "90%", md: "50%" })
	const side = useBreakpointValue({ base: "30%", md: "40px" })

	// This list contains all the data for carousels
	// This can be static or loaded from a server
	const cards = [
		{
			title: "shendy vendy",
			subtitle: "Bienvenido",
			text: "Elige la mayor comodidad en todo momento.",
			image: "https://shendyvendy.com/wp-content/uploads/2022/05/716A0756-scaled.jpg",
		},
		{
			title: "shve899",
			subtitle: "Usa el cupón",
			text: "Los mejores en Snikers.",
			image:
				"https://secureservercdn.net/198.71.233.70/qpd.3b2.myftpupload.com/wp-content/uploads/2022/05/716A0754-scaled.jpg?time=1658699039",
		},
	]

	return (
		<Box position={"relative"} height={"600px"} width={"full"} overflow={"hidden"}>
			{/* CSS files for react-slick */}
			<link
				rel='stylesheet'
				type='text/css'
				charSet='UTF-8'
				href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
			/>
			<link
				rel='stylesheet'
				type='text/css'
				href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
			/>
			{/* Left Icon */}
			<IconButton
				aria-label='left-arrow'
				variant='ghost'
				position='absolute'
				left={side}
				top={top}
				transform={"translate(0%, -50%)"}
				zIndex={2}
				onClick={() => slider?.slickPrev()}
			>
				<BiLeftArrowAlt size='40px' />
			</IconButton>
			{/* Right Icon */}
			<IconButton
				aria-label='right-arrow'
				variant='ghost'
				position='absolute'
				right={side}
				top={top}
				transform={"translate(0%, -50%)"}
				zIndex={2}
				onClick={() => slider?.slickNext()}
			>
				<BiRightArrowAlt size='40px' />
			</IconButton>
			{/* Slider */}
			<Box as='section'>
				<Slider {...settings} ref={slider => setSlider(slider)}>
					{cards.map(({ title, subtitle, text, image }, index) => (
						<Box
							key={index}
							// height={"6xl"}
							position='relative'
							backgroundPosition='center'
							backgroundRepeat='no-repeat'
							backgroundSize='cover'
							backgroundImage={`url(${image})`}
						>
							{/* This is the block you need to change, to customize the caption */}
							<Container height='600px' position='relative' maxW='full' centerContent>
								{/* <motion.div
								initial='hidden'
								animate='visible'
								variants={{
									hidden: {
										scale: 0.8,
										opacity: 0,
									},
									visible: {
										scale: 1,
										opacity: 1,
										transition: {
											delay: 0.4,
										},
									},
								}}
							> */}
								<Stack
									spacing={8}
									position='absolute'
									top='50%'
									transform={"translate(0, -50%)"}
									w={{ base: "80%", md: "50%" }}
									left='10%'
								>
									<Text fontSize={{ base: "md", lg: "lg" }} color='primary' mb='-8' fontWeight='extrabold'>
										{subtitle}
									</Text>
									<Heading fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} color='dark' as='h2'>
										{title}
									</Heading>
									<Text fontSize={{ base: "lg", md: "2xl", lg: "3xl" }} color='dark' fontWeight='medium'>
										{text}
									</Text>
									<Button size='lg' colorScheme='blackAlpha' maxW='min-content'>
										Comprar ahora
									</Button>
								</Stack>
								{/* </motion.div> */}
							</Container>
						</Box>
					))}
				</Slider>
			</Box>
		</Box>
	)
}

export default SliderHero
