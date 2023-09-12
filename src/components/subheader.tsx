import  {Text, Center} from "@chakra-ui/react";

/* https://chakra-ui.com/docs/components/popover */

const SubHeader  = ({
    title
}) => {
    return (
        <div>
            <Center marginTop="50">
                <Text fontSize={50}>{title}</Text>
            </Center>
        </div>
    );
};
    
export default SubHeader;