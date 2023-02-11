import {Text} from "@chakra-ui/react";


const Header = ({
    title,
}) => {
    return (
        <Text bgGradient='radial(#ADD8E6, #00008B)'
        bgClip='text'
        fontSize='7xl'
        fontWeight='extrabold'>
        {title}
      </Text>
    );
};
export default Header;