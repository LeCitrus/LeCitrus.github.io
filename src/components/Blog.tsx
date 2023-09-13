import  {Text, Center, Card} from "@chakra-ui/react";

/* https://chakra-ui.com/docs/components/popover */

const SubHeader  = ({
    title, content
}) => {
    return (
        <Center>
            <Card borderRadius='lg' bg="black" p={10} width={1000} m={5} borderColor="white" variant="outline">
                <Text fontSize={40}>{title}</Text>
                <Text fontSize={20}>{content}</Text>
            </Card>
        </Center>
    );
};
    
export default SubHeader;