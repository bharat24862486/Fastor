import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const MainCard = ({id,restaurant,city,place,description,image,famous_dishes,rating,price}) => {
const navigate =useNavigate()

  return (
    <Box boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"} borderRadius={"25px"} onClick={()=>navigate(`/single/${id}`)}>
        <Flex gap="5%">
<Box >
    <Image borderRadius={"25px"} w="150px" height={["170px","170px","170px","150px"]} objectFit={"cover"} src={image}/>
</Box>
<Box >
    <Text fontSize={["17px","15px","16px","18px"]} fontWeight={"600"}>{restaurant}</Text>
    <Text fontSize={["14px","12px","13px","14px"]} fontWeight={"500"} color={"#90A4AE"} mt={["2px","4px","2px","4px"]}>{famous_dishes.substring(0,20)}...</Text>
    <Text fontSize={["14px","12px","13px","14px"]} fontWeight={"500"} color={"#90A4AE"} mt={["2px","4px","2px","4px"]}>{place} , {city}</Text>
    <Flex justifyContent={"space-between"} mt="8%">
        <Box >
            <Text fontSize={"14px"} fontWeight={"500"}>&#9733;{rating}</Text>
            <Text fontWeight={"500"} color={"#90A4AE"} fontSize={"12px"}>popularity</Text>
        </Box>
        <Box>
        <Text fontSize={["14px","12px","13px","14px"]} fontWeight={"500"}>${price}</Text>
            <Text fontWeight={"500"} color={"#90A4AE"} fontSize={"12px"}>cost of two</Text>
        </Box>
    </Flex>
</Box>

        </Flex>
    </Box>
  )
}

export default MainCard