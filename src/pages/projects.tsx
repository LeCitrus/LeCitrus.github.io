import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Project from "../components/Project";
import { SimpleGrid, Text, VStack, Box} from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { projects, ProjectCategory } from "../data/projects";


const Projects = () => {

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
  
   const renderProjects = (
    category: ProjectCategory,
    columns: number
  ) => (
    <SimpleGrid columns={columns} spacing={10} pb={10}>
      {projects
        .filter((project) => project.category === category)
        .map((project) => (
          <Project key={project.title} {...project} />
        ))}
    </SimpleGrid>
  );

  return (
  <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
    <div className="App">
      <Header title="Projects"/>
    </div>
    <div style={{overflow: 'hidden'}}>
      <NavBar/>
      <VStack align="start" px={{ base: 6, md: 24 }} spacing={6} mt={6}>

        {/* Quick scroll navigation */}
        <VStack align="start" spacing={2}>
          {["hackathon", "course", "personal"].map((category) => (
            <Text
              key={category}
              fontSize={22}
              cursor="pointer"
              _hover={{
                color: "red",
                transform: "translateX(15px)",
                transition: "0.3s ease-in-out",
              }}
              onClick={() => scrollTo(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)} Projects
            </Text>
          ))}
        </VStack>

        {/* Sections */}
        <Box id="hackathon" pt={10} w="100%">
          <Text fontSize="4xl" mb={6}>
            Hackathon Projects
          </Text>
          {renderProjects("hackathon", 3)}
        </Box>

        <Box id="course" pt={10} w="100%">
          <Text fontSize="4xl" mb={6}>
            Course Projects
          </Text>
          {renderProjects("course", 2)}
        </Box>

        <Box id="personal" pt={10} w="100%">
          <Text fontSize="4xl" mb={6}>
            Personal Projects
          </Text>
          {renderProjects("personal", 2)}
        </Box>
      </VStack>
    </div>
  </motion.div>
  );
};
  
export default Projects;