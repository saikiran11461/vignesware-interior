import { Box, Button, Flex, Heading,Text,Image } from '@chakra-ui/react'
import React from 'react'

const SixPorject = () => {
  return (
    <>
    <Box  boxSizing={{base:"",md:"border-box"}} padding={{base:"",md:"50px"}} border={"2px solid transprent"} width={"98%"} margin={"auto"} mt={{base:"4rem",md:"4rem"}} mb={"3rem"} >
        <Box border={"2px solid tranprent"} boxSizing='border-box' padding={"0px 20px"}>
            <Flex direction={{base:"column",md:"row"}}>
                <Box textAlign={{base:"center",md:"center"}} boxSizing={{base:"border-box",md:"border-box"}} padding={{base:"30px 10px",md:"10px"}} border={"2px solid transprent"} width={{base:"100%",md:"55%"}} height={{base:"",md:"500px"}}>
                    <Heading  mt={{base:"",md:"2rem"}} fontWeight={{base:"",md:"700"}} fontSize={{base:"1.5rem",md:"3rem"}}><Text color={"yellow.500"}> Discover what sets us apart.</Text>  Visit our projects section and experience the difference</Heading>
                    <Button padding={{base:"12px 40px",md:"15px 60px"}} border={"2px solid gray"} mt={{base:"2rem",md:"2rem"}}>View Projects</Button>
                </Box>
                <Box  boxSizing={{base:"border-box",md:"border-box"}} padding={{base:"",md:"0px 10px"}} border={"2px solid transprent"} width={{base:"100%",md:"45%"}} height={{base:"",md:"500px"}}>
                    <Image  mt={{base:"",md:"2rem"}} width={"90%"} src="http://ollis.like-themes.com/wp-content/uploads/2018/02/trends-01.png"/>
                </Box>
            </Flex>
        </Box>
    </Box>
    </>
  )
}

export default SixPorject