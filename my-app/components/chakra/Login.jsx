import React from "react";
import { Input } from "@chakra-ui/react";
function Login() {
  return (
    // <Stack spacing={3}>
    <>
      <Input variant="outline" placeholder="Outline" />
      <Input variant="filled" placeholder="Filled" />
      <Input variant="flushed" placeholder="Flushed" />
      <Input variant="unstyled" placeholder="Unstyled" />
      <Input variant="solid" placeholder="Solid" />
      {/* // </Stack> */}
    </>
  );
}

export default Login;
