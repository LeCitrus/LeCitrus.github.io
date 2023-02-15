import './App.css';
import Main from './components/Main';
import {Text} from "@chakra-ui/react";


// https://stackoverflow.com/questions/41956465/how-to-create-multiple-page-app-using-react
function App() {

  return (
    <div>
      <Main/>
      <div className="footer">
      <Text>The code for this website is on github.</Text>
      </div>
    </div>
    
  );
}

export default App;
