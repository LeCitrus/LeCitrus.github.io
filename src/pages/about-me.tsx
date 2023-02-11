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
        <Box borderRadius='lg' bg="black" w='200px' h='200px' alignItems='center' display='flex'>
          <Text>I am in 3rd year Specialization CS</Text>
        </Box>
      </Center>
    </div>
  </div>
  );
};
  
export default About;