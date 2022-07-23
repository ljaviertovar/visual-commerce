import Image from "next/image"
import { BiMinus, BiPlus } from "react-icons/bi";
import { 
	Box,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
    Divider,
	ListItem,
    Link,
	UnorderedList,
	} from '@chakra-ui/react'

const PlusFooterStore = () => {
	return (
        <Accordion allowMultiple>
            <AccordionItem>
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        OBTENER AYUDA
                        </Box>
                        {isExpanded ? (
                        <BiMinus fontSize='12px' />
                        ) : (
                        <BiPlus fontSize='12px' />
                        )}
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <UnorderedList>
                            <Link href='#'> 
                                <ListItem>Envíos</ListItem>
                            </Link>
                            <Link href='#'>
                                <ListItem>Estatus</ListItem>
                            </Link>
                            <Link href='#'>
                                <ListItem>Devoluciones</ListItem>
                            </Link>
                            <Link href='#'>
                                <ListItem>Métodos de pago</ListItem>
                            </Link>
                        </UnorderedList>
                    </AccordionPanel>
                </>
                )}
            </AccordionItem>
            <AccordionItem>
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        MI CUENTA
                        </Box>
                        {isExpanded ? (
                        <BiMinus fontSize='12px' />
                        ) : (
                        <BiPlus fontSize='12px' />
                        )}
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <UnorderedList>
                            <Link href='#'>
                                <ListItem>Mi Cuenta</ListItem>
                            </Link>
                            <Link href='#'>
                                <ListItem>Pedidos</ListItem>
                            </Link>
                            <Link href='#'>
                                <ListItem>Dirección y Facturación</ListItem>
                            </Link>
                        </UnorderedList>
                    </AccordionPanel>
                </>
                )}
            </AccordionItem>
            <AccordionItem>
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        ACERCA DE SHENDY VENDY
                        </Box>
                        {isExpanded ? (
                        <BiMinus fontSize='12px' />
                        ) : (
                        <BiPlus fontSize='12px' />
                        )}
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <Image 
                    width={140}
                    height={35}
                    src="/img/header/SHENDY-VENDY-1.png"
                    alt="Shendy Vendy"/>
                    <Divider orientation='horizontal' />
                    SHENDY VENDY es una empresa mexicana con más de 7 años de experiencia y con una fuerte presencia a nivel internacional y nacional en distribución y comercialización, exportación y venta en e-ccomerce de productos de todo tipo de categorías y de la mejor calidad que nuestra gente se merece.
                    </AccordionPanel>
                </>
                )}
            </AccordionItem>
        </Accordion>
	)
}

export default PlusFooterStore