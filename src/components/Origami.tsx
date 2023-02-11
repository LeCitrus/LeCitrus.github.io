import {Image, Text, Card, Center} from "@chakra-ui/react";

const Origami = ({
    title, image_src, author
}) => {
    return (
        <Card padding={10} borderColor="white" variant="outline">
            <Center>
                <Image src={image_src} boxSize='300px' borderRadius='10px'></Image>
            </Center>
            <Center>
                <Text
                fontSize='2xl'>
                {title}
                </Text>
            </Center>
            <Center>
                <Text fontSize='s'>Designed by: {author}</Text>
            </Center>
            
        </Card>
    );
};
export default Origami;