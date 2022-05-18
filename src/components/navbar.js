import { Flex } from '@chakra-ui/react';

const Navbar = () => {
    return (
        // <Flex w="95%" h="10vh" align="center" color="#212529" justify="space-between" fontSize="1.2em" >
        //     Portfolio
        // </Flex>
        <Flex w={'90%'} h={'8vh'} border='1px red solid' align={'center'} alignSelf='center' justify='flex-end'>
            <Flex w={'fit-content'} px='10px' fontWeight={'bold'} letterSpacing='1px'>
                Home
            </Flex>
            <Flex w={'fit-content'} px='10px' fontWeight={'bold'} letterSpacing='1px'>
                Experience
            </Flex>
            <Flex w={'fit-content'} px='10px' fontWeight={'bold'} letterSpacing='1px'>
                Projects
            </Flex>
            <Flex w={'fit-content'} px='10px' fontWeight={'bold'} letterSpacing='1px'>
                Articles
            </Flex>
        </Flex>
    )
}

export default Navbar;
