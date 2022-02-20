import html from '../images/html3.png'
import css from '../images/css3.png'
import js from '../images/javascript.png'
import git from '../images/git (1).png'
import vscode from '../images/vs-code.png'
import react from '../images/react.png'
import blogPic from '../images/man-read.png'
import RPCPic from '../images/man-play.png'
import landingPagePic from '../images/female-candidate.png'
import countryPic from '../images/super-hero.png'
import typePic from '../images/man-practicing.png'
import quizPic from '../images/problem-solving.png'
import { Flex, Box, Image } from '@chakra-ui/react'

export const skillsList = [{
    title: 'HTML',
    img: html,
},
{
    title: 'CSS',
    img: css,
},
{
    title: 'Javascript',
    img: js,
},
{
    title: 'Git',
    img: git,
},
{
    title: 'React JS',
    img: react,
},
{
    title: 'Vs Code',
    img: vscode,
},]

export const SkillBox = ({ img, title }) => {
    return (
        <Flex w={'30%'} h={'40%'} justify={'center'} align={'center'} className='skillboxlayer' fontWeight={600} direction={'column'} position='relative'>
            <Image src={img} boxSize="80px" objectFit="cover" />
            <Box>{title}</Box>
            {/* <Box className='skillboxlayer' height={'100%'} bottom={0} w='50%' bg={'white'} position='absolute' ></Box> */}
        </Flex>
    )
}

export const list = [{
    title: 'Blogging Platform',
    desc: 'Programming',
    spec: 'Created with React, Chakra UI, SASS, Supabase as backend.',
    img: blogPic,
    url: 'https://write-tulusibrahim.vercel.app/'
},
{
    title: 'Typing Speed Test',
    desc: 'Programming',
    spec: 'Created with HTML, CSS, Javascript, 3rd party API.',
    img: typePic,
    url: 'https://tulusibrahim.github.io/typingSpeed/'
},
{
    title: 'Room landing page',
    desc: 'Slicing Design',
    spec: 'Created with HTML, SASS, Javascript.',
    img: landingPagePic,
    url: 'https://room-phi.vercel.app/'
},
{
    title: 'Country REST API',
    desc: 'Programming + Slicing Design',
    spec: 'Created with React, Chakra UI.',
    img: countryPic,
    url: 'https://countries-api-blue.vercel.app/'
},
{
    title: 'Quiz App',
    desc: 'Programming',
    spec: 'Created with HTML, CSS, Javascript, ReactJS, 3rd party API.',
    img: quizPic,
    url: 'https://quizyu.vercel.app/'
},
{
    title: 'Rock Paper Scissor',
    desc: 'Programming',
    spec: 'Created with HTML, CSS, Javascript.',
    img: RPCPic,
    url: 'https://tulusibrahim.github.io/rockpaperscissor/'
}];

export const MediumCard = ({ item }) => {
    let time = new Date(item.pubDate)
    return (
        <Flex w={['45%', '45%', '22%', '22%']} h={['40%', '40%', '90%', '90%']} className='articlebox' _hover={{ transform: 'scale(1.1)' }} boxShadow='1px 2px 30px -10px gray' transition={'.25s'} position={'relative'} direction='column' padding={'10px'} borderRadius='10px' bg='whitesmoke' color={'black'} fontFamily={'Merriweather'}>
            <Image src={item.thumbnail} h='fit-content' borderRadius={'5px'} marginBottom='10px' />
            <a href={item.link} target='_blank' style={{ cursor: 'pointer' }}>
                <Flex fontSize={'16px'}>{item.title}</Flex>
            </a>
            <Flex fontSize={'12px'}>{time.getDate()}-{time.getMonth() + 1}-{time.getFullYear()}</Flex>
            <a href={item.link} target='_blank' style={{ cursor: 'pointer' }}>
                <Flex position={'absolute'} bottom={'5px'} right={'10px'} >See more</Flex>
            </a>
        </Flex>
    )
};

export const Letter = ({ classname, letter }) => {
    return (
        letter == ' '
            ?
            <span className={classname}>&nbsp;</span>
            :
            <span className={classname}>{letter}</span>
    )
}