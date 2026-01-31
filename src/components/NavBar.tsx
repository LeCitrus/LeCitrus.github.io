import { Box, Link, Center } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";

const NavBar = () => {
  const { colorMode } = useColorMode();

  const gradient =
    colorMode === "dark"
      ? "linear(to-b, #00000F, #0000EB)"
      : "linear(to-b, #E8E8E8, #A9A9A9)";

  const linkHoverStyles = {
    color: "black",
    transform: "translateY(-5px)",
    transition: "all 0.5s ease-in-out",
  };

  return (
    <Center>
      <Box
        bgGradient={gradient}
        width="100%"
        fontSize="2xl"
        px={200}
        py={5}
        my={5}
        display="flex"
        justifyContent="space-between"
      >
        <Link
          as={ReachLink}
          to="/"
          fontWeight="bold"
          textDecoration="none"
          _hover={linkHoverStyles}
        >
          LeCitrus
        </Link>

        <Link
          as={ReachLink}
          to="/certifications"
          fontWeight="bold"
          textDecoration="none"
          _hover={linkHoverStyles}
        >
          Certifications
        </Link>

        <Link
          as={ReachLink}
          to="/about-me"
          fontWeight="bold"
          textDecoration="none"
          _hover={linkHoverStyles}
        >
          About me
        </Link>

        <Link
          as={ReachLink}
          to="/projects"
          fontWeight="bold"
          textDecoration="none"
          _hover={linkHoverStyles}
        >
          Projects
        </Link>

        <Link
          as={ReachLink}
          to="/hobbies"
          fontWeight="bold"
          textDecoration="none"
          _hover={linkHoverStyles}
        >
          Hobbies
        </Link>
      </Box>
    </Center>
  );
};

export default NavBar;
