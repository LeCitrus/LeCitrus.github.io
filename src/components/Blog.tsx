import  {Text, Center, Card, useColorMode} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import {useState} from 'react';



/* https://chakra-ui.com/docs/components/popover */

const Blog  = ({
    title, content, date
}) => {
    const { colorMode } = useColorMode();
    const [expand, toggleExpand] = useState(false);

    const handleClick = () => {
        toggleExpand(!expand);
    };

    return (
        <Center>
            <Card borderRadius='lg' p={10} width={1000} m={5} variant="outline" borderColor={colorMode === 'dark'? 'white' : 'black'}>
                <Text fontSize={40}>{title}</Text>
                <Text fontSize={15}>Posted on {date}</Text>
                <Text fontSize={20} padding={5}>{expand ? content : content.substring(0, 50) + '...'}</Text>
                <Center>
                    { expand ? 
                    <FaChevronUp size={25} onClick={() => handleClick()}/> : 
                    <FaChevronDown size={25} onClick={() => handleClick()}/>
                    }  
                </Center>    
            </Card>
        </Center>
    );
};
    
export default Blog;