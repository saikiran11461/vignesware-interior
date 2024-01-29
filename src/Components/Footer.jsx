import { Box, Flex, Heading,IconButton,Text } from '@chakra-ui/react'
import React from 'react'
import { BsFacebook ,BsYoutube} from "react-icons/bs";
import {RiInstagramFill} from "react-icons/ri";
import {AiFillTwitterCircle} from "react-icons/ai"
const Footer = () => {
  return (
    <>
      <Box bgColor={"black"} color={"white"} border={"2px solid transprent"} width={{base:"",md:"98%"}} margin={"auto"}>
          <Box textAlign={"center"} border={"2px solid transprent"} width={{base:"100%",md:"50%"}} margin={"auto"} mt={{base:"2rem",md:""}}>
              <Box>
                <Heading fontSize={{base:"2.5rem",md:"3rem"}} pt={{base:"2rem",md:""}}>Vigneswara interiors</Heading>
                <Text boxSizing={{base:"border-box",md:""}} padding={{base:"1.5rem",md:""}}  mt={{base:"2rem",md:"1rem"}} fontSize={{base:"15px",md:"1rem"}}>
                Vigneswara Interiors - Your Trusted Partner in Crafting Unique, Timeless Spaces that Reflect Your Style and Elevate Your Everyday Life. With a Passion for Design and a Commitment to Excellence, We Transform Houses into Homes
                </Text>
              </Box>
          </Box>

          <Box  width={{base:"",md:"80%"}} margin={"auto"} mt={{base:"",md:""}}>
                <Flex alignItems={{base:"",md:"center"}} justifyContent={"space-between"} flexDirection={{base:"column",md:"row"}} border={"2px solid transprent"}>
                  <Box textAlign={{base:"center",md:""}} border={"2px solid transprent"}  m={{base:"2rem 0px",md:""}}><Heading>Vigneswara interiors</Heading> </Box>
                  <Box border={"2px solid transprent"}>
                    <Flex justifyContent={"space-around"} border={"2px solid transprent"} width={{base:"",md:"300px"}} m={{base:"3rem",md:""}}>
                        <IconButton fontSize={"2rem"} icon={<BsFacebook/>}></IconButton>
                        <IconButton fontSize={"2rem"} icon={<RiInstagramFill/>}></IconButton>
                        <IconButton fontSize={"2rem"} icon={<AiFillTwitterCircle/>}></IconButton>
                        <IconButton fontSize={"2rem"} icon={<BsYoutube/>}></IconButton>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
      </Box>
    </>
  )
}

export default Footer