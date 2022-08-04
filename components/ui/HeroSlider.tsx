import { Box, Button, Container, Heading, Text, Stack } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, EffectFade, Autoplay } from "swiper"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import "swiper/css/autoplay"

import styles from "../../styles/Ui.module.css"
import ButtonGradient from "./ButtonGradient"

const cards = [
	{
		title: "shendy vendy",
		pretitle: "Bienvenido",
		text: "Elige la mayor comodidad en todo momento.",
		image: "https://shendyvendy.com/wp-content/uploads/2022/05/716A0756-scaled.jpg",
	},
	{
		title: "shve899",
		pretitle: "Usa el cupón",
		text: "Los mejores en Snikers.",
		image:
			"https://secureservercdn.net/198.71.233.70/qpd.3b2.myftpupload.com/wp-content/uploads/2022/05/716A0754-scaled.jpg?time=1658699039",
	},
]

const HeroSlider = () => {
	return (
		<>
			<Swiper
				direction='vertical'
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 5000,
				}}
				effect='fade'
				fadeEffect={{
					crossFade: true,
				}}
				modules={[Pagination, EffectFade, Autoplay]}
				style={{ height: "600px" }}
				className='swiperHero'
			>
				{cards.map(({ title, pretitle, text, image }, index) => (
					<SwiperSlide key={index}>
						<Box
							key={index}
							position='relative'
							backgroundPosition='center'
							backgroundRepeat='no-repeat'
							backgroundSize='cover'
							backgroundImage={`url(${image})`}
							className='SliderItem animate-in'
						>
							<Container height='600px' position='relative' maxW='full' centerContent>
								<Stack
									spacing={8}
									position='absolute'
									top='50%'
									transform={"translate(0, -50%)"}
									w={{ base: "80%", md: "50%" }}
									left='10%'
								>
									<Text fontSize={{ base: "md", lg: "lg" }} color='emphasis' mb='-8' fontWeight='extrabold'>
										{pretitle}
									</Text>
									<Heading fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} color='dark' as='h2'>
										{title}
									</Heading>
									<Text fontSize={{ base: "lg", md: "2xl", lg: "3xl" }} color='dark' fontWeight='medium'>
										{text}
									</Text>
									<Button bg='white' color='base' maxW='fit-content' size='lg'>
										Comprar ahora
									</Button>
								</Stack>
							</Container>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

export default HeroSlider
