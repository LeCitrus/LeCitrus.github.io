import NavBar from '../components/Navbar';
import Eiffel from '../images/eiffel.jpg';
import Spring from '../images/spring.jpg';
import Echidna from '../images/echidna.jpg';

const Hobbies = () => {
    return (
    <div>
      <div className="App">
        <h1>Hobbies</h1>
      </div>
      <div>
        <NavBar/>
      </div>
      <div>
        <img src={Eiffel} alt={'Eiffel Tower'} height={'400px'}/>
        <img src={Spring} alt={'Spring'} height={'400px'}/>
        <img src={Echidna} alt={'Echidna'} height={'400px'}/>
      </div>
    </div>
    );
  };
    
  export default Hobbies;