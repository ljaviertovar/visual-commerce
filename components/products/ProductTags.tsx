import { Tag } from "@chakra-ui/react"
import { FC } from "react"

interface Props {
	tags: string[]
}

const ProductTags: FC<Props> = ({ tags }) => {
	return (
		<>
			{tags.map(tag => (
				<Tag size='sm' variant='solid' bg='emphasis' key={tag}>
					{tag}
				</Tag>
			))}
		</>
	)
}

export default ProductTags
