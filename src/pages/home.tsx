import NavBar from '../components/NavBar';
import {Button, useColorMode, ColorModeScript, useTheme, Link} from "@chakra-ui/react";
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
    <Link href="https://github.com/LeCitrus">Github</Link>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Button onClick={toggleColorMode}>
      {colorMode === "light" ? "Whimsical" : "Silliness"}
    </Button>
    </div>
    );
  };
    
  export default Home;