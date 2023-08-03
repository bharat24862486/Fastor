import {
    Box,
    Button,
    HStack,
    Input,
    PinInput,
    PinInputField,
    Stack,
    Text,
    Tooltip,
    useToast,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { IoIosArrowBack } from "react-icons/io";
  import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
  
  const Otp = () => {
  
    const [otp, setOtp] = useState('')
    const navigate = useNavigate()
    const toast = useToast()
    
    const handleVerify = () => {
      const defaultOtp = 123456 
  
      if(otp == defaultOtp) {
        toast({
          title: "Logged In",
          position: 'top',
          isClosable: true,
          status:  "success",
           
        })     
        localStorage.setItem("auth","yes")
         navigate('/')
      } else {
        toast({
          title: "Wrong OTP",
          position: 'top',
          isClosable: true,
          status:  "error",
           
        })     
      
      }
  
    }
  
    return (
      <>
      <Navbar />
       
      <Stack
        w={["80%", "50%", "40%", "30%", "25%"]}
        m={"auto"}
        mt={"25vh"}
        textAlign={"left"}
      >
        <Button w={'min-content'} variant={"outline"}  bgColor={'white'} >
      
        <IoIosArrowBack size={'15px'} /> 
      </Button>
  
      
    <Stack mt={"5vh"}>
  
        <Text fontFamily={"Urbanist"} fontSize="25px" as={"b"}>
          OTP Verification
        </Text>
        <Text fontSize={"14px"} color={"#8391A1"}>
          Enter the verification code we just send on your Mobile Number
        </Text>
        <br />
        <HStack>
          <PinInput placeholder="" value={otp} onChange={(e)=>setOtp(e)}  >
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
        <Button
          mt={"10px"}
          fontSize={"14px"}
          colorScheme={"#FF6D6A"}
          bgColor={"#FF6D6A"}
          variant={"solid"}
          onClick={handleVerify}
        >
          Verify
        </Button>
        <Text textAlign={'center'}>
          Didn't received code? <Box as="b" color={'#5574C6'} onClick={()=>  toast({
          title: "OTP has been resent",
          description: 'default OTP is 123456',
          position: 'top',
          isClosable: true,
          status:  "error",
           
        })     } >Resend</Box>{" "}
        </Text>
          </Stack>
      </Stack>
        </>
    );
  };
  
  export default Otp;