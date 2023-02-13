import NavBar from "../components/NavBar";
import Header from "../components/header";
import Project from "../components/Project";
import { SimpleGrid, Center} from "@chakra-ui/react";

const Projects = () => {
  return (
  <div>
    <div className="App">
      <Header title="Projects"/>
    </div>
    <div>
      <NavBar/>
      <Center>
        <SimpleGrid columns = {3} spacing = {10}>
          <Project title="Imposter Detector" link="https://imposter-detector.vercel.app/"/>
          <Project title="Math GPT" link="https://arithme.tech/"/>
          <Project title="Lost and Coffee (repo)" link="https://github.com/LeCitrus/Lost-and-Coffee"/>
        </SimpleGrid>
      </Center>
    </div>
  </div>
  );
};
  
export default Projects;