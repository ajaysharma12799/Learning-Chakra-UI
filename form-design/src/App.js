import React from 'react'
import { Container, Flex } from '@chakra-ui/react';
import YourDetails from './components/YourDetails';
import Cart from './components/Cart';

const App = () => {
  return (
    <Container maxW={'container.lg'} py={[0, 0, 0]}>
      <Flex h={'100vh'} py={10} direction={{
        base: 'column',
        md: 'row'
      }} >
        <YourDetails />
        <Cart />
      </Flex>
    </Container>
  )
}

export default App