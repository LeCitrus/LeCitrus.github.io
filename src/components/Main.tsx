import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about-me';
import Hobbies from '../pages/hobbies';
import Projects from '../pages/projects';
import Certifications from '../pages/certifications';
import { AnimatePresence } from 'framer-motion';

const Main = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/about-me' element={<About />} />
        <Route path='/hobbies' element={<Hobbies />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/certifications' element={<Certifications />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Main;