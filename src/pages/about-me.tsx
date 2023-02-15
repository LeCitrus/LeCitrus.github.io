import NavBar from "../components/NavBar";
import Header from "../components/header";
import {Box, Center, Text} from "@chakra-ui/react";

const About = () => {
  return (
  <div>
    <div className="App">
      <Header title="About me"/>
    </div>
    <div>
      <NavBar/>
    </div>
    <div>
      <Center>
        <Box borderRadius='lg' bg="black" p={10}>
          <Text>I am in my 3rd year of a Specialization CS degree at the University of Alberta</Text>
          <Text>I love to learn new things! Currently I am learning how to handstand.</Text>
        </Box>
      </Center>
    </div>
    <div>
        <Center>
          <Text>The code for this website is on github.</Text>
        </Center>
      </div>
  </div>
  );
};
  
export default About;