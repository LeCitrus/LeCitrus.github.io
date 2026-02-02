import  {Text, Center, Card} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import {useState} from 'react';

/* https://chakra-ui.com/docs/components/popover */

const Blog  = ({
    title, content, color, date
}) => {
    const [expand, toggleExpand] = useState(false);

    const handleClick = () => {
        toggleExpand(!expand);
    };

    return (
        <Center>
            <Card borderRadius='lg' bg={color} p={10} width={1000} m={5} borderColor={color === 'white' ? 'black' : 'white'} variant="outline">
                <Text fontSize={40}>{title}</Text>
                <Text fontSize={15} color={color === 'white' ? 'gray.600' : 'gray.400'}>Posted on {date}</Text>
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