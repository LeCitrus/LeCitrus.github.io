import NavBar from '../components/NavBar';
import {Button, useColorMode, ColorModeScript, useTheme, Link, Text, VStack, Image, Center} from "@chakra-ui/react";
import Header from '../components/header';
import Resume from '../images/resume.jpg'

const Home = () => {

    const {colorMode, toggleColorMode} = useColorMode();
    const theme = useTheme();

    return (
    <div>
    <div className="App">
      <Header title="Curtis Kan"/>
    </div>
    <div className="Navbar">
      <NavBar/>
    </div>
    <VStack>
        <Text fontSize='5xl'>Welcome!</Text>
        <Link href="https://github.com/LeCitrus">Github</Link>
        <Link href="https://www.linkedin.com/in/curtis-kan-33446a1b3/">Linkedin</Link>
        <Link href="mailto:curtis.tl.kan@gmail.com">Gmail</Link>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Button size='md' onClick={toggleColorMode} _hover={{size: '5xl'}}>
          {colorMode === "light" ? "Whimsical" : "Silliness"}
        </Button>
        <Image src={Resume} htmlWidth='800px'></Image>
    </VStack>
    <div>
        <Center>
          <Text>The code for this website is on github.</Text>
        </Center>
      </div>
    </div>
    );
  };
    
  export default Home;