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

import {
  Textarea,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

import Head from "next/head";

import PricingCard from "../components/PricingCard";
import ContactForm from "../components/ContactForm";
import ContactSocialButtons from "../components/ContactSocialButtons";

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

const youtubeplans = [
  {
    plan: "BASIC",
    price: "15,000",
    features: [
      "Promote your Channel",
      "Optimize description for better search",
      "5 Thumbnail Design",
      "Best Marketting Practices",
      "Your Usage of our service will be Private",
    ],
  },
  {
    plan: "BUSINESS",
    price: "60,000",
    features: [
      "All features in Basic Plan",
      "Individual Content Promotion",
      "Promotion via Instagram",
      "Custom Thumbnail Design",
      "100+ Subscribers",
    ],
  },
  {
    plan: "PREMIUM",
    price: "80,000",
    features: [
      "All features in Basic Plan",
      "Individual Content Promotion",
      "Promotion via Instagram and Whatsapp",
      "Tweets on your content",
      "200+ Subscribers",
    ],
  },
];


function Index(props) {
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
      <Box mb={0}>
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
                  <Fade>Welcome</Fade>
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
                See Pricing
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
          id="services"
          pt="6rem"
          bg="gray.50"
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
                YouTube Promotions
              </chakra.h1>
              <Text
                mx="auto"
                color="gray.200"
                fontSize={{ base: "lg", lg: "xl" }}
              >
               We expertise in YouTube Promotions and Social Media Optimization.
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
            {youtubeplans.map((entry) => {
              return (
                <Bounce key={entry.plan + "-default-smo"}>
                  <PricingCard
                    callback={(choice) => {
                      const element = document.getElementById("contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    style={{ padding: 0.5 }}
                    plan={entry.plan}
                    price={entry.price}
                    features={entry.features}
                  />
                </Bounce>
              );
            })}
          </Stack>
        </Box>

        <Box
          as="section"
          id="webdevelopment"
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
                Web Development
              </chakra.h1>
              <Text
                mx="auto"
                color="gray.200"
                fontSize={{ base: "lg", lg: "xl" }}
              >
                We have flexible plans. All plans are charged based on{" "}
                <b>per version</b> basis. (i.e) a single revision of a Web
                Application for each plan is layed down below.
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
                <Bounce key={entry.plan + "-default"}>
                  <PricingCard
                    callback={(choice) => {
                      const element = document.getElementById("contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    style={{ padding: 0.5 }}
                    plan={entry.plan}
                    price={entry.price}
                    features={entry.features}
                  />
                </Bounce>
              );
            })}
          </Stack>
        </Box>

        <Box as="section" id="about" pt="4rem" pb={{ base: "0", md: "5rem" }}>
          <Container maxW="container.xl">
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
              >
                About
              </chakra.h1>
            </Box>
            <br />
            <br />
            <Stack
              spacing={8}
              direction={["column", "column", "row", "row"]}
              align={["center", "center", "flex-start", "flex-start"]}
              justify="space-between"
            >
              <Fade>
                <Box borderRadius="lg" bg="#6d64e8">
                  <Image
                    borderRadius="lg"
                    minW={["250", "360", "360", "400", "500"]}
                    minH={["400", "560", "560", "600", "700"]}
                    maxW={["250", "360", "360", "400", "500"]}
                    maxH={["400", "560", "560", "600", "700"]}
                    src="/about_cover.jpg"
                    style={{ opacity: "0.40" }}
                  />
                </Box>
              </Fade>

              <Fade>
                <Text
                  maxW="80ch"
                  color="gray.500"
                  fontSize={{ base: "lg", lg: "xl" }}
                >
                  <br />
                  We are a <b>service based</b> startup company based in India.
                  We like to build <b>very high quality</b> web applications. We
                  also love to do digital marketing as well. <br /> <br />
                  We build web applications using <b>ReactJS</b> which helps us
                  make very reactive and responsive web applications for you. It
                  is also current industry trend. <b>In layman terms,</b> we
                  build your website with the same technology that{" "}
                  <b>Facebook</b> uses to build it's most popular product,{" "}
                  <b>Instagram</b>.
                  <br />
                  <br />
                  We also love <b>open source</b> software so much that we even
                  released the source of this website for you to audit our code
                  personally if you want. We beg to differ from web development
                  agency in India which <b>uses subpar practices and design</b>.{" "}
                  <br />
                  <br />
                  We like to differ from other agencies in India by giving you
                  world class web application and design for your business. We
                  assure you that you won't regret your choice.
                  <br />
                  <br />
                  <Text fontWeight="extrabold" color="#6d64e8">
                    We would love to power your business, please consider us for
                    your next project.
                  </Text>
                </Text>
              </Fade>
            </Stack>
          </Container>
          <br />
          <br />
        </Box>

        <Divider />

        <Box
          as="section"
          id="contact"
          bg="gray.50"
          pt="4rem"
          pb={{ base: "0", md: "5rem" }}
        >
          <Container maxW="container.lg">
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
              >
                Contact
              </chakra.h1>
            </Box>
            <ContactSocialButtons />
	    {props.showContact && <ContactForm api={props.contactAPI}/>}
            <br />
          </Container>
          <br />
          <br />
          <br />
        </Box>
      </Box>
    </>
  );
}

export default Index;


export async function getStaticProps() {
  const env_keys = Object.keys(process.env);
  const showContact =
    (env_keys.indexOf("TELEGRAM_BOT_TOKEN") !== -1 &&
      env_keys.indexOf("TELEGRAM_GROUP_ID_TARGET") !== -1) ||
    env_keys.indexOf("CONTACT_API_URL") !== -1;
  const api =
    env_keys.indexOf("CONTACT_API_URL") !== -1
      ? process.env.CONTACT_API_URL
      : null;
  return {
    props: {
      showContact: showContact,
      contactAPI: api,
    },
  };
}
