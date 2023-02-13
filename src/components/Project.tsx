import  {Link, Card, Center} from "@chakra-ui/react";

/* https://chakra-ui.com/docs/components/popover */

const Project  = ({
    title, link
}) => {
    return (
        <Card padding={10} borderColor="white" variant="outline" _hover={{bg: 'green'}}>
            <Center>
                <Link href={link}
                fontSize='2xl'
                target='_blank'>
                {title}
                </Link>
            </Center>
        </Card>
    );
};
    
  export default Project;