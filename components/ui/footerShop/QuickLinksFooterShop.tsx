import { BiRadioCircleMarked } from "react-icons/bi";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
	List,
	ListItem,
	ListIcon,
    Link,
	} from '@chakra-ui/react'

const QuickLinksFooterShop = () => {
	return (
		<>
        <Accordion allowToggle>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    Tenis
                    </Box>
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <List spacing={3}>
                    <ListItem>
                        <Link href='/'>
                            <ListIcon as={ BiRadioCircleMarked } color='green.500' />
                            Hombre
                        </Link>
                    </ListItem>
                    <ListItem>
                    <Link href='/'>
                        <ListIcon as={ BiRadioCircleMarked } color='green.500' />
                            Mujer
                        </Link>
                    </ListItem>
                </List>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    Ropa
                    </Box>
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <List spacing={3}>
                    <ListItem>
                        <Link href='/'>
                            <ListIcon as={ BiRadioCircleMarked } color='green.500' />
                            Conjunto deportivo
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/'>
                            <ListIcon as={ BiRadioCircleMarked } color='green.500' />
                            Leggins deportivos con bolsa
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/'>
                            <ListIcon as={ BiRadioCircleMarked } color='green.500' />
                            Sudadera con capucha
                        </Link>
                    </ListItem>
                </List>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    Accesorios
                    </Box>
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <List spacing={3}>
                    <ListItem>
                        <Link href='/' isExternal>
                            <ListIcon as={ BiRadioCircleMarked } color='green.500' />
                            Test
                        </Link>
                    </ListItem>
                </List>
                </AccordionPanel>
            </AccordionItem>

        </Accordion>
		</>
	)
}

export default QuickLinksFooterShop