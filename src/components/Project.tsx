import  {Center, Text, Card, VStack, HStack} from "@chakra-ui/react";
import  {useColorMode} from "@chakra-ui/react";

/* https://chakra-ui.com/docs/components/popover */

const Project  = ({
    title, link, description, skills = []
}) => {
    const {colorMode, toggleColorMode} = useColorMode();
    const handleClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <Card padding={6} borderColor={colorMode === 'dark'? 'white' : 'black'} variant="outline" _hover={{bg: colorMode === 'dark'? 'green' : 'gray'}} onClick={() => handleClick(link)}>
            <Center>
                <VStack>
                <Text fontSize='3xl' fontWeight='bold'>
                {title}
                </Text>
                <Text fontSize='md'>{description}</Text>
                <HStack padding={2}>
                {skills.map((skill) => (<Card padding={2} key={skill}><Text fontSize='xs'>{skill}</Text></Card>))}
                </HStack>
                </VStack>
            </Center>
        </Card>
    );
};
    
  export default Project;