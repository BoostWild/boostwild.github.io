import { Box, Stack, Image, Heading } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box>
      <Stack align="center" direction="row" spacing={1}>
         <Image
            align="center"
            w={["35px", "40px", "40px", "50px", "50px"]}
            objectFit="cover"
            src="/logo.png"
            alt="nav_logo"/>
         <Heading as="h1" fontSize={["lg", "2xl", "2xl", "2xl"]} color="#6d64e8">
          BoostWild
        </Heading>
      </Stack>
    </Box>
  );
}
