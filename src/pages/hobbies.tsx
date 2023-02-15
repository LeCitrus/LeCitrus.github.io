import NavBar from '../components/NavBar';
import Header from '../components/header';
import Origami from '../components/Origami';
import {SimpleGrid, Text, Center, IconButton, Link, Image} from '@chakra-ui/react';
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
import {ArrowDownIcon} from '@chakra-ui/icons';

const Hobbies = () => {
    return (
    <div>
      <div className="App">
        <Header title="Hobbies"/>
      </div>
      <div>
        <NavBar/>
      </div>
      <div>
        <Center>
          <Text fontSize='4xl'>Origami</Text>
        </Center>
        <Center m={5}>
          <Text fontSize='2xl'>"The Japanese art of folding paper into decorative shapes and figures." here are some of my creations!</Text>
        </Center>
        <IconButton
          as={Link}
          variant='outline'
          colorScheme='teal'
          aria-label='Send email'
          icon={<ArrowDownIcon />}
          href='#photography'
        />
        <Center>
          <SimpleGrid columns = {3} spacing = {10}>
            <Origami image_src={Eiffel} title="Eiffel Tower" author="Robin Glynn"/>
            <Origami image_src={Spring} title="Spring" author="Jeff Beynon"/>
            <Origami image_src={Echidna} title="Echidna" author="Steven Casey"/>
            <Origami image_src={Clover} title="Clover Tesselation" author="Shuzo Fujimoto"/>
            <Origami image_src={Hex} title="Hexagonal Tesselation" author="Eric Gjerde"/>
          </SimpleGrid>
        </Center>
        <Center>
          <Text id='photography' fontSize='4xl' mt={10}>Photography</Text>
        </Center>
        <Center>
          <Text fontSize='2xl' m={5}>I like to take pictures of nature sometimes.</Text>
        </Center>
        <Center>
          <SimpleGrid columns = {3} spacing = {10}>
            <Image src={p1}/>
            <Image src={p2}/>
            <Image src={p3}/>
            <Image src={p4}/>
            <Image src={p5}/>
          </SimpleGrid>
        </Center>
      </div>
    </div>
    );
  };
    
  export default Hobbies;