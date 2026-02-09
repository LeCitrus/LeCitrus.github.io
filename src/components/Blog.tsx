import { Text, Center, Card, useColorMode, Box } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);

const Blog = ({
    title, content, date
}) => {
    const { colorMode } = useColorMode();
    const [expand, toggleExpand] = useState(false);

    const handleClick = () => {
        toggleExpand(!expand);
    };

    return (
        <Center>
            <Card 
                borderRadius='lg' 
                p={10} 
                width={1000} 
                m={5} 
                variant="outline" 
                borderColor={colorMode === 'dark'? 'white' : 'black'}
            >
                <Text fontSize={40}>{title}</Text>
                <Text fontSize={15}>Posted on {date}</Text>
                
                <MotionBox
                    initial={false}
                    animate={{
                        height: expand ? 'auto' : '50px',
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.3,
                        ease: 'easeInOut'
                    }}
                    overflow="hidden"
                >
                    <Text fontSize={20} padding={5}>
                        {content}
                    </Text>
                </MotionBox>

                <Center>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ cursor: 'pointer' , marginTop: '15px'}}
                    >
                        {expand ? 
                            <FaChevronUp size={25} onClick={handleClick}/> : 
                            <FaChevronDown size={25} onClick={handleClick}/>
                        }
                    </motion.div>
                </Center>    
            </Card>
        </Center>
    );
};
    
export default Blog;