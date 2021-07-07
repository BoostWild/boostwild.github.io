import React from "react";
import {
  ChakraProvider,
  Flex,
  Fade,
  Box,
  Stack,
  Divider,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { extendTheme, useDisclosure } from "@chakra-ui/react";
import "@fontsource/inter/800.css";
import "@fontsource/roboto/400.css";

import Logo from "../components/Logo";
import MenuToggle from "../components/MenuToggle";
import MenuItem from "../components/MenuItem";
import DrawerMenuItem from "../components/DrawerMenuItem";

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

  const nav = [
    { name: "Home", to: "/" },
    { name: "Pricing", to: "#pricing" },
    { name: "Showcase", to: "#showcase" },
    { name: "About", to: "#about" },
    { name: "Contact", to: "#contact" },
  ];

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
          display={{ base: "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
        >
          <Fade in={true}>
            <Stack
              spacing={8}
              align="center"
              justify="flex-end"
              direction="row"
              pt={[4, 4, 0, 0]}
            >
              {nav.map((entry) => {
                return (
                  <MenuItem
                    key={entry["name"]}
                    to={entry["to"]}
                    linkSignal={handleLink}
                  >
                    {entry["name"]}
                  </MenuItem>
                );
              })}
            </Stack>
          </Fade>
        </Box>
      </Flex>
      <Drawer
        closeOnOverlayClick
        isOpen={isOpen}
        onClose={toggle}
        placement="right"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>

          <DrawerBody>
            {nav.map((entry) => {
              return (
                <>
                  <DrawerMenuItem
                    key={entry["name"] + "-drawer"}
                    to={entry["to"]}
                    linkSignal={handleLink}
                  >
                    {entry["name"]}
                  </DrawerMenuItem>
                  <br key={entry["name"] + "-br-drawer"} />
                </>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Divider />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
