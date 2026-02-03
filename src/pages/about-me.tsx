import NavBar from "../components/NavBar";
import Header from "../components/Header";
import SubHeader from '../components/subheader';
import Blog from "../components/Blog"
import {Card, Center, Text} from "@chakra-ui/react";
import HandStand from "../components/Handstand";
import { motion } from 'framer-motion';
import { useColorMode } from "@chakra-ui/react"
import { blogPosts } from "../data/blogs";

const About = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
  <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
    <div className="App">
      <Header title="About me"/>
    </div>
    <NavBar/>
    <Center>
      <Card borderRadius='lg' p={10} borderColor={colorMode === "dark" ? "white" : "black"} variant="outline">
        <Text>I completed my Specialization CS degree with a Business Minor at the University of Alberta in 2025.</Text>
      </Card>
    </Center>
    <SubHeader title="What am I learning right now?"/>
    <Center>
      <Card borderRadius='lg' p={10} borderColor={colorMode === "dark" ? "white" : "black"} variant="outline">
          <ul>
            <li>Mobile app development using <strong>Flutter</strong></li>
            <li>UI/UX Designing using <strong>Figma</strong></li>
            <li>Learning how to handstand! <HandStand/></li>
            <li>Relearning the piano and violin, learning the drums</li>
          </ul>
      </Card>
    </Center>
    <SubHeader title="Blog"/>
    {blogPosts.map((post) => (
      <Blog
        key={post.title}
        title={post.title}
        content={post.content}
        date={post.date}
      />
    ))}
   </motion.div>
  );
};
  
export default About;