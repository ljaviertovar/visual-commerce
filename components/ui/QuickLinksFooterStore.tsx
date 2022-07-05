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
	} from '@chakra-ui/react'

const QuickLinksFooterStore = () => {
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
                        <ListIcon as={ BiRadioCircleMarked } color='green.500' />
                        Hombre
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ BiRadioCircleMarked } color='green.500' />
                        Mujer
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
                        <ListIcon as={ BiRadioCircleMarked } color='green.500' />
                        Conjunto deportivo
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ BiRadioCircleMarked } color='green.500' />
                        Leggins deportivos con bolsa
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ BiRadioCircleMarked } color='green.500' />
                        Sudadera con capucha
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
                        <ListIcon as={ BiRadioCircleMarked } color='green.500' />
                        Test 1
                    </ListItem>
                </List>
                </AccordionPanel>
            </AccordionItem>

        </Accordion>
		</>
	)
}

export default QuickLinksFooterStore