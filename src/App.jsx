import { Box, Flex } from '@chakra-ui/react';
import { NavBar } from './components/NavBar';
import { Lesson } from './components/Lesson';
import { Music } from './components/Music';
import { Travelling } from './components/Travelling';
import { Food } from './components/Food';
import { Shopping } from './components/Shopping';

function App() {
  return (
    <Box border='2px solid black' borderRadius='18px' m={3} p={4}>
      <NavBar />
      <Lesson />
      <Flex gap={4}>
        <Music />
        <Travelling />
        <Food />
        <Shopping />
      </Flex>
    </Box>
  );
}

export default App;
