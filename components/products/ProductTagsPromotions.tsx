import { FC } from "react"
import { Badge, Flex } from "@chakra-ui/react"

interface Props {
	promotionTags: string[]
}

const ProductTagsPromotions: FC<Props> = ({ promotionTags }) => {
	return (
		<Flex flexDir='column' gap={4}>
			{promotionTags.map(promotion => (
				<Badge key={promotion} px='2' bg='emphasis' border='1px'>
					{promotion}
				</Badge>
			))}
		</Flex>
	)
}

export default ProductTagsPromotions
