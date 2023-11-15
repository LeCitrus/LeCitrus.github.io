import {Text, Card, color} from "@chakra-ui/react";
import ImageComponent from "./ImageComponent";
import {useColorMode} from "@chakra-ui/react";

const Origami = ({
    title, image_src, author, description
}) => {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <Card padding={10} borderColor={colorMode === 'dark' ? 'white': 'black'} variant="outline" alignItems="center">
        <ImageComponent src={image_src} title={title} description = {description}></ImageComponent>
        <Text
        fontSize='2xl'>
        {title}
        </Text>
        <Text fontSize='s'>Designed by: {author}</Text> 
        </Card>
    );
};
export default Origami;