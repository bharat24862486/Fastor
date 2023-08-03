import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const CardNormal = ({ image, restaurant, id, place, city }) => {


  const randomColors = [
    '#f8ced5', '#eaffff', '#e0d2ca', '#C5E1A5', '#D1C4E9', '#FFE0B2', '#CFD8DC', '#FFCDD2'
  ];


  const randomIndex = Math.floor(Math.random() * randomColors.length);
  const randomBackgroundColor = randomColors[randomIndex];
  return (
    <Box borderRadius={"25px"} border="1px solid black" height={['300px','290px','290px','290px']} w={'250px'} overflow={"hidden"}  >
      <Image src={image} w="100%" h={"30vh"} />
      <Box bg={randomBackgroundColor} textAlign={"left"} pb="5%" pt="5%">
        <Text fontSize={"1.2rem"} fontWeight={600} ml="5%" color={"black"}>{restaurant}</Text>
        <Text fontSize={"1rem"} fontWeight={"600"} ml="5%" color={"black"}>{place}</Text>

        <Text fontSize={"1rem"} fontWeight={"600"} ml="5%" color={"black"}>New Delhi</Text>
      </Box>
    </Box>
  )
}

export default CardNormal