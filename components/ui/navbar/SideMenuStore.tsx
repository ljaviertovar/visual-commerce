import {
    Button,
    IconButton,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    Menu,
    MenuButton

  } from '@chakra-ui/react'
import { BiMenu, BiCart, BiHeart } from "react-icons/bi";
import { useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'

function SideMenuStore() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement>(null);
  
    return (
        <>
            <Menu>
                <MenuButton ref={btnRef} colorScheme='teal' onClick={onOpen} as={IconButton} aria-label='Options' icon={<BiMenu /> } variant='outline'></MenuButton>
            </Menu>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>
        
                <DrawerBody>
                    <Input placeholder='Type here...' />
                </DrawerBody>
        
                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                    </Button>
                    <Button colorScheme='blue'>Save</Button>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SideMenuStore