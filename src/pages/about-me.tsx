import NavBar from "../components/NavBar";
import Header from "../components/Header";
import SubHeader from "../components/subheader"
import Blog from "../components/Blog"
import {Box, Center, Text} from "@chakra-ui/react";

const startrails = "My latest photography endeavor has been photographing star trails! I've always loved having night scenery desktop backgrounds."

const About = () => {
  return (
  <div>
    <div className="App">
      <Header title="About me"/>
    </div>
    <NavBar/>
    <Center>
      <Box borderRadius='lg' bg="black" p={10}>
        <Text>I am in my 4th year of a Specialization CS degree - Business Minor at the University of Alberta.</Text>
      </Box>
    </Center>
    <SubHeader title="What am I learning right now?"/>
    <Center>
      <Box borderRadius='lg' bg="black" p={10}>
          <ul>
            <li>Mobile app development using <strong>Flutter</strong></li>
            <li>UI/UX Designing using <strong>Figma</strong></li>
            <li>Learning how to handstand!</li>
            <li>Relearning the piano and violin, learning the drums</li>
          </ul>
      </Box>
    </Center>
    <SubHeader title="Blog"/>
    <Blog title="Startrails" content={startrails}></Blog>
  </div>
  );
};
  
export default About;