import { Box, Heading,Text } from '@chakra-ui/react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay  from 'react-awesome-slider/dist/autoplay.js';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);



const ThreeSilder = () => {

  return (
    <>
<Box 
mt={{base:"2rem",md:""}}
height={{base:"350px",md:"810px"}}
width={{base:"98%", md:"98%"}} m={"auto"} bgColor={"lightgray"}>
  {/* <Box  padding={{base:"30px 0px", md:"40px 0px"}} textAlign={{base:"center",md:"center"}} >
    <Heading color={"black"} fontSize={{base:"23px",md:"3rem"}} lineHeight={{base:"",md:"4rem"}}><Text fontSize={{base:"37px"}} color={"yellow.600"}>We create projects</Text> from visualization to finished interior</Heading>
  </Box> */}
    <Box  width={{base:"99%", md:"95%"}} m={"auto"} height={{base:"400px",md:"400px"}} border={{base:"",md:""}} mt={{base:"",md:"2rem"}}>

    <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={3000}
  >
    <div data-src="https://images.pexels.com/photos/4819708/pexels-photo-4819708.jpeg?auto=compress&cs=tinysrgb&w=800" />
    <div data-src="https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg?auto=compress&cs=tinysrgb&w=800" />
    <div data-src="https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=800" />
  </AutoplaySlider> 
    </Box>    
    </Box> 
      
   
    </>
  )
}

export default ThreeSilder