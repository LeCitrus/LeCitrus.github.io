import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Project from "../components/Project";
import { SimpleGrid, Text, VStack, Link, Box} from "@chakra-ui/react";

const Projects = () => {
  return (
  <div>
    <div className="App">
      <Header title="Projects"/>
    </div>
    <div>
      <NavBar/>
      <VStack alignItems="left" >
        <Link href="#hackathon" fontSize={22}>Hackathon Projects</Link>
        <Link href="#course" fontSize={22}>Course Projects</Link>
        <Link href="#personal" fontSize={22}>Personal projects</Link>
      </VStack>
      <VStack>
        <Text fontSize='5xl' m={5} id="hackathon">Hackathon Projects</Text>
        <SimpleGrid columns = {3} spacing = {10} paddingBottom='10'>
          <Project title="Imposter Detector" link="https://imposter-detector.vercel.app/"/>
          <Project title="Math GPT" link="https://arithme.tech/"/>
          <Project title="Lost and Coffee (repo)" link="https://github.com/LeCitrus/Lost-and-Coffee"/>
        </SimpleGrid>
        <Box bg="white" width="1000px" height='2px' margin='10px'/>
        <Text fontSize='5xl' m={5} id="course">Course projects</Text>
        <SimpleGrid columns = {2} spacing = {10} paddingBottom='10'>
          <Project title="AndroidImpact (repo)" link="https://github.com/CMPUT301F22T08/AndroidImpact"/>
          <Project title="Movie Database With Pymongo (repo)" link="https://github.com/LeCitrus/CMPUT291-Mini-Project-2"/>
        </SimpleGrid>
        <Box bg="white" width="1000px" height='2px' margin='10'/>
        <Text fontSize='5xl' m={5} id="personal">Personal projects</Text>
        <SimpleGrid columns = {2} spacing = {10}>
          <Project title="Fish Game (JS)" link="https://github.com/LeCitrus/Fish-Game-JS"/>
          <Project title="Exercise Tracker" link="https://github.com/LeCitrus/Exercise-Tracker"/>
        </SimpleGrid>
      </VStack>
    </div>
  </div>
  );
};
  
export default Projects;