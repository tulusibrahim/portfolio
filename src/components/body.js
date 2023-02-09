import {
  useColorMode,
  Flex,
  Box,
  useToast,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import { list, MediumCard } from "./helper";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaMedium,
  BsGithub,
  IoLogoLinkedin,
  GiHamburgerMenu,
  SiGmail,
  BsFillMoonFill,
  BsSunFill,
} from "react-icons/all";
import { CentralTheme } from "../theme";

const Body = () => {
  const [navbarSelect, setNavbarSelect] = useState("home");
  const [sideMenu, setSideMenu] = useState(false);
  const [mediumPost, setMediumPost] = useState([]);
  const { bgColor, borderColor, shadowColor } = CentralTheme();
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();
  const bodyWidth = "50%";
  gsap.registerPlugin(ScrollTrigger);

  const getMediumPost = async (second) => {
    let getit = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tulusibrahim"
    );
    let res = await getit.json();
    console.log(res);
    setMediumPost(res.items);
  };

  const copyEmail = (second) => {
    navigator.clipboard.writeText("tulusibrahim20@gmail.com");
    toast({
      title: "Email copied.",
      position: "bottom-left",
      // description: "Email copied.",
      status: "success",
      isClosable: true,
    });
  };

  useEffect(() => {
    getMediumPost();
  }, []);

  const ProjectCard = ({ item }) => {
    return (
      <Flex
        w={["100%", "100%", "48%"]}
        minH={"100px"}
        borderRadius={"10px"}
        _hover={{ boxShadow: `0px 0px 15px 0px ${shadowColor}` }}
        transition=".3s"
        border={`1px ${borderColor} solid`}
        my={"10px"}
        p="10px"
        direction={"column"}
        fontFamily={"Merriweather"}
      >
        <Flex direction={"row"} align="flex-start" justify={"space-between"}>
          {item.url ? (
            <a target={"_blank"} href={item.url} rel="noreferrer">
              <Flex fontSize={"20px"} mb="5px">
                {item.title}
              </Flex>
            </a>
          ) : (
            <Flex fontSize={"20px"} mb="5px">
              {item.title}
            </Flex>
          )}
          <a target={"_blank"} href={item.github} rel="noreferrer">
            <BsGithub />
          </a>
        </Flex>
        <Flex fontSize={"14px"}>{item.spec}</Flex>
      </Flex>
    );
  };

  const Navbar = () => {
    return (
      <Flex
        h={"10vh"}
        w={["95%", "85%", bodyWidth]}
        data-testid="navbar"
        align={"center"}
        justify="flex-end"
      >
        <Flex
          w={"100%"}
          h={"100%"}
          align={"center"}
          justify="flex-end"
          display={["none", "none", "flex"]}
        >
          <Flex
            w={"fit-content"}
            px="8px"
            py="3px"
            fontWeight={"bold"}
            letterSpacing="1px"
            borderRadius={"5px"}
            transition=".4s"
            cursor={"pointer"}
            mx="5px"
            _hover={{ bg: colorMode === "dark" ? "#1D3557" : "#A8DADC" }}
            bg={
              navbarSelect === "home"
                ? colorMode === "dark"
                  ? "#1D3557"
                  : "#A8DADC"
                : "none"
            }
            onClick={() => setNavbarSelect("home")}
          >
            Home
          </Flex>
          <Flex
            w={"fit-content"}
            px="8px"
            py="3px"
            fontWeight={"bold"}
            letterSpacing="1px"
            borderRadius={"5px"}
            transition=".4s"
            cursor={"pointer"}
            mx="5px"
            _hover={{ bg: colorMode === "dark" ? "#1D3557" : "#A8DADC" }}
            bg={
              navbarSelect === "experience"
                ? colorMode === "dark"
                  ? "#1D3557"
                  : "#A8DADC"
                : "none"
            }
            onClick={() => setNavbarSelect("experience")}
          >
            Experience
          </Flex>
          <Flex
            w={"fit-content"}
            px="8px"
            py="3px"
            fontWeight={"bold"}
            letterSpacing="1px"
            borderRadius={"5px"}
            transition=".4s"
            cursor={"pointer"}
            mx="5px"
            _hover={{ bg: colorMode === "dark" ? "#1D3557" : "#A8DADC" }}
            bg={
              navbarSelect === "projects"
                ? colorMode === "dark"
                  ? "#1D3557"
                  : "#A8DADC"
                : "none"
            }
            onClick={() => setNavbarSelect("projects")}
          >
            Project
          </Flex>
          <Flex
            w={"fit-content"}
            px="8px"
            py="3px"
            fontWeight={"bold"}
            letterSpacing="1px"
            borderRadius={"5px"}
            transition=".4s"
            cursor={"pointer"}
            mx="5px"
            _hover={{ bg: colorMode === "dark" ? "#1D3557" : "#A8DADC" }}
            bg={
              navbarSelect === "articles"
                ? colorMode === "dark"
                  ? "#1D3557"
                  : "#A8DADC"
                : "none"
            }
            onClick={() => setNavbarSelect("articles")}
          >
            Blog
          </Flex>
        </Flex>
        {colorMode === "dark" ? (
          <Icon
            as={BsFillMoonFill}
            onClick={toggleColorMode}
            ml="10px"
            cursor={"pointer"}
            transition="1s"
          />
        ) : (
          <Icon
            as={BsSunFill}
            onClick={toggleColorMode}
            ml="10px"
            cursor={"pointer"}
          />
        )}
        <Flex
          w={"fit-content"}
          ml="10px"
          h={"100%"}
          align={"center"}
          justify="flex-end"
          display={["flex", "flex", "none"]}
        >
          <GiHamburgerMenu
            size={"24px"}
            onClick={() => setSideMenu(!sideMenu)}
          />
        </Flex>
      </Flex>
    );
  };

  const Home = (second) => {
    return (
      <Flex
        w={["95%", "85%", bodyWidth]}
        h={["fit-content", "fit-content", "fit-content"]}
        minH="78vh"
        justify={"space-evenly"}
        align={"flex-start"}
        direction={["column", "row", "row"]}
      >
        <Flex
          w={["100%", "100%", "100%"]}
          h={["60%", "60%", "50%"]}
          justify="space-evenly"
          align={"flex-start"}
          wrap={"wrap"}
          direction="row"
          fontWeight="900"
          letterSpacing="1px"
          className="maintitle"
        >
          <Flex
            w="100%"
            h="70%"
            direction={"column"}
            justify={"flex-start"}
            mt={"20px"}
          >
            <Flex>
              <Box
                letterSpacing={1.5}
                w="100%"
                display={"flex"}
                justifyContent={["flex-start", "flex-start", "flex-start"]}
                fontSize={["24px", "24px", "40px"]}
              >
                Hi! I'm Tulus Anugrah Ibrahim 👋
              </Box>
            </Flex>
            <Flex fontWeight={"normal"} fontFamily="Merriweather">
              I'm a Frontend Developer based on Indonesia. Currently learning
              React and NextJS.
            </Flex>
            <Flex
              mt={"30px"}
              letterSpacing={1.5}
              w="100%"
              display={"flex"}
              justifyContent={["flex-start", "flex-start", "flex-start"]}
              fontSize={["24px", "24px", "28px"]}
            >
              Latest blog
            </Flex>
            <Flex
              direction={"column"}
              h="fit-content"
              w={["100%", "100%", "100%"]}
            >
              {mediumPost.map((i, id) => id < 3 && <MediumCard item={i} />)}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  };

  const Experience = (second) => {
    return (
      <Flex
        w={["95%", "85%", bodyWidth]}
        h={["80vh", "78vh", "78vh"]}
        justify={"center"}
        align={"flex-start"}
      >
        <Flex
          w={["90%", "90%", "100%"]}
          h="60%"
          align="left"
          justify="flex-start"
          direction="column"
          textAlign="left"
          className="containerscd"
        >
          <Flex
            fontSize={["28px", "32px", "32px"]}
            h="fit-content"
            overflow={"hidden"}
            fontWeight="600"
            letterSpacing="1px"
          >
            Experience
          </Flex>
          <Flex
            h={"70%"}
            justify={"space-evenly"}
            direction={"column"}
            fontFamily={"Merriweather"}
          >
            <Flex flexDir="column">
              <Flex fontWeight={500} fontSize={["20px", "24px", "24px"]}>
                PT. Cakra Radha Mustika (July 2022 - Present)
              </Flex>
              <Flex fontWeight={500} fontSize={["16px", "20px", "20px"]}>
                Frontend Engineer
              </Flex>
            </Flex>
            <Flex flexDir="column">
              <Flex fontWeight={500} fontSize={["20px", "24px", "24px"]}>
                Asmaraku (March - July 2021)
              </Flex>
              <Flex fontWeight={500} fontSize={["16px", "20px", "20px"]}>
                Software Developer Intern
              </Flex>
            </Flex>
            {/* <Flex fontWeight={500} fontSize={["16px", "20px", "20px"]} mt='10px' direction='column'>
                            <Flex mb={'5px'}>• Developed an ecommerce mobile application from scratch up to deployment to google play store.
                            </Flex>
                            <Flex mb={'5px'}>
                                • The project involves react native, expo, firebase cloud messaging (FCM) for push notification,
                                consuming the graphql API and manage to upload the apps to google play store.
                            </Flex>
                            <Flex textDecoration={'underline'}>
                                <a href="http://play.google.com/store/apps/details?id=com.outerBloom1Expo" target="_blank" rel="noopener noreferrer">
                                    Link Google Play
                                </a>
                            </Flex>
                        </Flex> */}
          </Flex>
        </Flex>
      </Flex>
    );
  };

  const Project = (second) => {
    return (
      <Flex
        w={["95%", "85%", bodyWidth]}
        h={"fit-content"}
        minH="78vh"
        justify={"flex-start"}
        align={"center"}
        direction="column"
        overflow={"hidden"}
        className="projectboxwrapper"
      >
        <Flex
          fontSize={["28px", "32px", "32px", "32px"]}
          fontWeight="600"
          h={"10%"}
          w="100%"
          justify={"flex-start"}
          letterSpacing="1px"
          overflow={"hidden"}
        >
          {"Selected Works".split("").map(
            (i) =>
              i === " " ? (
                <span className="projectsTitle">&nbsp;</span>
              ) : (
                <span className="projectsTitle">{i}</span>
              )
            // <Letter letter={i} className='projectsTitle' />
          )}
        </Flex>
        <Flex w="100%" justify={"center"}>
          <Flex
            allowToggle
            w="100%"
            h="fit-content"
            display={"flex"}
            alignItems="center"
            justifyContent={"space-evenly"}
            flexDirection={"row"}
            flexWrap="wrap"
          >
            {list.map((item) => (
              <ProjectCard item={item} />
            ))}
          </Flex>
        </Flex>
        {/* <Flex border='none' direction={'column'} >
                        {
                            list.map(item => (
                                <Flex className={`projectText ${item.title}`} paddingY={'25px'} fontSize={[24, 24, 28, 28]} zIndex={2} whiteSpace={'nowrap'} w={'100%'} cursor='pointer' onMouseMove={(e) => showModal(e, item)} onMouseLeave={() => setDisplayModal(false)} onClick={() => window.location.href = item.url}>
                                    <Box mx={item.title === 'Quiz App' ? 10 : 5}>{item.title}</Box>
                                    <Box mx={item.title === 'Quiz App' ? 10 : 5}>{item.title}</Box>
                                    <Box mx={item.title === 'Quiz App' ? 10 : 5}>{item.title}</Box>
                                    <Box mx={item.title === 'Quiz App' ? 10 : 5}>{item.title}</Box>
                                    <Box mx={item.title === 'Quiz App' ? 10 : 5}>{item.title}</Box>
                                    <Box mx={item.title === 'Quiz App' ? 10 : 5}>{item.title}</Box>
                                    <Box mx={item.title === 'Quiz App' ? 10 : 5}>{item.title}</Box>
                                    <Box mx={item.title === 'Quiz App' ? 10 : 5}>{item.title}</Box>
                                    <Box mx={item.title === 'Quiz App' ? 10 : 5}>{item.title}</Box>
                                    <Box mx={item.title === 'Quiz App' ? 10 : 5}>{item.title}</Box>
                                </Flex>
                            ))
                        }
                    </Flex> */}
      </Flex>
    );
  };

  const Blog = (second) => {
    return (
      <Flex
        w={["95%", "85%", bodyWidth]}
        h={["fit-content", "fit-content", "fit-content"]}
        justify={"space-between"}
        align={"center"}
        direction="column"
      >
        <Flex
          h={"10%"}
          w={["100%", "100%", "100%", "100%", "75%"]}
          justify={"flex-start"}
          align={"center"}
          fontSize={["28px", "32px", "32px", "32px"]}
          fontWeight={600}
          letterSpacing="1px"
          overflow={"hidden"}
        >
          Recent Articles
        </Flex>
        <Flex
          wrap={"wrap"}
          h={"90%"}
          w={["100%", "100%", "100%", "100%", "75%"]}
          justify={["center", "center", "space-between"]}
          align="center"
        >
          {mediumPost.map((item, idx) => (
            // idx <= 3 &&
            <MediumCard item={item} key={idx} />
          ))}
        </Flex>
      </Flex>
    );
  };

  const Footer = (second) => {
    return (
      <Flex
        w={["80%", "80%", bodyWidth]}
        h="12vh"
        justify={"space-between"}
        align={"center"}
        direction="column"
      >
        <Flex w="100%" h="100%" justify={"center"}>
          {/* <Flex w='50%' h='100%' wrap={'wrap'} justify={'space-between'} align='center'>
                        <Icon fontSize={24} as={AiFillHtml5} w={['30%', '30%', 'auto']} transition='.2s' _hover={{ color: '#F4470B' }} />
                        <Icon fontSize={24} as={DiCss3Full} w={['30%', '30%', 'auto']} transition='.2s' _hover={{ color: '#2862E9' }} />
                        <Icon fontSize={24} as={SiJavascript} w={['30%', '30%', 'auto']} transition='.2s' _hover={{ color: '#DAB92D' }} />
                        <Icon fontSize={24} as={DiGit} w={['30%', '30%', 'auto']} transition='.2s' _hover={{ color: '#E84D31' }} />
                        <Icon fontSize={24} as={FaReact} w={['30%', '30%', 'auto']} transition='.2s' _hover={{ color: '#00D1F7' }} />
                        <Icon fontSize={24} as={SiVisualstudiocode} w={['30%', '30%', 'auto']} transition='.2s' _hover={{ color: '#2E7DB5' }} />
                    </Flex> */}
          <Flex w="60%" h="100%" justify={"space-evenly"} align={"center"}>
            {/* <a href='https://github.com/tulusibrahim/' target={'_blank'}> */}
            <Tooltip
              label="Click to copy my email ;)"
              aria-label="A tooltip"
              placement="top"
            >
              <span>
                <SiGmail size={24} onClick={copyEmail} cursor="pointer" />
              </span>
            </Tooltip>
            {/* </a> */}
            <a
              href="https://linkedin.com/in/tulusibrahim/"
              target={"_blank"}
              rel="noreferrer"
            >
              <IoLogoLinkedin size={24} />
            </a>
            <a
              href="https://github.com/tulusibrahim/"
              target={"_blank"}
              rel="noreferrer"
            >
              <BsGithub size={24} />
            </a>
            <a
              href="https://medium.com/@tulusibrahim/"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaMedium size={24} />
            </a>
            {/* <a href='https://instagram.com/tulusibrahim/' target={'_blank'}>
                        <FiInstagram size={32} />
                    </a> */}
          </Flex>
        </Flex>
        <Flex
          pb={"10px"}
          fontWeight="bold"
          fontFamily={"Merriweather"}
          letterSpacing={1}
        >
          Tulus @{new Date().getFullYear()}
        </Flex>
      </Flex>
    );
  };

  return (
    //scren size hp: 360x800
    <Flex
      w="100%"
      h="fit-content"
      align="center"
      justify="space-evenly"
      direction="column"
      position={"relative"}
      overflow={"hidden"}
    >
      <Navbar />
      {navbarSelect === "home" && <Home />}

      {navbarSelect === "experience" && <Experience />}

      {navbarSelect === "projects" && <Project />}

      {navbarSelect === "articles" && <Blog />}
      <Footer />

      {/* sidenav tab */}
      <Flex
        w={"100%"}
        h="100vh"
        position={"fixed"}
        left={sideMenu ? "0px" : "100%"}
        top={0}
        transition={".8s"}
        overflow="hidden"
      >
        <Flex w={"40%"} h="100%" onClick={() => setSideMenu(false)}></Flex>
        <Flex
          w={"60%"}
          bg={bgColor}
          h="100%"
          align="center"
          justify={"center"}
          borderLeft="1px black solid"
        >
          <Flex
            w={"100%"}
            h="50%"
            direction={"column"}
            align="center"
            justify={"space-evenly"}
          >
            <Flex
              w={"60%"}
              fontWeight="bold"
              onClick={() => {
                setNavbarSelect("home");
                setSideMenu(false);
              }}
            >
              Home
            </Flex>
            <Flex
              w={"60%"}
              fontWeight="bold"
              onClick={() => {
                setNavbarSelect("experience");
                setSideMenu(false);
              }}
            >
              Experience
            </Flex>
            <Flex
              w={"60%"}
              fontWeight="bold"
              onClick={() => {
                setNavbarSelect("projects");
                setSideMenu(false);
              }}
            >
              Projects
            </Flex>
            <Flex
              w={"60%"}
              fontWeight="bold"
              onClick={() => {
                setNavbarSelect("articles");
                setSideMenu(false);
              }}
            >
              Articles
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Body;
