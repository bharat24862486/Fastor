import { Box, Button, Input, Stack, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";


import Otp from "./Otp";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


const Login = () => {

  const [num, setNum] = useState('');
  const toast = useToast()
  const navigate = useNavigate();
  const [state,setstate] = useState(false)

  const handleSubmit = () => {

    localStorage.setItem('mobileNum', JSON.stringify(num))
    toast({
      title: "OTP has been sent",
      position: 'top',
      isClosable: true,
      status: "success",

    })
    navigate('/otp')
  }


  return (
    <Box>
      <Navbar state={state} setstate={setstate} />
      <Stack
        w={["80%", "50%", "40%", "30%", "25%"]}
        m={"auto"}
        mt={"30vh"}
        textAlign={"left"}
      >

        <Text fontFamily={"Urbanist"} fontSize="25px" as={"b"}>
          Enter Your Mobile Number
        </Text>
        <Text as="sub" fontSize={"15px"} color={"#8391A1"}>
          We will send you the 6 digit verification code
        </Text>
        <br />
        <Input
          type="number"
          colorScheme="#DADADA"
          placeholder="Enter your Mobile Number"
          onChange={(e) => setNum(e.target.value)}
          value={num}
        />

        <Button
          mt={"10px"}
          fontSize={"14px"}
          colorScheme={"#FF6D6A"}
          bgColor={"#FF6D6A"}
          variant={"solid"}
          onClick={handleSubmit}
        >
          Send Code
        </Button>
      </Stack>
    </Box>

  );
};

export default Login;