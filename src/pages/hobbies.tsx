import NavBar from '../components/NavBar';
import Eiffel from '../images/eiffel.jpg';
import Spring from '../images/spring.jpg';
import Echidna from '../images/echidna.jpg';
import {Text} from "@chakra-ui/react";

const Hobbies = () => {
    return (
    <div>
      <div className="App">
        <Text bgGradient='radial(#7928CA, #FF0080)'
          bgClip='text'
          fontSize='6xl'
          fontWeight='extrabold'>
          Hobbies
      </Text>
      </div>
      <div>
        <NavBar/>
      </div>
      <div>
        <img src={Eiffel} alt={'Eiffel Tower'} height={'100px'}/>
        <img src={Spring} alt={'Spring'} height={'100px'}/>
        <img src={Echidna} alt={'Echidna'} height={'100px'}/>
      </div>
    </div>
    );
  };
    
  export default Hobbies;