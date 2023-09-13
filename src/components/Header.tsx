import {Text} from "@chakra-ui/react";


const Header = ({
    title,
}) => {
    return (
        <Text bgGradient='linear(to-b, #585858, #FFFFFF)'
        bgClip='text'
        fontSize='8xl'
        letterSpacing={10}>
        {title}
      </Text>
    );
};
export default Header;
