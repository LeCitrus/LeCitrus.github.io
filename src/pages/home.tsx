import NavBar from '../components/NavBar';
import {Button, useColorMode, ColorModeScript, useTheme, Text, VStack, HStack, Card, Image} from "@chakra-ui/react";
import {AiFillGithub, AiOutlineMail, AiFillLinkedin} from 'react-icons/ai';
import { IoReload } from "react-icons/io5";
import {SiDevpost} from 'react-icons/si'
import Header from '../components/Header';
import Resume from '../images/resume.jpg';
import ImageComponent from '../components/ImageComponent';
import {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

const Home = () => {

    const {colorMode, toggleColorMode} = useColorMode();
    const theme = useTheme();
    const [count, setCount] = useState(0);

    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [weatherData, setWeatherData] = useState<any>([]);

    useEffect(() => {
      const initialValue = localStorage.getItem("count");
      if (initialValue) setCount(Number(initialValue));

      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      async function fetchMyAPI() {
        await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setWeatherData(result)
        });
      }
      fetchMyAPI();

    }, [lat, long]);

    

    function increment() {
      setCount(prev_count => {
        const newCount = prev_count + 1;
        localStorage.setItem("count", String(newCount));
        return newCount;
      });
    }

    function clickLink(link: string) {
      window.open(link);
      return;
    };
    
    return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
    <div className="App">
      <Header title="Curtis Kan"/>
    </div>
    <NavBar/>
    <VStack>
        <Text fontSize='5xl'>Welcome!</Text>
        <HStack spacing={10} padding={4}>
          <Card padding={8} borderColor={colorMode === 'dark' ? 'white' : 'black'} variant="outline" _hover={{bg: colorMode === 'dark'? 'green' : 'gray'}} onClick={() => clickLink('https://github.com/LeCitrus')}>
              <VStack>
              <AiFillGithub size={60}/>
              <Text>Github</Text>
              </VStack>
          </Card>
          <Card padding={8} borderColor={colorMode === 'dark' ? 'white' : 'black'} variant="outline" _hover={{bg: colorMode === 'dark'? 'green' : 'gray'}} onClick={() => clickLink('https://devpost.com/ctkan')}>
              <VStack>
              <SiDevpost size={60}/>
              <Text>Devpost</Text>
              </VStack>
          </Card>
          <Card padding={8} borderColor={colorMode === 'dark' ? 'white' : 'black'} variant="outline" _hover={{bg: colorMode === 'dark'? 'green' : 'gray'}} onClick={() => clickLink('https://www.linkedin.com/in/curtis-kan-33446a1b3/')}>
              <VStack>
              <AiFillLinkedin size={60}/>
              <Text>Linkedin</Text>
              </VStack>
          </Card>
          <Card padding={8} borderColor={colorMode === 'dark' ? 'white' : 'black'} variant="outline" _hover={{bg: colorMode === 'dark'? 'green' : 'gray'}} onClick={() => clickLink('mailto:curtis.tl.kan@gmail.com')}>
              <VStack>
              <AiOutlineMail size={60}/>
              <Text>Gmail</Text>
              </VStack>
          </Card>
        </HStack>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Button size='md' onClick={toggleColorMode} _hover={{size: '5xl'}}>
          {colorMode === "light" ? "Dark Mode" : "Light Mode"}
        </Button>
        <Card padding={5}>
          <VStack>
          <Text fontSize='3xl'>What's the weather like?</Text>
          {weatherData.weather !== undefined ? <>
            <Text>{weatherData.weather[0]?.main}</Text>
            <Text>{weatherData.weather[0]?.description}</Text>
            <Image src={`https://openweathermap.org/img/wn/${weatherData.weather[0]?.icon}@2x.png`}></Image>
            </> : <Text>Weather data not available</Text>
          }
          <IoReload size={20} onClick={() => window.location.reload()}></IoReload>
          </VStack>
        </Card>
        <Button onClick={() => increment()}>Cookie clicker</Button>
        <Text>{count}</Text>
        <ImageComponent src={Resume} title="Resume" description = ""></ImageComponent>
    </VStack>
    </motion.div>
    );
  };
    
  export default Home;