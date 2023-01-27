import React from 'react'
import { VStack, Heading, Text, SimpleGrid, GridItem, FormControl, FormLabel, Input, Select, Checkbox, Button, Textarea } from '@chakra-ui/react';

const YourDetails = () => {
    return (
        <VStack bg={''} w={'full'} h={'full'} p={10} spacing={10} alignItems={'flex-start'}>
            <VStack spacing={2} alignItems={'flex-start'}>
                <Heading>Your's Details</Heading>
                <Text>If you already have an account, Click here to login</Text>
            </VStack>
            <SimpleGrid columns={2} columnGap={3} rowGap={5}>
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>
                            First Name
                        </FormLabel>
                        <Input placeholder='Enter First Name' />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>
                            Last Name
                        </FormLabel>
                        <Input placeholder='Enter Last Name' />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>
                            Address
                        </FormLabel>
                        <Textarea style={{ resize: 'none' }} placeholder='Enter Address' ></Textarea>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>
                            City
                        </FormLabel>
                        <Input placeholder='Enter City' />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>
                            Country
                        </FormLabel>
                        <Select placeholder='Select Country'>
                            <option>India</option>
                            <option>USA</option>
                            <option>Canada</option>
                            <option>Dubai</option>
                            <option>Maldives</option>
                        </Select>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl>
                        <Checkbox>
                            ship to billing address
                        </Checkbox>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <Button w={'full'} size={'lg'} >
                        Place Order
                    </Button>
                </GridItem>
            </SimpleGrid>
        </VStack>
    )
}

export default YourDetails