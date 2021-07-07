import React from "react";
import {
  chakra,
  ChakraProvider,
  Text,
  Flex,
  Fade,
  Box,
  Image,
  Stack,
  Heading,
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
import { AnimatedSocialIcon } from "react-animated-social-icons";

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

const nav = [
  { name: "Home", to: "/" },
  { name: "Pricing", to: "#pricing" },
  { name: "Showcase", to: "#showcase" },
  { name: "About", to: "#about" },
  { name: "Contact", to: "#contact" },
];

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
                    key={entry["to"] + "-default"}
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

          <DrawerBody align="center">
            {nav.map((entry) => {
              return (
                <div key={entry["to"] + "-small"}>
                  <DrawerMenuItem to={entry["to"]} linkSignal={handleLink}>
                    {entry["name"]}
                  </DrawerMenuItem>
                  <br />
                </div>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Divider />
      <Component {...pageProps} />
      <Divider />
      <Flex
        bg="#212121"
        as="footer"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        p={8}
        direction={{ base: "column", md: "row" }}
        color={["black", "black", "primary.500", "primary.500"]}
      >
        <Stack
          direction="column"
          spacing={4}
          align="left"
          justify="space-between"
        >
          <Image
            align="center"
            w={["35px", "40px", "40px", "50px", "50px"]}
            objectFit="cover"
            src="/logo.png"
            alt=""
          />
          <Heading as="h1" fontSize="xl" color="#6d64e8">
            BoostWild
          </Heading>

          <Text
            maxW="60ch"
            mx="auto"
            color="gray.400"
            fontSize={["xs", "xs", "xs", "md", "lg"]}
            mt="6"
          >
            This Website is licensed under the{" "}
            <b>GNU Affero General Public License</b>. You can get the source at
            our official github organization profile. <br />
            <br />
            Copyright (C) {new Date().getFullYear()}, BoostWild.
            <br />
            <br />
          </Text>
        </Stack>
        <Stack align="center" justify="center" spacing={6} direction="row">
          <AnimatedSocialIcon
            brandName="github"
            url="https://github.com/BoostWild"
            animation="float"
            defaultColor="#878787"
            hoverColor="#D1D1D1"
            width="2em"
            animationDuration={0.8}
            style={{ padding: 0.5 }}
          />
          <AnimatedSocialIcon
            brandName="instagram"
            url="https://www.instagram.com/boostwild.in/"
            animation="float"
            defaultColor="#878787"
            hoverColor="#D1D1D1"
            width="2em"
            animationDuration={0.8}
            style={{ padding: 0.5 }}
          />
          <AnimatedSocialIcon
            brandName="youtube"
            url="#"
            animation="float"
            defaultColor="#878787"
            hoverColor="#D1D1D1"
            width="2em"
            animationDuration={0.8}
            style={{ padding: 0.5 }}
          />
          <AnimatedSocialIcon
            brandName="twitter"
            url="#"
            animation="float"
            defaultColor="#878787"
            hoverColor="#D1D1D1"
            width="2em"
            animationDuration={0.8}
            style={{ padding: 0.5 }}
          />
        </Stack>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
