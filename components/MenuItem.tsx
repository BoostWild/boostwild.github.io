import { Button, Link } from "@chakra-ui/react";

function dummyLinkHandler(x) {}

const MenuItem = ({
  children,
  isLast = false,
  to = "/",
  linkSignal = dummyLinkHandler,
  ...rest
}) => {
  const handleClick = () => {
    linkSignal(to);
  };
  return (
    <Button
      _focus={{
        boxShadow:
          "0 0 1px 2px rgba(109, 100, 232, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}
      _active={{ borderColor: "#6d64e8" }}
      color="#6d64e8"
      display={{ base: "none", md: "block" }}
      {...rest}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default MenuItem;
