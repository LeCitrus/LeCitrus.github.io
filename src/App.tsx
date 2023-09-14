import './App.css';
import Main from './components/Main';
import { Link,  IconButton, Card} from '@chakra-ui/react';
import {StarIcon, ArrowUpIcon} from '@chakra-ui/icons';
import { wrap } from 'module';


// https://stackoverflow.com/questions/41956465/how-to-create-multiple-page-app-using-react
function App() {

  return (
    <div>
      <Main/>
      <div className="top">
      <IconButton
        colorScheme='teal'
        aria-label=''
        icon={<ArrowUpIcon/>}
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      />
      </div>
      <div className="footer">
      <Card padding="10px">
        <Link href="https://github.com/LeCitrus/LeCitrus.github.io" isExternal><StarIcon/>The code for this website is on Github. <StarIcon/></Link>
      </Card>
      </div>
    </div>
    
  );
}

export default App;
