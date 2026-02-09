import { Text, Card } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import ImageComponent from "./ImageComponent";

const Origami = ({
  title,
  image_src,
  author,
  description,
}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Card
      padding={10}
      borderColor={colorMode === "dark" ? "white" : "black"}
      variant="outline"
      alignItems="center"
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: "scale(1.02)" }}
    >
      <ImageComponent
        src={image_src}
        title={title}
        description={description}
      />

      <Text fontSize="2xl">
        {title}
      </Text>

      <Text fontSize="s">
        Designed by: {author}
      </Text>
    </Card>
  );
};

export default Origami;