import NavBar from '../components/NavBar';
import {Button, useColorMode, ColorModeScript, useTheme, Link, Text, VStack} from "@chakra-ui/react";
import Header from '../components/header';

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
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? "Whimsical" : "Silliness"}
        </Button>
    </VStack>
    </div>
    );
  };
    
  export default Home;