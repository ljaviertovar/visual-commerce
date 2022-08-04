import { FC } from "react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"

interface Props {
	categories: string[]
	currentCategory: string
	size: string
}

const ProductBreadcrump: FC<Props> = ({ categories, currentCategory, size }) => {
	return (
		<Breadcrumb fontWeight='normal' fontSize={size} textTransform='uppercase'>
			{categories.map(category => (
				<BreadcrumbItem key={category}>
					<BreadcrumbLink href='#' isCurrentPage={currentCategory === category ? true : false}>
						{category}
					</BreadcrumbLink>
				</BreadcrumbItem>
			))}
		</Breadcrumb>
	)
}

export default ProductBreadcrump
