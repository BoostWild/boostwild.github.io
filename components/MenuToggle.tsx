import { SmallCloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <SmallCloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};

export default MenuToggle;
