import { Box, Flex, Center, Image, Icon } from '@chakra-ui/react';
import guyPic from '../images/cool-guy.png'
import guyWork from '../images/man-work.png'
import girlPaint from '../images/girl-paint.png'
import girlRush from '../images/rushing.png'
import { list, skillsList, SkillBox, MediumCard, Letter } from './helper';
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from 'react';
import { useSpring, animated, Parallax, ParallaxLayer, useTrail, a } from 'react-spring'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiInstagram } from 'react-icons/fi'
import { IoLogoLinkedin } from 'react-icons/io'
import { FaMedium } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'

const Body = () => {
    const [selected, setSelected] = useState(true);
    const [mediumPost, setMediumPost] = useState([]);
    const [modalData, setModalData] = useState({})
    const [displayModal, setDisplayModal] = useState(false);
    const wordFirst = ("Tulus Anugrah Ibrahim,").split(' ')
    let geser = 0
    gsap.registerPlugin(ScrollTrigger)

    const getMediumPost = async (second) => {
        let getit = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tulusibrahim')
        let res = await getit.json()
        console.log(res)
        setMediumPost(res.items)
    };

    useEffect(() => {
        getMediumPost()
        //animasi di skill section 
        let skilltl = gsap.timeline()
        skilltl
            .from('.skilltitle', { x: 20, opacity: 0, stagger: { each: .05 } })
            .from('.skillboxlayer', { opacity: 0, stagger: { each: .2 } }, '-=1')
            .from('.skillimage', { x: 50, opacity: 0, },)

        ScrollTrigger.create({
            trigger: '.skillwrapper',
            animation: skilltl,
            start: "top 65%",
            end: "center 25%",
            // markers: true,
        })

        //animasi di article section
        // let articletl = gsap.timeline()
        // articletl
        //     .from('.articlebox', { opacity: 0, duration: 1 })

        let articleTitle = gsap.timeline()
        articleTitle
            .from('.articleTitle', { y: -50, stagger: 0.05 })

        //animasi di project section
        let tlProjectBox = gsap.timeline()
        // gsap.set('.projectboxtitle', { visibility: 'hidden' })
        // gsap.set('.projectboxdesc', { visibility: 'hidden' })
        // gsap.set('.projectboxlayer', { left: 0 })
        gsap.from('.projectsTitle', { y: 50, stagger: .09 })
        // .from('.Typing.Speed.Test', { opacity: 0 })
        // .from('.Room.landing.page', { opacity: 0 })
        // .from('.Country.REST.API', { opacity: 0 })
        // .from('.Quiz.App', { opacity: 0 })
        // .from('.Rock.Paper.Scissor', { opacity: 0 })
        tlProjectBox
            .to('.Blogging.Platform', { x: '30vw', yoyo: true, duration: 1 }, '-=1')
            .to('.Typing.Speed.Test', { x: '50vw', yoyo: true, duration: 1 }, '-=1')
            .to('.Room.landing.page', { x: '20vw', yoyo: true, duration: 1 }, '-=1')
            .to('.Country.REST.API', { x: '60vw', yoyo: true, duration: 1 }, '-=1')
            .to('.Quiz.App', { x: '40vw', yoyo: true, duration: 1 }, '-=1')
            .to('.Rock.Paper.Scissor', { x: '60vw', yoyo: true, duration: 1 }, '-=1',)

        ScrollTrigger.create({
            trigger: '.projectboxwrapper',
            animation: tlProjectBox,
            start: "top center",
            end: "bottom top",
            scrub: true
        })


        //animasi di experience section
        let tlImgscd = gsap.timeline()
        gsap.set('.containerscd', { opacity: 0 })
        gsap.set('.imgscd', { opacity: 0 })
        tlImgscd
            .to('.layerimgscd', { left: 0 })
            .to('.layerimgscd', { width: '100%', duration: .6 })
            .to('.layerimgscd', { width: 0, left: '100%' })
            .to('.containerscd', { opacity: 1 })
            .to('.imgscd', { opacity: 1 }, '-=.4')

        ScrollTrigger.create({
            trigger: '.containerscd',
            animation: tlImgscd,
            start: "top 60%",
            end: "top center",
        })

        //animasi di first section
        //animasi kata2
        let tl = gsap.timeline()
        tl
            .from('.hi', { opacity: 0, duration: 1, y: 100 })
            .from('.letter', { y: 100, opacity: 0, stagger: .04, duration: 1 }, '-=.8s')
            .from('.welcome', { opacity: 0, duration: 1, y: 100 }, '-=.8s')

        //animasi gambar
        let tlImg = gsap.timeline()
        tlImg
            .to('.imagefirst', { opacity: 0 })
            .to('.layerimgfirst', { left: 0 })
            .to('.layerimgfirst', { width: '100%', duration: .5 })
            .to('.layerimgfirst', { width: 0, left: '100%' })
            .to('.imagefirst', { opacity: 1 })
            .to('.layerimgfirst', { border: '1px black solid' })
    }, []);

    const showModal = (e, item) => {
        gsap.to('.modal', { css: { left: e.pageX, top: e.pageY } })
        setModalData(item)
        setDisplayModal(true)
    }

    return (
        <Flex w="100%" h="fit-content" align="center" justify='space-evenly' direction="column">
            <Flex w="100%" h="100vh" justify={'space-evenly'} align={'center'} direction={['column', 'column', 'row', 'row']} >
                <Flex w={'40%'} h={'100%'} justify={'center'} align={'center'} position='relative' >
                    <Box bg={'white'} boxShadow='1px 2px 30px -25px black' w='0px' h={'350px'} position='absolute' className='layerimgfirst'></Box>
                    <Image src={guyPic} boxSize="400px" objectFit="cover" borderRadius="full" className='imagefirst' onClick={() => setSelected(!selected)} />
                </Flex>
                <Flex w={["85%", "85%", "30%", "30%"]} h="70%" justify="center" direction="column" userSelect={'none'} fontSize="60px" fontWeight="900" letterSpacing="1px" className='maintitle'  >
                    <Flex overflow={'hidden'}>
                        <Box className='hi'>Hi, I'm</Box>
                    </Flex>
                    {
                        wordFirst.map(i => (
                            i == ' ' ?
                                <Flex overflow={'hidden'}>
                                    <span className='letter'>&nbsp;</span>
                                </Flex> :
                                <Flex overflow={'hidden'}>
                                    <span className='letter'>{i}</span>
                                </Flex>
                        ))
                    }
                    <Flex overflow={'hidden'}>
                        <Box className='welcome'>Welcome.</Box>
                    </Flex>                    {/* <Flex fontSize="24px" fontWeight={500} fontFamily={'Merriweather'} className='maindesc'>
                        A Final year Information Technology student that really passionate
                        about
                        front end development, and simple UI that bring
                        best experience.
                    </Flex> */}
                    {/* </animated.div> */}
                </Flex>
            </Flex>
            <Flex w="100%" h="90vh" justify={'center'} align={'center'}>
                <Flex w={["85%", "85%", "40%", "40%"]} h="50%" align="left" justify="space-evenly" direction="column" textAlign="left" className='containerscd'>
                    <Flex fontSize="32px" overflow={'hidden'} fontWeight="600" letterSpacing="1px">
                        {
                            ('Experience').split('').map(i => (
                                <span className='expTitle'>{i}</span>
                                // <Letter letter={i} className='expTitle' />
                            ))
                        }
                    </Flex>
                    <Flex h={'40%'} justify={'space-evenly'} direction={'column'} fontFamily={'Merriweather'}>
                        <Flex fontWeight={500} fontSize="24px">
                            Asmaraku (March - July 2021)
                        </Flex>
                        <Flex fontWeight={500} fontSize="24px">
                            Software Developer Intern
                        </Flex>
                        <Flex fontWeight={500} fontSize="20px">
                            Key learning: React native, shopify, push notification
                        </Flex>
                    </Flex>
                </Flex>
                <Flex w={'40%'} h={'60%'} display={['none', 'none', 'flex', 'flex']} justify={'flex-end'} align={'center'} >
                    <Box bg={'white'} w='0px' h={'350px'} position='absolute' className='layerimgscd'></Box>
                    <Image src={guyWork} boxSize="350px" objectFit="cover" borderRadius="full" className='imgscd' />
                </Flex>
            </Flex>
            <Flex w="90%" h="120vh" justify={'space-evenly'} align={'center'} direction='column' overflow={'hidden'} className='projectboxwrapper'>
                <Flex fontSize="32px" fontWeight="600" letterSpacing="1px" overflow={'hidden'}>
                    {
                        ' Selected Works'.split('').map(i => (
                            i == ' ' ?
                                <span className='projectsTitle'>&nbsp;</span>
                                :
                                <span className='projectsTitle'>{i}</span>
                            // <Letter letter={i} className='projectsTitle' />
                        ))
                    }
                </Flex>
                <Flex border='none' direction={'column'} >
                    {
                        list.map(item => (
                            <Flex className={`projectText ${item.title}`} paddingY={'25px'} fontSize={28} zIndex={2} whiteSpace={'nowrap'} w={'100%'} cursor='pointer' onMouseMove={(e) => showModal(e, item)} onMouseLeave={() => setDisplayModal(false)} onClick={() => window.location.href = item.url}>
                                <Box mx={item.title == 'Quiz App' ? 10 : 5}>{item.title}</Box>
                                <Box mx={item.title == 'Quiz App' ? 10 : 5}>{item.title}</Box>
                                <Box mx={item.title == 'Quiz App' ? 10 : 5}>{item.title}</Box>
                                <Box mx={item.title == 'Quiz App' ? 10 : 5}>{item.title}</Box>
                                <Box mx={item.title == 'Quiz App' ? 10 : 5}>{item.title}</Box>
                                <Box mx={item.title == 'Quiz App' ? 10 : 5}>{item.title}</Box>
                                <Box mx={item.title == 'Quiz App' ? 10 : 5}>{item.title}</Box>
                                <Box mx={item.title == 'Quiz App' ? 10 : 5}>{item.title}</Box>
                                <Box mx={item.title == 'Quiz App' ? 10 : 5}>{item.title}</Box>
                                <Box mx={item.title == 'Quiz App' ? 10 : 5}>{item.title}</Box>
                            </Flex>
                        ))
                    }
                </Flex>
            </Flex>
            <Flex w="90%" h="60vh" justify={'space-between'} align={'center'} direction='column' >
                <Flex h={'20%'} w='100%' justify={'flex-start'} align={'center'} fontSize="32px" fontWeight={600} letterSpacing='1px' overflow={'hidden'} >
                    {
                        'Recent Articles'.split('').map(i => (
                            <Letter letter={i} classname='articleTitle' />
                        ))
                    }
                </Flex>
                <Flex wrap={'wrap'} h={'100%'} w='100%' justify={'space-between'} align='center'>
                    {
                        mediumPost.map((item, idx) => (
                            idx <= 3 &&
                            // <Flex className='articlebox'>
                            <MediumCard item={item} key={idx} />
                            // </Flex>
                        ))
                    }
                </Flex>
            </Flex>
            <Flex w="90%" h="100vh" justify={'space-between'} align={'center'} >
                <Flex w="60%" h="60%" align="left" justify="space-between" direction="column" textAlign="left">
                    <Flex fontSize="32px" fontWeight="600" letterSpacing="1px" h={'10%'} >
                        {
                            ' Skillset & Frequent Tools'.split('').map(i => (
                                <Letter letter={i} classname='skilltitle' />
                            ))
                        }
                    </Flex>
                    <Flex wrap={'wrap'} justify={'space-between'} align={'center'} w={'100%'} h={'90%'} className='skillwrapper'>
                        {
                            skillsList.map(item => (
                                <SkillBox title={item.title} img={item.img} />
                            ))
                        }
                    </Flex>
                </Flex>
                <Flex w={'40%'} h={'60%'} justify={'center'} align={'center'} overflow='hidden'>
                    <Image src={girlRush} boxSize="350px" objectFit="cover" borderRadius="full" className='skillimage' />
                </Flex>
            </Flex>
            {/* footer */}
            <Flex w="50%" h="12vh" justify={'space-between'} align={'center'} direction='column' >
                <Flex w="100%" h="100%" justify={'space-between'} >
                    <a href='https://instagram.com/tulusibrahim/' target={'_blank'}>
                        <FiInstagram size={31} />
                    </a>
                    <a href='https://linkedin.com/in/tulusibrahim/' target={'_blank'}>
                        <IoLogoLinkedin size={32} />
                    </a>
                    <a href='https://medium.com/@tulusibrahim/' target={'_blank'}>
                        <FaMedium size={32} />
                    </a>
                    <a href='https://github.com/tulusibrahim/' target={'_blank'}>
                        <BsGithub size={32} />
                    </a>
                </Flex>
                <Flex pb={'10px'} fontWeight='bold' fontFamily={'Merriweather'} letterSpacing={1}>
                    Tulus @2022
                </Flex>
            </Flex>

            {/* modal project */}
            <Flex position={'absolute'} className='modal' height={'fit-content'} width='fit-content' justify='center' align={'center'} mt={3} >
                <Flex height={'100%'} width='100%' bg={'#272932'} color="whitesmoke" borderRadius='lg' zIndex={1} transition={'.5s'} justify='center' opacity={displayModal ? 1 : 0} padding='10px'>
                    <Flex w={'90%'} justify='center' align={'center'}>
                        <Flex w={'100%'} h={'70%'} justify='space-evenly' direction='column' >
                            <Flex fontSize={20} borderBottom={'4px white solid'} w='fit-content' fontWeight={'thin'} whiteSpace={'nowrap'}>
                                {modalData.title}
                            </Flex>
                            <Flex paddingY={'4px'} fontSize={16} fontFamily={'Merriweather'}>
                                • {modalData.desc}
                            </Flex>
                            <Flex fontSize={16} fontFamily={'Merriweather'}>
                                {modalData.spec}
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex >
    )
}
export default Body;
