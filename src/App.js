import { Box, Flex, Center, Image } from '@chakra-ui/react';
import './App.css';
import Body from './components/body';
import bg from './images/bg.jpg';

const Footer = () => {
  return (
    <Box>
      Footer
    </Box>
  )
}

function App() {
  return (
    <Center w="100%" fontFamily="poppins" d="flex" flexDirection="column" fontFamily={'Playfair Display'} bgImage={bg} bgAttachment='fixed'>
      {/* <Navbar /> */}
      <Body />
      {/* <Footer /> */}
    </Center>
  );
}

export default App;
