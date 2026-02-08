import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Origami from '../components/Origami';
import {Text, VStack, HStack, Box, Link} from '@chakra-ui/react';
import { origamiPieces } from '../data/origami';
import { photos, videos} from '../data/photos';
import ImageComponent from '../components/ImageComponent';
import { motion } from 'framer-motion';
import origami_video from '../videos/origami4.mp4';



const Hobbies = () => {

    const scrollTo = (id: string) => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }


    return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className="App">
        <Header title="Hobbies"/>
      </div>
      <div style={{overflow: 'hidden'}}>
        <NavBar/>
        <VStack align="start" px={{ base: 6, md: 24 }} spacing={6} mt={6}>
          
          {/* Quick scroll navigation */}
          <VStack align="start" spacing={2}>
            {["origami", "photography"].map((category) => (
              <Text
                key={category}
                fontSize={22}
                cursor="pointer"
                _hover={{
                  color: "red",
                  transform: "translateX(15px)",
                  transition: "0.3s ease-in-out",
                }}
                onClick={() => scrollTo(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Text>
            ))}
          </VStack>

          {/* Sections */}
          <Box id="origami" pt={10} w="100%">
            <VStack>
              <Text fontSize='4xl'>Origami</Text>
              <Text fontSize='2xl' padding="20px">"The Japanese art of folding paper into decorative shapes and figures." here are some of my creations!</Text>
              <Link href='https://www.youtube.com/channel/UCRbbpFVTDU-a4ebJ9rgK6Mw' isExternal={true}>Check out my youtube!</Link>
              <video width="200" controls src={origami_video}/>
              <HStack spacing="15px" alignItems="top">
                {Array.from({ length: 3 }).map((_, colIndex) => (
                  <VStack key={colIndex}>
                    {origamiPieces
                      .filter((_, i) => i % 3 === colIndex)
                      .map((piece) => (
                        <Origami
                          key={piece.title}
                          image_src={piece.image}
                          title={piece.title}
                          author={piece.author}
                          description={piece.description}
                        />
                      ))}
                  </VStack>
                ))}
              </HStack>
            </VStack>
          </Box>

          <Box id='photography' pt={10} w="100%">
            <VStack>
              <Box bg="white" width="1000px" height='2px' margin='10'/>
              <Text fontSize='4xl' mt={10}>Photography</Text>
              <Text fontSize='2xl' padding='20px'>I like to take pictures sometimes!</Text>
              <Box
                sx={{
                  columnCount: { base: 1, md: 2, lg: 3 },
                  columnGap: '15px',
                }}
              >
                {photos.map((photo) => (
                  <Box
                    key={photo.title}
                    mb="15px"
                    sx={{ breakInside: 'avoid' }}
                  >
                    <ImageComponent
                      src={photo.src}
                      title={photo.title}
                      description={photo.description}
                    />
                  </Box>
                ))}

                {videos.map((src, i) => (
                  <Box
                    key={`video-${i}`}
                    mb="15px"
                    sx={{ breakInside: 'avoid' }}
                  >
                    <video controls src={src} />
                  </Box>
                ))}
              </Box>
            </VStack>
          </Box>
        </VStack>
      </div>
    <Footer />
    </motion.div>
    );
  };
    
  export default Hobbies;