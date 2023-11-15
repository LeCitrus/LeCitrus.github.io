import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Project from "../components/Project";
import { SimpleGrid, Text, VStack, Box} from "@chakra-ui/react";
import { motion } from 'framer-motion';

const Projects = () => {

  function scroll(element: any) {
    document.getElementById(element).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  return (
  <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
    <div className="App">
      <Header title="Projects"/>
    </div>
    <div style={{overflow: 'hidden'}}>
      <NavBar/>
      <VStack alignItems="left">
      <Text onClick={() => scroll('hackathon')} fontSize={22} _hover={{color: 'red', transform: 'translateX(15px)',
    transitionDuration: '0.3s',
    transitionTimingFunction: "ease-in-out"}}>Hackathon Projects</Text>
      <Text onClick={() => scroll('course')} fontSize={22} _hover={{color: 'red', transform: 'translateX(15px)',
    transitionDuration: '0.3s',
    transitionTimingFunction: "ease-in-out"}}>Course Projects</Text>
      <Text onClick={() => scroll('personal')} fontSize={22}  _hover={{color: 'red', transform: 'translateX(15px)',
    transitionDuration: '0.3s',
    transitionTimingFunction: "ease-in-out"}}>Personal Projects</Text>
      </VStack>
      <VStack>
        <Text fontSize='5xl' m={5} id="hackathon">Hackathon Projects</Text>
        <SimpleGrid columns = {3} spacing = {10} paddingBottom='10'>
          <Project title="Imposter Detector" link="https://imposter-detector.vercel.app/" description="modifies sound files to inject vine boom sound effects" skills={['react', 'chakra-ui', 'mp3']}/>
          <Project title="Math GPT" link="https://arithme.tech/" description="reads latex equations and uses GPT to return the solution" skills={['react', 'api', 'chakra-ui']} />
          <Project title="Lost and Coffee (repo)" link="https://github.com/LeCitrus/Lost-and-Coffee" description="submission for GameJam 2021" skills={['gamemaker']}/>
        </SimpleGrid>
        <Box bg="white" width="1000px" height='2px' margin='10px'/>
        <Text fontSize='5xl' m={5} id="course">Course projects</Text>
        <SimpleGrid columns = {2} spacing = {10} paddingBottom='10'>
          <Project title="AndroidImpact (repo)" link="https://github.com/CMPUT301F22T08/AndroidImpact" description="foodstuffs tracking app" skills={['agile', 'android', 'java']}/>
          <Project title="Movie Database With Pymongo (repo)" link="https://github.com/LeCitrus/CMPUT291-Mini-Project-2" description="movie search using pymongo" skills={['pymongo']}/>
        </SimpleGrid>
        <Box bg="white" width="1000px" height='2px' margin='10'/>
        <Text fontSize='5xl' m={5} id="personal">Personal projects</Text>
        <SimpleGrid columns = {2} spacing = {10}>
          <Project title="Fish Game (repo)" link="https://github.com/LeCitrus/Fish-Game-JS" description="replication of rowing machine fish game" skills={['javascript', 'html']}/>
          <Project title="Exercise Tracker (repo)" link="https://github.com/LeCitrus/Exercise-Tracker" description="mobile app to track exercises" skills={['flutter']}/>
        </SimpleGrid>
      </VStack>
    </div>
  </motion.div>
  );
};
  
export default Projects;