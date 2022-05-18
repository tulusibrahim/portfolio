import blogPic from '../images/man-read.png'
import landingPagePic from '../images/female-candidate.png'
import countryPic from '../images/super-hero.png'
import typePic from '../images/man-practicing.png'
import quizPic from '../images/problem-solving.png'
import { Flex, Image } from '@chakra-ui/react'
import { CentralTheme } from '../theme'

export const list = [
    {
        title: 'Blogging Platform',
        desc: 'Programming',
        spec: 'Created with React, Chakra UI, SASS, Supabase.',
        img: blogPic,
        url: 'https://writee.vercel.app/',
        github: 'https://github.com/tulusibrahim/react-blog'
    },
    {
        title: 'Social media dashboard',
        desc: 'Slicing Design',
        spec: 'Created with React, Chakra UI.',
        img: landingPagePic,
        url: 'https://fementor-social-media.vercel.app/',
        github: 'https://github.com/tulusibrahim/frontendmentor-social-media-dashboard-with-theme-switcher'
    },
    {
        title: 'Job Listings with Filtering',
        desc: 'Slicing Design + Programming',
        spec: 'Created with React, Chakra UI.',
        img: landingPagePic,
        url: 'https://fementor-job-listings.vercel.app/',
        github: 'https://github.com/tulusibrahim/frontendmentor-job-listings-with-filtering'
    },
    {
        title: 'Company Landing Page',
        desc: 'Slicing Design',
        spec: 'Created with React, Chakra UI.',
        img: landingPagePic,
        url: 'https://fementor-intro-section.vercel.app/',
        github: 'https://github.com/tulusibrahim/frontendmentor-Intro-section-with-dropdown-navigation'
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
        spec: 'Created with React, Chakra UI, 3rd party API.',
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
    // {
    //     title: 'Rock Paper Scissor',
    //     desc: 'Programming',
    //     spec: 'Created with HTML, CSS, Javascript.',
    //     img: RPCPic,
    //     url: 'https://tulusibrahim.github.io/rockpaperscissor/',
    //     github: 'https://github.com/tulusibrahim/rockpaperscissor'
    // }
];

export const MediumCard = ({ item }) => {
    const { bgColor, textColor, borderColor, shadowColor } = CentralTheme()
    let time = new Date(item.pubDate)
    return (
        //minH={['0px', '0px', '260px']}
        <Flex w={['100%', '100%', '100%']} h={'fit-content'} color={textColor} bg={bgColor} className='articlebox' transition={'.25s'} _hover={{ boxShadow: `0px 0px 15px 0px ${shadowColor}` }} position={'relative'} direction={'row'} align='center' padding={'10px'} my='20px' borderRadius='10px' border={`1px ${borderColor} solid`} fontFamily={'Merriweather'}>
            <Image src={item.thumbnail} h='100px' w='100px' borderRadius={'5px'} objectFit='cover' mr='10px' />
            <Flex direction={'column'} justify='space-evenly' w='80%'>
                <a href={item.link} target='_blank' style={{ cursor: 'pointer', width: 'fit-content' }} rel='noreferrer'>
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