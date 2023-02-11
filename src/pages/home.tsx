import NavBar from '../components/NavBar';
import {Button, useColorMode, ColorModeScript, useTheme, Text, Link} from "@chakra-ui/react";

const Home = () => {

    const {colorMode, toggleColorMode} = useColorMode();
    const theme = useTheme();

    return (
    <div>
    <div className="App">
      <Text bgGradient='radial(#7928CA, #FF0080)'
        bgClip='text'
        fontSize='6xl'
        fontWeight='extrabold'>
        Curtis Kan
      </Text>
      <Link href="https://github.com/LeCitrus">Github</Link>
    </div>
    <div className="Navbar">
      <NavBar/>
    </div>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Button onClick={toggleColorMode}>
      {colorMode === "light" ? "Whimsical" : "Silliness"}
    </Button>
    </div>
    );
  };
    
  export default Home;