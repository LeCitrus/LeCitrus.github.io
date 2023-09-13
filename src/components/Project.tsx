import  {Center, Text, Card} from "@chakra-ui/react";

/* https://chakra-ui.com/docs/components/popover */

const Project  = ({
    title, link
}) => {

    const handleClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <Card padding={10} borderColor="white" variant="outline" _hover={{bg: 'green'}} onClick={() => handleClick(link)}>
            <Center>
                <Text fontSize='2xl'>
                {title}
                </Text>
            </Center>
        </Card>
    );
};
    
  export default Project;