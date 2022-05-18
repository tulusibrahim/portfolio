import { Center } from '@chakra-ui/react';
import './App.css';
import Body from './components/body';
import { CentralTheme } from './theme';

function App() {
  const { bgColor, textColor } = CentralTheme()

  return (
    <Center w="100%" d="flex" flexDirection="column" fontFamily={'Playfair Display'} bgAttachment='fixed' bg={bgColor} color={textColor} transition='.3s'>
      <Body />
    </Center>
  );
}

export default App;
