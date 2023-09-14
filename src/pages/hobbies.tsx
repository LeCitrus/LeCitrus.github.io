import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Origami from '../components/Origami';
import {SimpleGrid, Text, Center, Link, VStack, HStack} from '@chakra-ui/react';
import Eiffel from '../images/eiffel.jpg';
import Spring from '../images/spring.jpg';
import Echidna from '../images/echidna.jpg';
import Clover from '../images/clover top.jpg';
import Hex from '../images/hex top.jpg';
import p1 from '../images/photo1.jpg';
import p2 from '../images/photo2.jpg';
import p3 from '../images/photo3.jpg';
import p4 from '../images/photo4.jpg';
import p5 from '../images/photo5.jpg';
import p6 from '../images/photo6.jpg';
import p7 from '../images/photo7.jpg';
import ImageComponent from '../components/ImageComponent';

const Hobbies = () => {

    return (
    <div>
      <div className="App">
        <Header title="Hobbies"/>
      </div>
      <div>
        <NavBar/>
      </div>
      <VStack alignItems="left" >
      <Link href="#origami" fontSize={22}>Origami</Link>
      <Link href="#photography" fontSize={22}>Photography</Link>
      </VStack>
      <div>
        <Center>
          <Text fontSize='4xl' id="origami">Origami</Text>
        </Center>
        <Center m={5}>
          <Text fontSize='2xl'>"The Japanese art of folding paper into decorative shapes and figures." here are some of my creations!</Text>
        </Center>
        <Center>
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
            </VStack>
            </HStack>
        </Center>
        <Center>
          <Text id='photography' fontSize='4xl' mt={10}>Photography</Text>
        </Center>
        <Center>
          <Text fontSize='2xl' m={5}>I like to take pictures sometimes!</Text>
        </Center>
        <Center>
          <HStack spacing='15px' margin="5px" alignItems="top">
            <VStack>
              <ImageComponent src={p1} title="Rock Stack" description="Taken in panorama resort"/>
              <ImageComponent src={p2} title="River" description="Experimenting with low shots"/>
              <ImageComponent src={p3} title="Water" description="Experimenting with fast shutter speed"/>
            </VStack>
            <VStack>
              <ImageComponent src={p4} title="Fog" description="Mountain fog after rain"/>
              <ImageComponent src={p5} title="Flowing Water" description="Experimenting with long exposure"/>
            </VStack>
            <VStack>
              <ImageComponent src={p6} title="Star Trails" description="Experimenting with image layering"/>
              <ImageComponent src={p7} title="Star Trails 2" description="Added a lil crane :)"/>
            </VStack>
          </HStack>
        </Center>
      </div>
    </div>
    );
  };
    
  export default Hobbies;