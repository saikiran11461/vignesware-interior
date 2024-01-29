"use client"
import { Box, Flex,Heading,Image, Stack,Text } from '@chakra-ui/react';
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Second from '@/Components/Second';
import ThreeSilder from '@/Components/ThreeSilder';
import Fourth from "../../Components/Fourth";
import Features from "../../Components/Features";
import SixProject from "../../Components/SixPorject";

const Landidng = () => {
  AOS.init();
  const backgroundImage = 'url("https://cdn.pixabay.com/photo/2019/02/22/13/22/living-room-4013531_1280.jpg")';
  const backgroundSize = 'cover';
  const backgroundPosition = 'center';
  const backgroundRepeat = 'no-repeat';

  return (
    <>
    
      <Box
      style={{
        backgroundImage,
        backgroundSize,
        backgroundPosition,
        backgroundRepeat,
      }}

      
      border={"2px solid transprent"} width={{base:"100%",md:"98%"}} height={{base:"auto",md:"98vh"}} margin={"auto"}>
          <Box>
              <Flex height={{base:"auto", md:"auto"}} flexDirection={{base:"column", md:"row"}}  border={"2px solid transprent"}>
                  <Box data-aos="fade-right" width={{base:"100%", md:"60%"}}  border={"2px solid transprent"} >
                      <Box  boxShadow='dark-lg' p='6' rounded='dark-lg' background={"rgba(0,0,0,0.5)"}  boxSizing={{base:"border-box",md:"border-box"}} padding={{base:"20px 20px",md:"40px"}}    border={"2px solid transprent"} width={{base:"95%", md:"85%"}} height={{base:"", md:"380px"}} mt={{base:"20px", md:"180px"}} mb={{base:"30px", md:""}} ml={{base:"10px",md:"60px"}} borderRadius={"20px"}>
                      <Stack>
                           <Heading width={"100%"}  mt={{base:"1rem",md:"3rem"}} color={"lightgray"} lineHeight={{base:"2.5rem", md:"4rem"}} as='h1' fontSize={{base:"38px", md:"70px"}}> Elevate Your Space <Text ml={"7px"} color='yellow.500'>with Elegance</Text></Heading>
                           <Text mt={"1rem"}  color={"gray.100"} lineHeight={"27px"} fontSize={{base:"19px", md:"20px"}}>
                           Transforming Houses into Homes, One Design at a Time – Where Style Meets Comfort and Every Corner Tells a  Unique  Story of Inspiration
                           </Text>
                      </Stack>

                      </Box>
                  </Box>
                  <Box data-aos="fade-left"  width={{base:"100%", md:"40%"}} border={"2px solid transprent"} boxSizing={{base:"border-box"}} padding={{base:"40px 15px",md:""}} height={"auto"}>
                    <Box margin={"auto"} border={"3px solid yellow"} width={{base:"100%",md:"500px"}} mt={{base:"", md:"4rem"}}  height={{base:"450px",md:"500px"}} borderRadius={"10px"}>
                    <Image w={"90%"} m={"auto"} mt={{base:"40px",md:"4rem"}} borderRadius={"30px"}  height={"100%"} src="https://images.pexels.com/photos/3802666/pexels-photo-3802666.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />

                    </Box>
                  </Box>
              </Flex>
          </Box>
      </Box>
      <Second/>
      <ThreeSilder/>
      <Fourth/>
      <Features/>
      <SixProject/>
    </>
  )
}

export default Landidng;