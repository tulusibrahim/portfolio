import { Box, Flex, Center, Image, useColorMode } from '@chakra-ui/react';
import './App.css';
import Body from './components/body';
import bg from './images/bg.jpg';
import { CentralTheme } from './theme';

const Footer = () => {
  return (
    <Box>
      Footer
    </Box>
  )
}

function App() {
  const { elementColor, bgColor, textColor } = CentralTheme()

  return (
    // fontFamily="poppins"
    //bgImage={bg}
    <Center w="100%" d="flex" flexDirection="column" fontFamily={'Playfair Display'} bgAttachment='fixed' bg={bgColor} color={textColor} transition='.3s'>
      {/* <Navbar /> */}
      <Body />
      {/* <Footer /> */}
    </Center>
  );
}

export default App;
