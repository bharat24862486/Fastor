import { Box, Flex, Image, Select, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import CardNormal from "../Components/CardNormal";
import MainCard from "../Components/MainCard";
import LargeWithLogoCentered from "../Components/Footer";
import Navbar from "../Components/Navbar";
const Home = () => {
  const [data, setdata] = useState([]);
  const [state, setstate] = useState(false);
  const [data2, setdata2] = useState([]);
  const [place, setplace] = useState("")


  const getData = (ob) => {




    axios.get(`https://determined-gold-jaguar.cyclic.app/restaurants`, ob).then((res) => {
      setdata(res.data);
    });
  };

  const getData2 = () => {
    let limit = 4;
    if (state) {
      limit = 12;
    }

    axios
      .get(`https://determined-gold-jaguar.cyclic.app/restaurants?_limit=${limit}`)
      .then((res) => {
        setdata2(res.data);
      });
  };

  useEffect(() => {



    if (place !== "") {
      let ob = {};
      ob.params = {};
      ob.params["place"] = place;
      getData(ob);
    } else {
      getData("");
    }
    getData2();
  }, [state, place]);

  return (
    <Box>
      <Navbar state={state} setstate={setstate} />
      <Flex boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}>
        <Flex w="90%" margin={"auto"} gap="2%" p="1%" alignItems={"center"}>
          <Text>Pre Order From </Text>
          <Select w="20%" onChange={(e) => setplace(e.target.value)}>
            <option>Select the location</option>
            <option value="Paharganj">Paharganj</option>
            <option value="Connaught Place">Connaught Place</option>
            <option value="Pitampura">Pitampura</option>
            <option value="Karol Bagh">Karol Bagh</option>
          </Select>
        </Flex>
      </Flex>

      <Flex w="90%" margin={"auto"} justifyContent={"space-between"}>
        <Flex
          w="50%"
          textAlign={"left"}
          flexDirection={"column"}
          placeContent={"center"}
        >
          <Text fontSize={"1.5em"} fontWeight={"600"} color={"#B0BEC5"}>
            Bharat
          </Text>
          <Text fontSize={"1.2em"} fontWeight={"600"}>
            Let's explore this evening
          </Text>
        </Flex>
        <Flex w="50%" justifyContent={"right"}>
          <Box w="15%">
            <Image
              w="100%"
              src="https://www.transparentpng.com/thumb/special-offer/special-offer-tag-png-pictures-4.png"
            />
          </Box>

          <Box w="15%">
            <Image
              w="100%"
              src="https://static.vecteezy.com/system/resources/previews/019/017/529/original/paytm-wallet-transparent-free-png.png"
            />
          </Box>
        </Flex>
      </Flex>

      <Flex w="90%" justifyContent={"space-between"} margin={"auto"} mt="5%">
        <Text fontSize={"1.5rem"} fontWeight={"600"}>
          Your taste
        </Text>
        <Text
          fontSize={"1.2rem"}
          color="#90A4AE"
          onClick={() => setstate(!state)}
        >
          {state ? "hide all" : "see all"}
        </Text>
      </Flex>

      <Flex
        w="90%"
        margin={"auto"}
        // columns={[4, 4, 4, 4]}
        gap="5%"
        mt="2%"
        mb={state ? ["140%", "55%", "30%", "25%"] : "5%"}
        overflowX={'hidden'}
      >
        {data2.length > 0 &&
          data2.map((item) => (
            <Box key={item.id}>
              <CardNormal {...item} />
            </Box>
          ))}
      </Flex>

      <Box w="90%" margin={"auto"} mt={["10%", "7%", "5%"]} height={['auto','auto',"80vh","80vh"]}>
        <Swiper
          slidesPreView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
        >
          <SwiperSlide>
            <Box>
              <Image height={['auto', 'auto', "80vh", "80vh"]} objectFit={"cover"} w="100%" src="https://www.wellcurve.in/blog/wp-content/uploads/2021/06/Healthy-indian-foods-fb-cover.jpg" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box>
              <Image height={['auto', 'auto', "80vh", "80vh"]} objectFit={"cover"} w="100%" src="https://images.healthshots.com/healthshots/en/uploads/2022/03/28211325/Vitamin-d-foods-1600x900.jpg" />
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box>
              <Image height={['auto', 'auto', "80vh", "80vh"]} objectFit={"cover"} w="100%" src="https://cals.cornell.edu/sites/default/files/styles/hero_home_desktop/public/2022-06/ifs-hero-food-still-life-1920x1080x72.jpg?h=36398e41&itok=3jGAIYIE" />
            </Box>
          </SwiperSlide>

        </Swiper>
      </Box>




      <Flex w="90%" justifyContent={"space-between"} margin={"auto"} mt={["2%", "1%", "5%"]} >
        <Text fontSize={"1.5rem"} fontWeight={"600"}>
          Popular Ones
        </Text>
      </Flex>





      <SimpleGrid
        w="90%"
        margin={"auto"}
        columns={[1, 2, 3]}
        gap="2%"
        mt="2%"
        mb={["150%", "20%", "10%", "5%"]}
      >
        {data.length > 0 &&
          data.map((item) => (
            <Box key={item.id}>
              <MainCard {...item} />
            </Box>
          ))}
      </SimpleGrid>





     

    </Box>
    
  );
};

export default Home;
