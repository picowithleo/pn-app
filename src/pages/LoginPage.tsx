import { Stack, Container, Text, Box, Divider } from "@chakra-ui/react";
import StrategiesLoginButton from "../components/StrategiesLoginButton/StrategiesLoginButton";
import Login from "../components/Login/Login";
import LoginTitle from "../components/LoginTitle/LoginTitle";
import LoginTitleBelow from "../components/LoginTitleBelow/LoginTitleBelow";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook, AiFillApple } from "react-icons/ai";

const LoginPage = () => {
  return (
    <Container maxWidth="5xl" display="flex" justifyContent="center">
      <Stack display="flex" flexDirection="column" alignItems="center">
        <LoginTitle />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="3"
          paddingTop="14"
          paddingBottom="5"
        >
          <StrategiesLoginButton
            icon={<AiFillFacebook />}
            backgroundColor={"#3B5998"}
            strategyName={"Facebook"}
            color={"#FFFFFF"}
          />
          <StrategiesLoginButton
            icon={<FcGoogle />}
            backgroundColor={"#FFFFFF"}
            strategyName={"Google"}
            color={"#000000"}
          />
          <StrategiesLoginButton
            icon={<AiFillApple />}
            backgroundColor={"#FFFFFF"}
            strategyName={"Apple"}
            color={"#000000"}
          />
        </Box>
        <Divider />
        <Box paddingTop="3">
          <Login />
        </Box>

        <Divider paddingY="4" />
        <LoginTitleBelow />
      </Stack>
    </Container>
  );
};

export default LoginPage;
