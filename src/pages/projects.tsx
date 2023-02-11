import NavBar from "../components/NavBar";
import {Text} from "@chakra-ui/react";

const Projects = () => {
  return (
  <div>
    <div className="App">
    <Text bgGradient='radial(#7928CA, #FF0080)'
        bgClip='text'
        fontSize='6xl'
        fontWeight='extrabold'>
        Projects
      </Text>
    </div>
    <div>
      <NavBar/>
      <p> This website XD</p>
    </div>
  </div>
  );
};
  
export default Projects;