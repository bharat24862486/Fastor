import { Box, Button, Flex, Image, Select, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Navbar = ({ state, setstate }) => {

  const toast = useToast()


  let local = localStorage.getItem("auth")
  const handleremove = () => {
    localStorage.removeItem("auth")
    toast({
      title: "Logout Successfull",
      position: 'top',
      isClosable: true,
      status: "error",

    })
    setstate(!state)
  }



  return (
    <Flex
      h="10vh"
      justify={"space-between"}
      bg={"grey"}
      p={'0% 2%'}
      color={"white"}
      alignItems={"center"}
    >
      <Box w={["40%", "35%", "30%"]}>
        <Link to="/"> <Image
          w={["50%", "35%", "30%"]}
          src={
            "https://images.crunchbase.com/c_lpad,f_auto,q_auto:eco,dpr_1/nceirg4yszretupes6ea"
          }
        /></Link>
      </Box>

      <Flex w={["40%", "30%", "16%"]} justifyContent={'space-between'} alignItems={"center"} >
        <Link to="/"><Text fontSize={"1.2em"}>Home</Text></Link>
        {!local ? <Link to="/login"> <Button bg="#fc681a" color={"white"}>
          Login
        </Button></Link> : <Button bg="#fc681a" color={"white"} onClick={handleremove}>Logout</Button>}
      </Flex>
    </Flex>
  );
};

export default Navbar;
