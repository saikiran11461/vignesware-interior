import { Box, Heading,SimpleGrid,Text,Image } from '@chakra-ui/react'
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Second = () => {
  return (
    <>
    <Box   width={{base:"100%", md:"98%"}} margin={"auto"} border={"2px solid transprent"} mt={"3rem"} mb={{base:"2rem", md:"4rem"}}>
        <Box  width={{base:"", md:"75%"}} margin={"auto"} textAlign={"center"} mb={{base:"20px",md:"3rem"}}>
            <Heading fontSize={{base:"3rem",md:"5rem"}}>What We Do</Heading>
            <Text fontSize={{base:"18", md:"2.5rem"}} mt={{base:"20px",md:""}}>Our design team works side by side with the production, and this organic synergy allows the creation of innovative designs.</Text>
        </Box>
        <Box>
        <SimpleGrid boxSizing={{base:"border-box", md:""}} padding={{base:"0px 10px", md:""}} columns={[1,3,3]} spacing={{base:"2", md:"0.5"}}>
            <Box bg={"lightgray"} color={"black"} height={{base:"360px",md:"340px"}}>
                <Image width={"100%"} objectFit={"cover"} height={"100%"} src='https://images.pexels.com/photos/13068357/pexels-photo-13068357.jpeg?auto=compress&cs=tinysrgb&w=800' />
            </Box>
            <Box  boxSizing={{base:"border-box", md:"border-box"}} padding={{base:"25px", md:"40px"}} bg={"lightgray"} color={"black"} height={{base:"360px",md:"340px"}}>
                <Heading fontSize={{base:"3rem", md:"2.7rem"}}>Planning</Heading>
                <Text fontSize={{base:"20px", md:"18px"}} mt={{base:'20px', md:"10px"}}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </Box>
            <Box  bg={"lightgray"} color={"black"} height={{base:"360px",md:"340px"}}>
                <Image width={"100%"} objectFit={"cover"} height={"100%"} src='https://images.pexels.com/photos/827518/pexels-photo-827518.jpeg?auto=compress&cs=tinysrgb&w=800' />
            </Box>
            <Box  boxSizing={{base:"border-box", md:"border-box"}} padding={{base:"25px", md:"40px"}} bg={"lightgray"} color={"black"} height={{base:"360px",md:"340px"}}>
                <Heading fontSize={{base:"3rem", md:"2.7rem"}}>Cozy Design</Heading>
                <Text fontSize={{base:"20px", md:"18px"}} mt={{base:'20px', md:"10px"}}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </Box>
            <Box  bg={"lightgray"} color={"black"} height={{base:"360px",md:"340px"}}>
                <Image src='https://images.unsplash.com/photo-1600697394936-59934aa5951f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2864&q=80' width={"100%"} objectFit={"cover"} height={"100%"}/>
            </Box>
            <Box  boxSizing={{base:"border-box", md:"border-box"}} padding={{base:"25px", md:"40px"}} bg={"lightgray"} color={"black"} height={{base:"360px",md:"340px"}}>
                <Heading fontSize={{base:"2.5rem", md:"2.7rem"}}> Concepts</Heading>
                <Text fontSize={{base:"20px", md:"18px"}} mt={{base:'20px', md:"10px"}}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </Box>
            <Box  bg={"lightgray"} color={"black"} height={{base:"360px",md:"340px"}}>
                <Image width={"100%"} objectFit={"cover"} height={"100%"} src='https://images.pexels.com/photos/5570224/pexels-photo-5570224.jpeg?auto=compress&cs=tinysrgb&w=800' />
            </Box>
            <Box  boxSizing={{base:"border-box", md:"border-box"}} padding={{base:"25px", md:"40px"}} bg={"black"} color={"white"} height={{base:"360px",md:"340px"}}>
                <Heading fontSize={{base:"3rem", md:"2.7rem"}}>Furniture</Heading>
                <Text fontSize={{base:"20px", md:"18px"}} mt={{base:'20px', md:"10px"}}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </Box>
            <Box  bg={"lightgray"} color={"black"} height={{base:"360px",md:"340px"}}>
                <Image width={"100%"} objectFit={"cover"} height={"100%"} src="https://images.pexels.com/photos/3201761/pexels-photo-3201761.jpeg?auto=compress&cs=tinysrgb&w=800" />
            </Box>
        </SimpleGrid>
        </Box>
    </Box>
    </>
  )
}

export default Second