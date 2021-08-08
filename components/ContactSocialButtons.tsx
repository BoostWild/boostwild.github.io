import { Text, Stack, Box } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";

export default function ContactSocialButtons({ iconBg = "black", ...rest }) {
  const icon_bg = useColorModeValue(
    iconBg,
    iconBg == "black" ? "white" : iconBg
  );
  return (
    <Stack
      pb="6"
      align="center"
      justify="center"
      spacing={[6, 6, 6, 14]}
      direction="row"
      wrap="wrap"
      {...rest}
    >
      <Stack align="center" justify="center" direction="row" spacing={2}>
        <SocialIcon
          style={{ marginTop: "10px" }}
          bgColor={icon_bg}
          url="mailto:info@boostwild.in"
        />
        <Text fontSize="lg" style={{ marginTop: "10px" }}>
          {" "}
          boostwildpromotions@gmail.com
        </Text>
      </Stack>
      <Stack align="center" justify="center" direction="row" spacing={2}>
        <SocialIcon
          style={{ marginTop: "10px" }}
          bgColor={icon_bg}
          url="mailto:support@boostwild.in"
        />
        <Text fontSize="lg" style={{ marginTop: "10px" }}>
          {" "}
          support@boostwild.in
        </Text>
      </Stack>
    </Stack>
  );
}
