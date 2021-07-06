import React from "react";
import {
  ChakraProvider,
  Flex,
  Fade,
  Box,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter/800.css";
import "@fontsource/roboto/400.css";

import Logo from "../components/Logo";
import MenuToggle from "../components/MenuToggle";
import MenuItem from "../components/MenuItem";

const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Roboto",
  },
});

function App({ Component, pageProps }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const handleLink = (link) => {
    console.log({ link });
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        p={8}
        color={["black", "black", "primary.500", "primary.500"]}
      >
        <Fade in={true}>
          <Logo />
        </Fade>
        <Fade in={true}>
          <MenuToggle toggle={toggle} isOpen={isOpen} />
        </Fade>
        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
        >
          <Fade in={true}>
            <Stack
              spacing={8}
              align="center"
              justify={["center", "center", "flex-end", "flex-end"]}
              direction={["column", "column", "row", "row"]}
              pt={[4, 4, 0, 0]}
            >
              <MenuItem to="/" linkSignal={handleLink}>
                Home
              </MenuItem>
              <MenuItem to="#pricing" linkSignal={handleLink}>
                Pricing
              </MenuItem>
              <MenuItem to="#showcase" linkSignal={handleLink}>
                Showcase
              </MenuItem>
              <MenuItem to="#about" linkSignal={handleLink}>
                About
              </MenuItem>
              <MenuItem to="#contact" linkSignal={handleLink}>
                Contact
              </MenuItem>
            </Stack>
          </Fade>
        </Box>
      </Flex>
      <Divider />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
