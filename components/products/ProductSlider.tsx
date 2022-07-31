import { TitleSection } from "../ui"
import { ProductCard } from "./"
import Slider from "react-slick"
import { useRef, useState } from "react"
import { Button, IconButton } from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"

const TOTAL_SLIDES = 10
const DESKTOP_SLIDES_SCROLL = 4
const TABLET_SLIDES_SCROLL = 3
const MOBILE_SLIDES_SCROLL = 2

const ProductSlider = () => {
	const [state, setState] = useState({ currentIndex: 0, slidesToScroll: 0 })

	const sliderRef = useRef()

	const renderArrows = (prevCallback, nextCallback, { currentIndex, slidesToScroll }, totalSlides) => {
		const cycleDots = currentIndex === 0 ? 1 : Math.ceil(totalSlides / slidesToScroll)
		return (
			<div>
				<IconButton
					variant='outline'
					colorScheme='teal'
					aria-label='Call Sage'
					fontSize='20px'
					icon={<ChevronLeftIcon />}
					disabled={currentIndex === 0}
					onClick={prevCallback}
				/>

				<IconButton
					variant='outline'
					colorScheme='teal'
					aria-label='Call Sage'
					fontSize='20px'
					icon={<ChevronRightIcon />}
					disabled={currentIndex > cycleDots}
					onClick={nextCallback}
				/>
			</div>
		)
	}

	const next = () => {
		sliderRef.current.slickNext()
	}

	const previous = () => {
		sliderRef.current.slickPrev()
	}

	const settings = {
		slidesToShow: 4,
		dots: false,
		draggable: false,
		slidesToScroll: DESKTOP_SLIDES_SCROLL,
		arrows: false,
		speed: 1300,
		autoplay: false,
		centerMode: false,
		infinite: false,
		afterChange: indexOfCurrentSlide => {
			setState({
				currentIndex: indexOfCurrentSlide,
				slidesToScroll: DESKTOP_SLIDES_SCROLL,
			})
		},
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: TABLET_SLIDES_SCROLL,
					afterChange: indexOfCurrentSlide => {
						setState({
							currentIndex: indexOfCurrentSlide,
							slidesToScroll: TABLET_SLIDES_SCROLL,
						})
					},
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: MOBILE_SLIDES_SCROLL,
					afterChange: indexOfCurrentSlide => {
						setState({
							currentIndex: indexOfCurrentSlide,
							slidesToScroll: MOBILE_SLIDES_SCROLL,
						})
					},
				},
			},
		],
	}

	return (
		<>
			<TitleSection title='Productos más vendidos' />
			{renderArrows(previous, next, state, TOTAL_SLIDES - 1)}
			<Slider {...settings} ref={slider => (sliderRef.current = slider)}>
				{[...Array(TOTAL_SLIDES)].map((_, index) => {
					return <ProductCard key={index} id={index} />
				})}
			</Slider>
		</>
	)
}

export default ProductSlider
