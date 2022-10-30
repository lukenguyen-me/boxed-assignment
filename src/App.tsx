import { ChakraProvider, Flex } from '@chakra-ui/react'

import './App.css';
import ClientSide from './components/ClientSide';
import ServerSide from './components/ServerSide';

function App() {
  return (
    <ChakraProvider>
      <Flex flexDir='column' gap='50px' py='50px'>
        <ClientSide />
        {/* <ServerSide /> */}
      </Flex>
    </ChakraProvider>
  );
}

export default App;
