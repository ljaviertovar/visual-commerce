import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Mousewheel, Keyboard, Scrollbar } from "swiper"

import ProductCard from "./ProductCard"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/scrollbar"
import { useEffect, useRef, useState } from "react"
import { Box, IconButton } from "@chakra-ui/react"
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons"
import { TitleSection } from "../ui"

const ProductSlider = () => {
	const [swiperInstance, setSwiperInstance] = useState<any>(null)
	const prevRef = useRef(null)
	const nextRef = useRef(null)

	useEffect(() => {
		if (swiperInstance && swiperInstance?.params) {
			swiperInstance.params.navigation.prevEl = prevRef.current
			swiperInstance.params.navigation.nextEl = nextRef.current
			swiperInstance.navigation.init()
			swiperInstance.navigation.update()
		}
	}, [swiperInstance])

	return (
		<>
			<TitleSection title='Destacados' />
			<Box pos='relative'>
				<IconButton
					className='swiper-button'
					ref={prevRef}
					pos='absolute'
					top='50%'
					transform={"translate(0, -50%)"}
					zIndex={10}
					bg='white'
					aria-label='Anterior'
					border='1px solid black'
					icon={<ArrowLeftIcon />}
				/>

				<Swiper
					slidesPerView={1}
					// spaceBetween={10}
					// navigation={true}
					navigation={{
						prevEl: prevRef?.current,
						nextEl: nextRef?.current,
					}}
					// mousewheel={true}
					keyboard={true}
					scrollbar={{
						hide: true,
					}}
					// pagination={{
					// 	clickable: true,
					// }}
					onSwiper={setSwiperInstance}
					breakpoints={{
						640: {
							slidesPerView: 2,
							// spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							// spaceBetween: 40,
						},
						1024: {
							slidesPerView: 4,
							// spaceBetween: 50,
						},
					}}
					modules={[Navigation, Pagination, Mousewheel, Keyboard, Scrollbar]}
					className='mySwiper'
				>
					{[...Array(8)].map((_, index) => {
						return (
							<SwiperSlide key={index}>
								<ProductCard id={index} />
							</SwiperSlide>
						)
					})}
				</Swiper>

				<IconButton
					className='swiper-button'
					ref={nextRef}
					pos='absolute'
					top='50%'
					transform={"translate(0, -50%)"}
					right={0}
					zIndex={10}
					bg='white'
					aria-label='Siguiente'
					border='1px solid black'
					icon={<ArrowRightIcon />}
				/>
			</Box>
		</>
	)
}

export default ProductSlider
