import  {Link, Card, Center} from "@chakra-ui/react";


const Project  = ({
    title, link
}) => {
    return (
        <Card padding={10} borderColor="white" variant="outline">
            <Center>
                <Link href={link}
                fontSize='2xl'>
                {title}
                </Link>
            </Center>
        </Card>
    );
};
    
  export default Project;