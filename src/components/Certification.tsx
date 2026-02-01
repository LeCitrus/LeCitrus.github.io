import { Card, Text, VStack } from "@chakra-ui/react";
import  {useColorMode} from "@chakra-ui/react";


const CertificationCard = ({ title, date, link, description }) => {

  const {colorMode, toggleColorMode} = useColorMode();
  const handleClick = (url) => {
      window.open(url, "_blank");
  };

  return (
    <Card
      p={6}
      borderColor={colorMode === 'dark'? 'white' : 'black'}
      variant="outline"
      transition="all 0.3s ease-in-out"
      _hover={{bg: colorMode === 'dark'? 'green' : 'gray' , transform: "translateY(-4px)", cursor: "pointer"}}
      onClick={() => handleClick(link)}
    >
      <VStack align="start" spacing={2}>
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="sm">{date}</Text>
        <Text fontSize="md">{description}</Text>
      </VStack>
    </Card>
  );
};

export default CertificationCard;