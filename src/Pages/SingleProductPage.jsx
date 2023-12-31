import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { RWebShare } from "react-web-share";

const SingleProductPage = () => {
  const [data, setdata] = useState({})
  const { id } = useParams()
  const [state, setstate] = useState(false)

  useEffect(() => {

    axios.get(`https://determined-gold-jaguar.cyclic.app/restaurants/${id}`)
      .then((res) => {
        setdata(res.data)
        console.log(res.data)
      })

  }, [])

  return (
    // <Box></Box>
    <Box w="100%" margin="auto" >
      <Navbar state={state} setstate={setstate} />
      <Image w="100%" h={"80vh"} objectFit={"cover"} src={data.image} />
      <Box
        position={"absolute"}
        top="20%"
        opacity={"0.7"}
        left={"40%"}
        draggable={true}
      >
        <Image
          w="50%"
          src="https://images.crunchbase.com/c_lpad,f_auto,q_auto:eco,dpr_1/nceirg4yszretupes6ea"
        />
      </Box>
      <Flex
        w="90%"
        margin={"auto"}
        mt="2%"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>
          <Text fontWeight={600} letterSpacing={"1px"} fontSize={"20px"}>
            {data.restaurant}
          </Text>
          <Text fontWeight={500} letterSpacing={"1px"} fontSize={"16px"}>
            {data.place}, {data.city}
          </Text>
        </Box>

        <Flex flexDirection={"column"} w="20%"  >
          <Text fontWeight={500} letterSpacing={"1px"} fontSize={"16px"} textAlign={"center"} >
            &#9733;{data.rating}
          </Text>
          <RWebShare
            data={{
              text: "Fastor",
              url: `https://fastor-xi.vercel.app/single/${id}`,
              title: "GfG",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <Button w="60%" bg={"#fc681a"} color="white" margin={"auto"} >Share on Web</Button>
          </RWebShare>
        </Flex>
      </Flex>

      <Box
        w="90%"
        fontWeight={500}
        letterSpacing={"1px"}
        margin={"auto"}
        mt="3%"
      >
        <Text>{data.description}</Text>
      </Box>
    </Box>
  )
}

export default SingleProductPage