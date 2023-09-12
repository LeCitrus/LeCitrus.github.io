import NavBar from '../components/NavBar';
import {Button, useColorMode, ColorModeScript, useTheme, Link, Text, VStack, Image} from "@chakra-ui/react";
import Header from '../components/Header';
import Resume from '../images/resume.jpg';
import {useState, useEffect} from 'react';

const Home = () => {

    const {colorMode, toggleColorMode} = useColorMode();
    const theme = useTheme();
    const [count, setCount] = useState(0);

    useEffect(() => {
      const initialValue = localStorage.getItem("count");
      if (initialValue) setCount(Number(initialValue));
    }, []);

    function increment() {
      setCount(prev_count => {
        const newCount = prev_count + 1;
        localStorage.setItem("count", String(newCount));
        return newCount;
      });

    }
    
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
        <Button onClick={() => increment()}>Cookie clicker</Button>
        <Text>{count}</Text>
        <Image src={Resume} htmlWidth='800px' p={10}></Image>
    </VStack>
    <div className="footer">
      <Text>The code for this website is on github.</Text>
    </div>
    </div>
    );
  };
    
  export default Home;