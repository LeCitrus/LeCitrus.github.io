import NavBar from "../components/NavBar";
import Header from "../components/Header";
import SubHeader from "../components/subheader"
import Blog from "../components/Blog"
import {Card, Center, Text} from "@chakra-ui/react";
import HandStand from "../components/Handstand";
import { motion } from 'framer-motion';

const startrails = `My latest photography focus has been photographing star trails! I've always loved having night scenery desktop backgrounds.
I don't have any of those huge chonker cameras, but I found some tutorials on YouTube to film using a GoPro 10, which I had gotten
recently. There are 2 modes offered: video and photo mode. The first night I experimented using video mode, which gave me a smooth
nightlapse of the night sky, but it was pretty boring. No shooting stars or anything, just clouds and stars slowly moving by. What I was
really shooting for was those cool star trails you see online. For that, I would need photo mode. It's like video mode, except instead of the output
being 1 video, it gave me 1 photo every minute. I left it out for the whole night and it gave me over 200 photos. Then, using a free software called
StarStax, I overlayed all the photos into 1 photo, giving me the amazing photos in my photography section! I was surprised at how well it came out.
Anyways, here is what I learned from my 4 days of filmin' stars: `

const housecleaning = `I was jobless and sad in the Summer of 2023, so I decided to take on a doomed task: 
cleaning my basement. Asian household basements are like Smaug's lair, except everything is mostly musty cardboard boxes,
expired hand sanitizer, and ancient relics. You would think cleaning is just tedious and that there is no skill involved, but
after 3 months of suffering, I beg to differ. There is an art to house cleaning. The urge to clean my basement started when
I was trying to handstand surrounded by old furniture. I ended up smashing my toe into the corner of a couch. 
My first thought when it came to cleaning was get rid of everything that we don't use. It's literally impossible to "clean" 
when there is no space to reorganize things. Unfortunately, this is not my basement, this is OUR basement (our being my family). `


const About = () => {
  return (
  <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
    <div className="App">
      <Header title="About me"/>
    </div>
    <NavBar/>
    <Center>
      <Card borderRadius='lg' bg="black" p={10} borderColor="white" variant="outline">
        <Text>I am in my 4th year of a Specialization CS degree - Business Minor at the University of Alberta.</Text>
      </Card>
    </Center>
    <SubHeader title="What am I learning right now?"/>
    <Center>
      <Card borderRadius='lg' bg="black" p={10} borderColor="white" variant="outline">
          <ul>
            <li>Mobile app development using <strong>Flutter</strong></li>
            <li>UI/UX Designing using <strong>Figma</strong></li>
            <li>Learning how to handstand! <HandStand/></li>
            <li>Relearning the piano and violin, learning the drums</li>
          </ul>
      </Card>
    </Center>
    <SubHeader title="Blog"/>
    <Blog title="Startrails" content={startrails}></Blog>
    <Blog title="House cleaning" content={housecleaning}></Blog>
  </motion.div>
  );
};
  
export default About;