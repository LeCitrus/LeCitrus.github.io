import './App.css';
import Main from './components/Main';
import { Link } from '@chakra-ui/react';
import {StarIcon} from '@chakra-ui/icons';


// https://stackoverflow.com/questions/41956465/how-to-create-multiple-page-app-using-react
function App() {

  return (
    <div>
      <Main/>
      <div className="footer">
      <Link href="https://github.com/LeCitrus/LeCitrus.github.io" isExternal><StarIcon/>The code for this website is on Github. <StarIcon/></Link>
      </div>
    </div>
    
  );
}

export default App;
