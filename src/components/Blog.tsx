import  {Text, Center, Box} from "@chakra-ui/react";

/* https://chakra-ui.com/docs/components/popover */

const SubHeader  = ({
    title, content
}) => {
    return (
        <Center>
            <Box borderRadius='lg' bg="black" p={10} maxWidth={1000}>
                <Text fontSize={35}>{title}</Text>
                <Text>{content}</Text>
            </Box>
        </Center>
    );
};
    
export default SubHeader;