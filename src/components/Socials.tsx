import { Card, Text, VStack } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { ReactElement } from "react";

interface Props {
  icon: ReactElement;
  label: string;
  link: string;
  onClick: (url: string) => void;
}

const SocialCard = ({ icon, label, link, onClick }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Card
      padding={8}
      borderColor={colorMode === "dark" ? "white" : "black"}
      variant="outline"
      transition="all 0.2s ease-in-out"
      _hover={{bg: colorMode === 'dark'? 'green' : 'gray' , transform: "translateY(-4px)", cursor: "pointer"}}
      onClick={() => onClick(link)}
    >
      <VStack spacing={3}>
        {icon}
        <Text>{label}</Text>
      </VStack>
    </Card>
  );
};

export default SocialCard;