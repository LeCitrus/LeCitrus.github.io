import NavBar from '../components/NavBar';
import Header from '../components/header';
import Origami from '../components/Origami';
import {SimpleGrid, Text, Center} from '@chakra-ui/react';
import Eiffel from '../images/eiffel.jpg';
import Spring from '../images/spring.jpg';
import Echidna from '../images/echidna.jpg';
import Clover from '../images/clover top.jpg';
import Hex from '../images/hex top.jpg';

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
        <Center>
          <SimpleGrid columns = {3} spacing = {10}>
            <Origami image_src={Eiffel} title="Eiffel Tower" author="Robin Glynn"/>
            <Origami image_src={Spring} title="Spring" author="Jeff Beynon"/>
            <Origami image_src={Echidna} title="Echidna" author="Steven Casey"/>
            <Origami image_src={Clover} title="Clover Tesselation" author="Shuzo Fujimoto"/>
            <Origami image_src={Hex} title="Hexagonal Tesselation" author="Eric Gjerde"/>
          </SimpleGrid>
        </Center>
      </div>
    </div>
    );
  };
    
  export default Hobbies;