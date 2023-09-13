import {Text, Card} from "@chakra-ui/react";
import ImageComponent from "./ImageComponent";

const Origami = ({
    title, image_src, author
}) => {
    return (
        <Card padding={10} borderColor="white" variant="outline" alignItems="center">
        <ImageComponent src={image_src} title={title}></ImageComponent>
        <Text
        fontSize='2xl'>
        {title}
        </Text>
        <Text fontSize='s'>Designed by: {author}</Text> 
        </Card>
    );
};
export default Origami;