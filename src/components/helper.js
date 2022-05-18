import html from '../images/html5.png'
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
import { Flex, Box, Image, border } from '@chakra-ui/react'
import { CentralTheme } from '../theme'

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
    spec: 'Created with React, Chakra UI, SASS, Supabase.',
    img: blogPic,
    url: 'https://write-tulusibrahim.vercel.app/',
    github: 'https://github.com/tulusibrahim/react-blog'
},
{
    title: 'Room landing page',
    desc: 'Slicing Design',
    spec: 'Created with HTML, SASS, Javascript.',
    img: landingPagePic,
    url: 'https://room-phi.vercel.app/',
    github: 'https://github.com/tulusibrahim/roomHomePage'
},
{
    title: 'Country REST API',
    desc: 'Programming + Slicing Design',
    spec: 'Created with React, Chakra UI.',
    img: countryPic,
    url: 'https://countries-api-blue.vercel.app/',
    github: 'https://github.com/tulusibrahim/rest-countries-API'
},
{
    title: 'Typing Speed Test',
    desc: 'Programming',
    spec: 'Created with HTML, CSS, Javascript, 3rd party API.',
    img: typePic,
    url: 'https://tulusibrahim.github.io/typingSpeed/',
    github: 'https://github.com/tulusibrahim/typingSpeed'
},
{
    title: 'Quiz App',
    desc: 'Programming',
    spec: 'Created with HTML, CSS, Javascript, ReactJS, 3rd party API.',
    img: quizPic,
    url: 'https://quizyu.vercel.app/',
    github: 'https://github.com/tulusibrahim/quizapp-reactjs'
},
{
    title: 'Rock Paper Scissor',
    desc: 'Programming',
    spec: 'Created with HTML, CSS, Javascript.',
    img: RPCPic,
    url: 'https://tulusibrahim.github.io/rockpaperscissor/',
    github: 'https://github.com/tulusibrahim/rockpaperscissor'
}];

export const MediumCard = ({ item }) => {
    const { elementColor, bgColor, textColor, borderColor, shadowColor } = CentralTheme()
    let time = new Date(item.pubDate)
    return (
        //minH={['0px', '0px', '260px']}
        <Flex w={['100%', '100%', '100%']} h={'fit-content'} color={textColor} bg={bgColor} className='articlebox' transition={'.25s'} _hover={{ boxShadow: `0px 0px 15px 0px ${shadowColor}` }} position={'relative'} direction={'row'} align='center' padding={'10px'} my='20px' borderRadius='10px' border={`1px ${borderColor} solid`} fontFamily={'Merriweather'}>
            <Image src={item.thumbnail} h='100px' w='100px' borderRadius={'5px'} objectFit='cover' mr='10px' />
            <Flex direction={'column'} justify='space-evenly' w='80%'>
                <a href={item.link} target='_blank' style={{ cursor: 'pointer', width: 'fit-content' }}>
                    <Flex fontSize={['16px', '16px', '20px']}>{item.title.replace('&amp;', '&')} </Flex>
                </a>
                <Flex fontSize={'12px'} my='5px'>{time.getDate()}-{time.getMonth() + 1}-{time.getFullYear()}</Flex>
                <Flex justify={'flex-start'}>
                    {
                        item.categories.map((i, id) => (
                            id < 3 &&
                            <Flex fontSize={['12px', '12px', '14px']} align='center' display={['none', 'none', 'flex']} p={'5px'} mr='10px' borderRadius='5px' border={`1px ${borderColor} solid`} fontWeight='normal'>
                                #{i}
                            </Flex>
                        ))
                    }
                </Flex>
            </Flex>
            {/* <a href={item.link} target='_blank' style={{ cursor: 'pointer' }}>
                <Flex position={'absolute'} bottom={'5px'} right={'10px'} >See more</Flex>
            </a> */}
        </Flex>
    )
};

export const Letter = ({ classname, letter }) => {
    return (
        letter === ' '
            ?
            <span className={classname}>&nbsp;</span>
            :
            <span className={classname}>{letter}</span>
    )
}