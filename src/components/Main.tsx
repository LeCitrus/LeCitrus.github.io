import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about-me';
import Hobbies from '../pages/hobbies';
import Projects from '../pages/projects';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about-me' element={<About/>}></Route>
      <Route path='/hobbies' element={<Hobbies/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
    </Routes>
  );
}

export default Main;