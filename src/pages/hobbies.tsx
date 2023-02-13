import NavBar from '../components/NavBar';
import Header from '../components/header';
import Origami from '../components/Origami';
import {SimpleGrid, Text, Center, IconButton, Link} from '@chakra-ui/react';
import Eiffel from '../images/eiffel.jpg';
import Spring from '../images/spring.jpg';
import Echidna from '../images/echidna.jpg';
import Clover from '../images/clover top.jpg';
import Hex from '../images/hex top.jpg';
import {ArrowDownIcon, Icon} from '@chakra-ui/icons';

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
          <Text id='photography' fontSize='4xl' m={10}>Photography</Text>
        </Center>
      </div>
    </div>
    );
  };
    
  export default Hobbies;