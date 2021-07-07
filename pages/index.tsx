import { AnimatedSocialIcon } from "react-animated-social-icons";
import {
  Center,
  Image,
  Stack,
  Heading,
  Box,
  Container,
  Divider,
  Flex,
  Text,
  chakra,
  Button,
} from "@chakra-ui/react";

import Head from "next/head";

import PricingCard from "../components/PricingCard";

const plans = [
  {
    plan: "BASIC",
    price: "15,000",
    features: [
      "Unlimited Static Pages",
      "Optimized for SEO and Fast Loading",
      "Unique and Custom Design",
      "Fully Reactive Website",
      "Modern Web Practice",
    ],
  },
  {
    plan: "GHOST",
    price: "60,000",
    features: [
      "All features in Basic Plan",
      "Upto 10 API Implementation",
      "Ghost Content Management System",
      "Easy Deploy with Docker",
      "Technical Support for Deploying",
    ],
  },
  {
    plan: "E-COMMERCE",
    price: "80,000",
    features: [
      "All features in Basic Plan",
      "Strapi Integration",
      "Paytm Payment Gateway",
      "Easy Deploy with Docker",
      "Technical Support for Deploying",
    ],
  },
];

function Index() {
  return (
    <>
      <Head>
        <title>BoostWild Official Website</title>
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          content="BoostWild Official Website"
          key="title"
        />
        <meta
          name="description"
          content="Modern Web Development and Digital Marketing Company based in India."
        />
        <meta
          property="og:description"
          content="Modern Web Development and Digital Marketing Company based in India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="boostwild.in" />
        <meta property="og:image" content="/social/index.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/social/index.png" />
        <meta name="twitter:creator" content="@boostwildin" />
        <meta name="twitter:site" content="boostwild.in" />
        <meta name="twitter:title" content="BoostWild Official Website" />
        <meta
          name="twitter:description"
          content="Modern Web Development and Digital Marketing Company based in India."
        />
      </Head>
      <Box mb={20}>
        <Box id="home" as="section" pt="6rem" pb={{ base: "0", md: "5rem" }}>
          <Container maxW="container.lg">
            <Stack
              spacing={8}
              align="center"
              justify="space-between"
              direction={["column", "column", "row-reverse", "row-reverse"]}
            >
              <Image
                align="center"
                w={["160px", "250px", "250px", "260px"]}
                objectFit="cover"
                src="/logo.png"
                alt=""
              />

              <Box textAlign="left">
                <chakra.h1
                  maxW="16ch"
                  mx="auto"
                  fontSize={{ base: "2.25rem", sm: "3rem", lg: "4rem" }}
                  fontFamily="heading"
                  letterSpacing="tighter"
                  fontWeight="extrabold"
                  mb="16px"
                  lineHeight="1.2"
                >
                  Welcome
                </chakra.h1>

                <Text
                  maxW="80vw"
                  mx="auto"
                  color="gray.500"
                  fontSize={{ base: "lg", lg: "xl" }}
                  mt="6"
                >
                  BoostWild is a Website Development and Digital Marketing
                  Company based in India, love to build you{" "}
                  <b>Fast, Modern and Elegant</b> Web Applications.
                </Text>
              </Box>
            </Stack>

            <br />
          </Container>

          <Container>
            <Center>
              <Button
                onClick={() => {
                  const element = document.getElementById("pricing");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                size="lg"
                variant="outline"
                border="2px"
                _focus={{
                  boxShadow:
                    "0 0 1px 2px rgba(109, 100, 232, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                }}
                _active={{ borderColor: "#6d64e8" }}
                color="#6d64e8"
              >
                GET STARTED
              </Button>
            </Center>
            <br />
            <br />
          </Container>

          <Container>
            <Center>
              <Stack
                align="center"
                justify="center"
                spacing={6}
                direction="row"
              >
                <AnimatedSocialIcon
                  brandName="github"
                  url="https://github.com/BoostWild"
                  animation="float"
                  defaultColor="#D1D1D1"
                  hoverColor="black"
                  width="3em"
                  animationDuration={0.8}
                  style={{ padding: 0.5 }}
                />
                <AnimatedSocialIcon
                  brandName="instagram"
                  url="https://www.instagram.com/boostwild.in/"
                  animation="float"
                  defaultColor="#D1D1D1"
                  hoverColor="black"
                  width="3em"
                  animationDuration={0.8}
                  style={{ padding: 0.5 }}
                />
                <AnimatedSocialIcon
                  brandName="youtube"
                  url="#"
                  animation="float"
                  defaultColor="#D1D1D1"
                  hoverColor="black"
                  width="3em"
                  animationDuration={0.8}
                  style={{ padding: 0.5 }}
                />
                <AnimatedSocialIcon
                  brandName="twitter"
                  url="#"
                  animation="float"
                  defaultColor="#D1D1D1"
                  hoverColor="black"
                  width="3em"
                  animationDuration={0.8}
                  style={{ padding: 0.5 }}
                />
              </Stack>
            </Center>
          </Container>
          <br />
          <br />
          <br />
          <br />
        </Box>

        <Divider colorScheme="grey" />

        <Box
          as="section"
          id="pricing"
          pt="6rem"
          bg="#6d64e8"
          pb={{ base: "0", md: "5rem" }}
        >
          <Container>
            <Box textAlign="center">
              <chakra.h1
                maxW="16ch"
                mx="auto"
                fontSize={{ base: "2.25rem", sm: "3rem", lg: "5rem" }}
                fontFamily="heading"
                letterSpacing="tighter"
                fontWeight="extrabold"
                mb="16px"
                lineHeight="1.2"
                color="white"
              >
                Pricing
              </chakra.h1>
              <Text
                mx="auto"
                color="gray.200"
                fontSize={{ base: "lg", lg: "xl" }}
              >
                We have flexible plans. All plans are charged based on{" "}
                <b>per version</b> basis. (i.e) a single revision of a Web
                Design for each plan is layed down below.
              </Text>

              <br />
            </Box>
          </Container>
          <Stack
            spacing={8}
            direction={["column", "column", "row", "row"]}
            wrap="wrap"
            align="center"
            justify="center"
          >
            {plans.map((entry) => {
              return (
                <PricingCard
                  style={{ padding: 0.5 }}
                  key={entry.plan + "-default"}
                  plan={entry.plan}
                  price={entry.price}
                  features={entry.features}
                />
              );
            })}
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default Index;
