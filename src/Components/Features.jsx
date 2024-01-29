import { Box, Button, Heading, IconButton, SimpleGrid,Text } from '@chakra-ui/react'
import React from 'react'
import {  MdOutlineBedroomParent } from "react-icons/md";
import {GiFoodTruck,GiWindow,GiVineFlower} from 'react-icons/gi';
import {TiLightbulb} from "react-icons/ti";
import {FaBath} from "react-icons/fa";
import {ImFire} from "react-icons/im"
const Features = () => {
  return (
    <>
        <Box bgColor={"lightgray"} boxSizing={{base:"",md:"border-box"}} padding={{base:"",md:"30px"}} mt={{base:"3rem",md:"5rem"}} border={"2px solid transprent"} width={"98%"} margin={"auto"} height={{base:"",md:"930px"}}>
                <Box mt={{base:"",md:"3rem"}} width={"90%"} margin={"auto"}>
                <SimpleGrid columns={[1,2,4]} spacing={5}>
                    <Box textAlign={"left"} bg='lightgray' height='400px' boxSizing='border-box' padding={{base:"",md:"0px"}}>
                        <Heading mt={{base:"2rem",md:""}} color={{base:"black.700",md:""}}  lineHeight={{base:"60px",md:"50px"}} fontSize={{base:"3rem",md:"2.8rem"}}>Modern Ideas for Home</Heading>
                        <Text fontSize={"18px"} mt={{base:"1rem",md:"2rem"}}>Vestibulum augue tortor, consequat eu diam a, varius pulvinar ipsum. Vivamus posuere, mauris eu interdum molestie.</Text>
                        <Box>
                      <Button fontWeight={"600"} ml={{base:"0rem",md:"0rem"}} mt={{base:"2rem",md:"3rem"}} fontSize={"13px"} border={"2px solid black"} padding={"15px 50px"}>READ MORE  </Button>
                    </Box>
                    </Box>
                    <Box 
                    _hover={{
                        filter:"blur(0px)",
                        transform:"rotate(360deg)",
                        transition:"transform 0.5s ease-in-out",
                        bgImage:"https://images.unsplash.com/photo-1654682941242-7c6337f9a3dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGludGVyb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
                        bgRepeat:"no-repeat",
                        bgSize:"cover",
                        perspective:"1000px",
                        backfaceVisibility:"hidden",
                        cursor:"pointer",
                        color:"white",
                        
                    }}
                    textAlign={"center"} bg='white' height='400px' boxSizing='border-box' padding={{base:"50px",md:"50px"}}>
                        <IconButton fontSize={"9rem"} icon={<MdOutlineBedroomParent/>}></IconButton>
                        <Heading fontSize={{base:"2rem",md:"2rem"}}>Bedrooms</Heading>
                        <Text fontSize={{base:"18px"}} mt={{base:"",md:"1rem"}}>Vistiblum angue tuoror  ,concetw edem a,various palver ispuam</Text>
                    </Box>
                    <Box
                    
                    _hover={{
                        transform:"rotate(360deg)",
                        transition:"transform 0.5s ease-in-out",
                        bgImage:"https://images.unsplash.com/photo-1654682941242-7c6337f9a3dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGludGVyb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
                        bgRepeat:"no-repeat",
                        bgSize:"cover",
                        perspective:"1000px",
                        backfaceVisibility:"hidden",
                        cursor:"pointer",
                        color:"white"
                    }}textAlign={"center"} bg='white' height='400px' boxSizing='border-box' padding={{base:"50px",md:"50px"}}>
                        <IconButton fontSize={"9rem"} icon={<GiFoodTruck/>}></IconButton>
                        <Heading fontSize={{base:"2em",md:"2rem"}}>Kitchens</Heading>
                        <Text fontSize={{base:"18px",md:"14px"}} mt={{base:"",md:"1rem"}}>Vistiblum angue tuoror  ,concetw edem a,various palver ispuam</Text>
                    </Box>
                    <Box
                    _hover={{
                        transform:"rotate(360deg)",
                        transition:"transform 0.5s ease-in-out",
                        bgImage:"https://images.unsplash.com/photo-1654682941242-7c6337f9a3dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGludGVyb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
                        bgRepeat:"no-repeat",
                        bgSize:"cover",
                        perspective:"1000px",
                        backfaceVisibility:"hidden",
                        cursor:"pointer",
                        color:"white"
                    }} textAlign={"center"} bg='white' height='400px' boxSizing='border-box' padding={{base:"50px",md:"50px"}}>
                        <IconButton fontSize={"9rem"} icon={<TiLightbulb/>}></IconButton>
                        <Heading fontSize={{base:"2em",md:"2rem"}}>Lighting</Heading>
                        <Text fontSize={{base:"18px",md:"14px"}} mt={{base:"",md:"1rem"}}>Vistiblum angue tuoror  ,concetw edem a,various palver ispuam</Text>
                    </Box>
                    <Box
                    _hover={{
                        transform:"rotate(360deg)",
                        transition:"transform 0.5s ease-in-out",
                        bgImage:"https://images.unsplash.com/photo-1654682941242-7c6337f9a3dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGludGVyb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
                        bgRepeat:"no-repeat",
                        bgSize:"cover",
                        perspective:"1000px",
                        backfaceVisibility:"hidden",
                        cursor:"pointer",
                        color:"white"
                    }} textAlign={"center"} bg='white' height='400px' boxSizing='border-box' padding={{base:"50px",md:"50px"}}>
                        <IconButton fontSize={"9rem"} icon={<GiWindow/>}></IconButton>
                        <Heading fontSize={{base:"2em",md:"2rem"}}>Windows</Heading>
                        <Text fontSize={{base:"18px",md:"14px"}} mt={{base:"",md:"1rem"}}>Vistiblum angue tuoror  ,concetw edem a,various palver ispuam</Text>
                    </Box>
                    <Box
                    _hover={{
                        transform:"rotate(360deg)",
                        transition:"transform 0.5s ease-in-out",
                        bgImage:"https://images.unsplash.com/photo-1654682941242-7c6337f9a3dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGludGVyb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
                        bgRepeat:"no-repeat",
                        bgSize:"cover",
                        perspective:"1000px",
                        backfaceVisibility:"hidden",
                        cursor:"pointer",
                        color:"white"
                    }} textAlign={"center"} bg='white' height='400px' boxSizing='border-box' padding={{base:"50px",md:"50px"}}>
                        <IconButton fontSize={"9rem"} icon={<FaBath/>}></IconButton>
                        <Heading fontSize={{base:"2em",md:"2rem"}}>BathRooms</Heading>
                        <Text fontSize={{base:"18px",md:"14px"}} mt={{base:"",md:"1rem"}}>Vistiblum angue tuoror  ,concetw edem a,various palver ispuam</Text>
                    </Box>
                    <Box
                    _hover={{
                        transform:"rotate(360deg)",
                        transition:"transform 0.5s ease-in-out",
                        bgImage:"https://images.unsplash.com/photo-1654682941242-7c6337f9a3dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGludGVyb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
                        bgRepeat:"no-repeat",
                        bgSize:"cover",
                        perspective:"1000px",
                        backfaceVisibility:"hidden",
                        cursor:"pointer",
                        color:"white"
                    }} textAlign={"center"} bg='white' height='400px' boxSizing='border-box' padding={{base:"50px",md:"50px"}}>
                        <IconButton fontSize={"9rem"} icon={<GiVineFlower/>}></IconButton>
                        <Heading fontSize={{base:"2em",md:"2rem"}}>Decoration</Heading>
                        <Text fontSize={{base:"18px",md:"14px"}} mt={{base:"",md:"1rem"}}>Vistiblum angue tuoror  ,concetw edem a,various palver ispuam</Text>
                    </Box>
                    <Box
                    _hover={{
                        transform:"rotate(360deg)",
                        transition:"transform 0.5s ease-in-out",
                        bgImage:"https://images.unsplash.com/photo-1654682941242-7c6337f9a3dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGludGVyb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
                        bgRepeat:"no-repeat",
                        bgSize:"cover",
                        perspective:"1000px",
                        backfaceVisibility:"hidden",
                        cursor:"pointer",
                        color:"white"
                    }} textAlign={"center"} bg='white' height='400px' boxSizing='border-box' padding={{base:"50px",md:"50px"}}>
                        <IconButton fontSize={"9rem"} icon={<ImFire/>}></IconButton>
                        <Heading fontSize={{base:"2em",md:"2rem"}}>FirePlaces</Heading>
                        <Text fontSize={{base:"18px",md:"14px"}} mt={{base:"",md:"1rem"}}>Vistiblum angue tuoror  ,concetw edem a,various palver ispuam</Text>
                    </Box>
                </SimpleGrid>
                </Box>
        </Box>
    </>
  )
}

export default Features