import NavBar from '../components/NavBar';
import Eiffel from '../images/eiffel.jpg';
import Spring from '../images/spring.jpg';
import Echidna from '../images/echidna.jpg';
import Header from '../components/header';

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
        <img src={Eiffel} alt={'Eiffel Tower'} height={'100px'}/>
        <img src={Spring} alt={'Spring'} height={'100px'}/>
        <img src={Echidna} alt={'Echidna'} height={'100px'}/>
      </div>
    </div>
    );
  };
    
  export default Hobbies;