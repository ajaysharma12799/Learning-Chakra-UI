import { VStack, Heading, Text, Button, HStack, Stack, Image, AspectRatio, Divider, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react'

const Cart = () => {
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
    const textColor = useColorModeValue('gray.600', 'white.600');
    return (
        <VStack bg={bgColor} w={'full'} h={'full'} p={10} spacing={10} alignItems={'flex-start'}>
            <VStack spacing={2} alignItems={'flex-start'}>
                <Heading>Your Cart</Heading>
                <Text>If price is to hard on your eyes,</Text>
                <Button 
                    variant={'outline'} 
                    colorScheme={'black'}
                    onClick={toggleColorMode}
                >
                    Try Changing Theme
                </Button>
            </VStack>
            <VStack w={'full'}>
                <HStack alignItems={'center'} w={'full'} spacing={5}>
                    <AspectRatio ratio={1} w={100}>
                        <Image src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-model-unselect-gallery-1-202207?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1654893619853' alt='IPhone' />
                    </AspectRatio>
                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        w={'full'}
                        spacing={0}
                    >
                        <VStack w={'full'} spacing={0} alignItems="flex-start">
                            <Heading size={'md'}>IPhone</Heading>
                            <Text>AJAY50</Text>
                        </VStack>
                        <Heading size={'md'} textAlign="end">
                            $180
                        </Heading>
                    </Stack>
                </HStack>
                <VStack
                    w={'full'} 
                    alignItems={'stretch'} 
                    spacing={5}
                >
                    <HStack justifyContent={'space-between'}>
                        <Text color={textColor}>Subtotal</Text>
                        <Heading size={'sm'}>$150</Heading>
                    </HStack>
                    <HStack justifyContent={'space-between'}>
                        <Text color={textColor}>Shipping</Text>
                        <Heading size={'sm'}>$10</Heading>
                    </HStack>
                    <HStack justifyContent={'space-between'}>
                        <Text color={textColor}>Taxes(estimated)</Text>
                        <Heading size={'sm'}>$20</Heading>
                    </HStack>
                    <Divider />
                    <HStack justifyContent={'space-between'}>
                        <Text color={textColor}>Total</Text>
                        <Heading size={'lg'}>$180</Heading>
                    </HStack>
                </VStack>
            </VStack>
        </VStack>
    )
}

export default Cart