import NavBar from "../components/NavBar";
import {Text} from "@chakra-ui/react";

const About = () => {
  return (
  <div>
    <div className="App">
    <Text bgGradient='radial(#7928CA, #FF0080)'
        bgClip='text'
        fontSize='6xl'
        fontWeight='extrabold'>
        About me
    </Text>
    </div>
    <div>
      <NavBar/>
    </div>
  </div>
  );
};
  
export default About;