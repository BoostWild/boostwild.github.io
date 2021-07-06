import { Box, Stack, Heading } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box>
      <Stack align="center" direction="row" spacing={1}>
        <Heading as="h1" fontSize={["lg", "2xl", "2xl", "2xl"]} color="#6d64e8">
          BoostWild
        </Heading>
      </Stack>
    </Box>
  );
}
