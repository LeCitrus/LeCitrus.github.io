import {extendTheme} from '@chakra-ui/react';
import {mode} from '@chakra-ui/theme-tools';

const dark = "#282C34";
const light = "#4A412A";

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }


/* https://github.com/chakra-ui/chakra-ui/discussions/5048 */
const theme = extendTheme({ 
    config,
    colors: {
        dark: dark,
        light: light,
        white: "#FFFFFF",
    },
    fonts: {
        body:"'Roboto', sans-serif",
    },
    fontSizes: {
        xs: "0.75rem",
    },
    styles: {
        global: (props)  => ({
            body: {
                bg: mode(light, dark)(props)
                
            }
        })
    }
});

export default theme;