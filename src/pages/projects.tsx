import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Project from "../components/Project";
import { SimpleGrid, Center, Text} from "@chakra-ui/react";

const Projects = () => {
  return (
  <div>
    <div className="App">
      <Header title="Projects"/>
    </div>
    <div>
      <NavBar/>
      <Center>
        <Text fontSize='5xl' m={5}>Hackathon Projects</Text>
      </Center>
      <Center>
        <SimpleGrid columns = {3} spacing = {10}>
          <Project title="Imposter Detector" link="https://imposter-detector.vercel.app/"/>
          <Project title="Math GPT" link="https://arithme.tech/"/>
          <Project title="Lost and Coffee (repo)" link="https://github.com/LeCitrus/Lost-and-Coffee"/>
        </SimpleGrid>
      </Center>
      <Center>
        <Text fontSize='5xl' m={5}>Course projects</Text>
      </Center>
      <Center>
        <SimpleGrid columns = {2} spacing = {10}>
          <Project title="AndroidImpact (repo)" link="https://github.com/CMPUT301F22T08/AndroidImpact"/>
          <Project title="Movie Database With Pymongo (repo)" link="https://github.com/LeCitrus/CMPUT291-Mini-Project-2"/>
        </SimpleGrid>
      </Center>
      <Center>
        <Text fontSize='5xl' m={5}>Personal projects</Text>
      </Center>
      <Center>
        <SimpleGrid columns = {1} spacing = {10}>
          <Project title="Fish Game (JS)" link="https://github.com/LeCitrus/Fish-Game-JS"/>
        </SimpleGrid>
      </Center>
    </div>
  </div>
  );
};
  
export default Projects;