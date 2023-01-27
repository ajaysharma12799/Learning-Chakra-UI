import { Avatar, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, IconButton, Button, useDisclosure, Input, Menu, MenuButton, MenuItem, MenuList, Divider } from '@chakra-ui/react'
import React from 'react'
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <>
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

            <Container maxW={'full'} bg={'#3944f7'} py={3}>
                <Container maxW={'container.lg'}>
                    <Flex justifyContent={'space-between'} align={'center'}>
                        <IconButton
                            variant={'solid'}
                            _hover={false}
                            color={'black'}
                            fontSize={'2xl'}
                            onClick={onOpen}
                            ref={btnRef}
                            icon={<FaBars />}
                        />

                        <Menu>
                            <MenuButton>
                                <Avatar />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>View Profile</MenuItem>
                                <MenuItem>Settings & Privacy</MenuItem>
                                <MenuItem>Help</MenuItem>
                                <MenuItem>Languages</MenuItem>
                                <Divider />
                                <MenuItem>Logout</MenuItem>
                            </MenuList>
                        </Menu>

                    </Flex>
                </Container>
            </Container>
        </>
    )
}

export default Navbar