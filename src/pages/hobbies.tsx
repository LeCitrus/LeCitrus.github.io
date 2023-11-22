import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Origami from '../components/Origami';
import {Text, VStack, HStack, Box, Link} from '@chakra-ui/react';
import Eiffel from '../images/eiffel.jpg';
import Spring from '../images/spring.jpg';
import Echidna from '../images/echidna.jpg';
import Clover from '../images/clover top.jpg';
import Jellyfish from '../images/jellyfish.jpg';
import Hex from '../images/hex top.jpg';
import p1 from '../images/photo1.jpg';
import p2 from '../images/photo2.jpg';
import p3 from '../images/photo3.jpg';
import p4 from '../images/photo4.jpg';
import p5 from '../images/photo5.jpg';
import p6 from '../images/photo6.jpg';
import p7 from '../images/photo7.jpg';
import p8 from '../images/photo8.jpg';
import p9 from '../images/photo9.jpg';
import p10 from '../images/photo10.jpg';
import p11 from '../images/photo11.jpg';
import p12 from '../images/photo12.jpg';
import p13 from '../images/photo13.jpg';
import ImageComponent from '../components/ImageComponent';
import { motion } from 'framer-motion';
import origami_video from '../videos/origami4.mp4';
import lapse from '../videos/lapse.mp4';
import startrails from '../videos/startrails3.mp4';


const Hobbies = () => {

    function scroll(element: any) {
      document.getElementById(element)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }


    return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className="App">
        <Header title="Hobbies"/>
      </div>
      <div style={{overflow: 'hidden'}}>
        <NavBar/>
      <VStack alignItems="left" >
      <Text onClick={() => scroll('origami')} fontSize={22}  _hover={{color: 'red', transform: 'translateX(15px)',
    transitionDuration: '0.3s',
    transitionTimingFunction: "ease-in-out"}}>Origami</Text>
      <Text onClick={() => scroll('photography')} fontSize={22}  _hover={{color: 'red', transform: 'translateX(15px)',
    transitionDuration: '0.3s',
    transitionTimingFunction: "ease-in-out"}}>Photography</Text>
      </VStack>
      <div>
        <VStack>
          <Text fontSize='4xl' id="origami">Origami</Text>
          <Text fontSize='2xl' padding="20px">"The Japanese art of folding paper into decorative shapes and figures." here are some of my creations!</Text>
          <Link href='https://www.youtube.com/channel/UCRbbpFVTDU-a4ebJ9rgK6Mw' isExternal={true}>Check out my youtube!</Link>
          <video width="200" controls src={origami_video}/>
          <HStack spacing='15px' margin='5px' alignItems="top">
            <VStack>
              <Origami image_src={Eiffel} title="Eiffel Tower" author="Robin Glynn" description="Folded with 30x30cm tissue foil paper"/>
              <Origami image_src={Spring} title="Spring" author="Jeff Beynon" description="Folded with printer paper"/>
            </VStack>
            <VStack>
              <Origami image_src={Echidna} title="Echidna" author="Steven Casey" description="Folded with 30x30cm tissue foil paper"/>
              <Origami image_src={Clover} title="Clover Tesselation" author="Shuzo Fujimoto" description="Folded with 30x30 tissue foil paper"/>
            </VStack>
            <VStack>
              <Origami image_src={Hex} title="Hexagonal Tesselation" author="Eric Gjerde" description="Folded with 25x25 kami paper"/>
              <Origami image_src={Jellyfish} title="Jellyfish" author="Chris Heynen" description="Folded with 30x30cm tissue foil paper"/>
            </VStack>
            </HStack>
        </VStack>
        <VStack>
          <Box bg="white" width="1000px" height='2px' margin='10'/>
          <Text id='photography' fontSize='4xl' mt={10}>Photography</Text>
          <Text fontSize='2xl' padding='20px'>I like to take pictures sometimes!</Text>
          <HStack spacing='15px' margin="5px" alignItems="top">
            <VStack>
              <ImageComponent src={p1} title="Rock Stack" description="Taken in panorama resort"/>
              <ImageComponent src={p2} title="River" description="Experimenting with low shots"/>
              <ImageComponent src={p3} title="Water" description="Experimenting with fast shutter speed"/>
              <ImageComponent src={p10} title="Birthday Aurora 1" description="Taken 2023-05-06"/>
              <ImageComponent src={p12} title="Midnight Fog" description="Taken 2023-11-05"/>
              <video controls src={lapse}/>
            </VStack>
            <VStack>
              <ImageComponent src={p4} title="Fog" description="Mountain fog after rain"/>
              <ImageComponent src={p5} title="Flowing Water" description="Experimenting with long exposure"/>
              <ImageComponent src={p9} title="Birthday Aurora 2" description="Taken 2023-05-06"/>
              <ImageComponent src={p13} title="Midnight Fog 2" description="Taken 2023-11-05"/>
            </VStack>
            <VStack>
              <ImageComponent src={p6} title="Star Trails" description="Experimenting with image layering"/>
              <ImageComponent src={p7} title="Star Trails 2" description="Added a lil crane :)"/>
              <ImageComponent src={p8} title="Aurora 2" description="Taken 2023-09-18"/>
              <ImageComponent src={p11} title="Aurora 3" description="Taken 2023-09-18"/>
              <video controls src={startrails}/>
            </VStack>
          </HStack>
        </VStack>
      </div>
    </div>
    </motion.div>
    );
  };
    
  export default Hobbies;