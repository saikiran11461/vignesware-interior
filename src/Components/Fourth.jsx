import { Box, Button, Flex, Heading,Text,Image } from '@chakra-ui/react'
import React from 'react'

const Fourth = () => {
  return (
    <>
    <Box
    bgImage={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtMAAAGnCAYAAAB1r9t7AAAMR0lEQVR4nO3bMW6EMABFQeAUPhzH%0D%0A46DRFkhu8+QKz5QpXmRXX9ZyjjGO4zju4zieYx09PT09PT09PT29z/d+Y/qe/rjiH+jp6enp6enp%0D%0A6elt0bum4Kqlrqenp6enp6enp7dF7/2ZBwAA8E+XCwMAgMaYBgCAyJgGAIDImAYAgMiYBgCAyJgG%0D%0AAIDImAYAgMiYBgCAyJgGAIDImAYAgMiYBgCAyJgGAIDImAYAgMiYBgCAyJgGAIDImAYAgOgd0/fi%0D%0AC9TT09PT09PT09P7fO8cY8wHfxYfXE9PT09PT09PT++zvWsKrggfenp6enp6enp6erv0fi/Ti5oA%0D%0AALAXHyACAEBkTAMAQGRMAwBAZEwDAEBkTAMAQGRMAwBAZEwDAEBkTAMAQGRMAwBAZEwDAEBkTAMA%0D%0AQGRMAwBAZEwDAEBkTAMAQGRMAwBAZEwDAED0jul78QXq6enp6enp6enpfb53jjHmgz+LD66np6en%0D%0Ap6enp6f32d41BVeEDz09PT09PT09Pb1der+X6UVNAADYiw8QAQAgMqYBACAypgEAIDKmAQAgMqYB%0D%0AACAypgEAIDKmAQAgMqYBACAypgEAIDKmAQAgMqYBACAypgEAIDKmAQAgMqYBACAypgEAIDKmAQAg%0D%0Aesf0vfgC9fT09PT09PT09D7fO8cY88GfxQfX09PT09PT09PT+2zvmoIrwoeenp6enp6enp7eLr3f%0D%0Ay/SiJgAA7MUHiAAAEBnTAAAQGdMAABAZ0wAAEBnTAAAQGdMAABAZ0wAAEBnTAAAQGdMAABAZ0wAA%0D%0AEBnTAAAQGdMAABAZ0wAAEBnTAAAQGdMAABAZ0wAAEL1j+l58gXp6enp6enp6enqf751jjPngz+KD%0D%0A6+np6enp6enp6X22d03BFeFDT09PT09PT09Pb5fe72V6URMAAPbiA0QAAIiMaQAAiIxpAACIjGkA%0D%0AAIiMaQAAiIxpAACIjGkAAIiMaQAAiIxpAACIjGkAAIiMaQAAiIxpAACIjGkAAIiMaQAAiIxpAACI%0D%0AjGkAAIjeMX0vvkA9PT09PT09PT29z/fOMcZ88GfxwfX09PT09PT09PQ+27um4Irwoaenp6enp6en%0D%0Ap7dL7/cyvagJAAB78QEiAABExjQAAETGNAAARMY0AABExjQAAETGNAAARMY0AABExjQAAETGNAAA%0D%0ARMY0AABExjQAAETGNAAARMY0AABExjQAAETGNAAARMY0AABE75i+F1+gnp6enp6enp6e3ud75xhj%0D%0APviz+OB6enp6enp6enp6n+1dU3BF+NDT09PT09PT09Pbpfd7mV7UBACAvfgAEQAAImMaAAAiYxoA%0D%0AACJjGgAAImMaAAAiYxoAACJjGgAAImMaAAAiYxoAACJjGgAAImMaAAAiYxoAACJjGgAAImMaAAAi%0D%0AYxoAACJjGgAAondM34svUE9PT09PT09PT+/zvXOMMR/8WXxwPT09PT09PT09vc/2rim4Inzo6enp%0D%0A6enp6enp7dL7vUwvagIAwF58gAgAAJExDQAAkTENAACRMQ0AAJExDQAAkTENAACRMQ0AAJExDQAA%0D%0AkTENAACRMQ0AAJExDQAAkTENAACRMQ0AAJExDQAAkTENAACRMQ0AANE7pu/FF6inp6enp6enp6f3%0D%0A+d45xpgP/iw+uJ6enp6enp6ent5ne9cUXBE+9PT09PT09PT09Hbp/V6mFzUBAGAvPkAEAIDImAYA%0D%0AgMiYBgCAyJgGAIDImAYAgMiYBgCAyJgGAIDImAYAgMiYBgCAyJgGAIDImAYAgMiYBgCAyJgGAIDI%0D%0AmAYAgMiYBgCAyJgGAIDoHdP34gvU09PT09PT09PT+3zvHGPMB38WH1xPT09PT09PT0/vs71rCq4I%0D%0AH3p6enp6enp6enq79H4v04uaAACwFx8gAgBAZEwDAEBkTAMAQGRMAwBAZEwDAEBkTAMAQGRMAwBA%0D%0AZEwDAEBkTAMAQGRMAwBAZEwDAEBkTAMAQGRMAwBAZEwDAEBkTAMAQGRMAwBA9I7pe/EF6unp6enp%0D%0A6enp6X2+d44x5oM/iw+up6enp6enp6en99neNQVXhA89PT09PT09PT29XXq/l+lFTQAA2IsPEAEA%0D%0AIDKmAQAgMqYBACAypgEAIDKmAQAgMqYBACAypgEAIDKmAQAgMqYBACAypgEAIDKmAQAgMqYBACAy%0D%0ApgEAIDKmAQAgMqYBACAypgEAIHrH9L34AvX09PT09PT09PQ+3zvHGPPBn8UH19PT09PT09PT0/ts%0D%0A75qCK8KHnp6enp6enp6e3i6938v0oiYAAOzFB4gAABAZ0wAAEBnTAAAQGdMAABAZ0wAAEBnTAAAQ%0D%0AGdMAABAZ0wAAEBnTAAAQGdMAABAZ0wAAEBnTAAAQGdMAABAZ0wAAEBnTAAAQGdMAABC9Y/pefIF6%0D%0Aenp6enp6enp6n++dY4z54M/ig+vp6enp6enp6el9tndNwRXhQ09PT09PT09PT2+X3u9lelETAAD2%0D%0A4gNEAACIjGkAAIiMaQAAiIxpAACIjGkAAIiMaQAAiIxpAACIjGkAAIiMaQAAiIxpAACIjGkAAIiM%0D%0AaQAAiIxpAACIjGkAAIiMaQAAiIxpAACI3jF9L75APT09PT09PT09vc/3zjHGfPBn8cH19PT09PT0%0D%0A9PT0Ptu7puCK8KGnp6enp6enp6e3S+/3Mr2oCQAAe/EBIgAARMY0AABExjQAAETGNAAARMY0AABE%0D%0AxjQAAETGNAAARMY0AABExjQAAETGNAAARMY0AABExjQAAETGNAAARMY0AABExjQAAETGNAAARO+Y%0D%0AvhdfoJ6enp6enp6ent7ne+cYYz74s/jgenp6enp6enp6ep/tXVNwRfjQ09PT09PT09PT26X3e5le%0D%0A1AQAgL34ABEAACJjGgAAImMaAAAiYxoAACJjGgAAImMaAAAiYxoAACJjGgAAImMaAAAiYxoAACJj%0D%0AGgAAImMaAAAiYxoAACJjGgAAImMaAAAiYxoAAKJ3TN+LL1BPT09PT09PT0/v871zjDEf/Fl8cD09%0D%0APT09PT09Pb3P9q4puCJ86Onp6enp6enp6e3S+71ML2oCAMBefIAIAACRMQ0AAJExDQAAkTENAACR%0D%0AMQ0AAJExDQAAkTENAACRMQ0AAJExDQAAkTENAACRMQ0AAJExDQAAkTENAACRMQ0AAJExDQAAkTEN%0D%0AAADRO6bvxReop6enp6enp6en9/neOcaYD/4sPrienp6enp6enp7eZ3vXFFwRPvT09PT09PT09PR2%0D%0A6f1ephc1AQBgLz5ABACAyJgGAIDImAYAgMiYBgCAyJgGAIDImAYAgMiYBgCAyJgGAIDImAYAgMiY%0D%0ABgCAyJgGAIDImAYAgMiYBgCAyJgGAIDImAYAgMiYBgCA6B3T9+IL1NPT09PT09PT0/t87xxjzAd/%0D%0AFh9cT09PT09PT09P77O9awquCB96enp6enp6enp6u/R+L9OLmgAAsBcfIAIAQGRMAwBAZEwDAEBk%0D%0ATAMAQGRMAwBAZEwDAEBkTAMAQGRMAwBAZEwDAEBkTAMAQGRMAwBAZEwDAEBkTAMAQGRMAwBAZEwD%0D%0AAEBkTAMAQPSO6XvxBerp6enp6enp6el9vneOMeaDP4sPrqenp6enp6enp/fZ3jUFV4QPPT09PT09%0D%0APT09vV16v5fpRU0AANiLDxABACAypgEAIDKmAQAgMqYBACAypgEAIDKmAQAgMqYBACAypgEAIDKm%0D%0AAQAgMqYBACAypgEAIDKmAQAgMqYBACAypgEAIDKmAQAgMqYBACB6x/S9+AL19PT09PT09PT0Pt87%0D%0AxxjzwZ/FB9fT09PT09PT09P7bO+agivCh56enp6enp6ent4uvd/L9KImAADsxQeIAAAQGdMAABAZ%0D%0A0wAAEBnTAAAQGdMAABAZ0wAAEBnTAAAQGdMAABAZ0wAAEBnTAAAQGdMAABAZ0wAAEBnTAAAQGdMA%0D%0AABAZ0wAAEBnTAAAQvWP6XnyBenp6enp6enp6ep/vnWOM+eDP4oPr6enp6enp6enpfbZ3TcEV4UNP%0D%0AT09PT09PT09vl97vZXpREwAA9uIDRAAAiIxpAACIjGkAAIiMaQAAiIxpAACIjGkAAIiMaQAAiIxp%0D%0AAACIjGkAAIiMaQAAiIxpAACIjGkAAIiMaQAAiIxpAACIjGkAAIiMaQAAiN4xfS++QD09PT09PT09%0D%0APb3P984xxnzwZ/HB9fT09PT09PT09D7bu6bgivChp6enp6enp6ent0XvOJ4/THx/D4Q59A8AAAAA%0D%0ASUVORK5CYII="}
    boxSizing={{base:"border-box", md:""}} padding={{base:"10px",md:""}}  width={{base:"100%", md:"98%"}} margin={"auto"} mt={{base:"3rem",md:"8rem"}} height={{base:"", md:"730px"}} >
        <Box border={"2px solid transprent"} width={{base:"", md:"90%"}} margin={{base:"", md:"auto"}} pt={{base:"50px",md:"50px"}}>
          <Flex  flexDirection={{base:"column", md:"row"}} gap={"20px"}>
            <Box bgColor={"white"}  height={"auto"} width={{base:"100%",md:"55%"}} border={"2px solid transprent"} >
              <Heading fontWeight={600} lineHeight={{base:"40px",md:"50px"}}  fontSize={{base:"1.9rem",md:"2.5rem"}}> <Text color={"yellow.500"}>Creative Solutions</Text>by Professional Designers</Heading>
              <Text mt={{base:"1rem", md:'1rem'}} fontSize={{base:"13px", md:"16px"}} fontWeight={500}>Cras vel cursus libero. Vestibulum porttitor nunc enim, quis congue leo fringilla ut. Quisque in lacus lacus. Nunc malesuada nisi at porta convallis. In posuere interdum erat, et bibendum arcu. Etiam quis viverra diam.</Text>
              <Flex direction={{base:"column",md:"row"}}  gap={{base:"",md:"20px"}} mt={{base:"30px", md:"1.5rem"}}>
                <Box _hover={{
                  transform: "scale(1.1)",
                  cursor: "pointer",
                  transition:"transform 0.3s ease-in-out",
                  borderRadius:"14px"
                }} border={"2px solid transprent"} width={{base:"100%", md:"35%"}} height={{base:"",md:"280px"}} >
                  <Image width={"100%"} height={"100%"} src='http://ollis.like-themes.com/wp-content/uploads/2018/02/main_ABOUT_01.jpg'/>
                </Box>
                <Box
                _hover={{
                  transform: "scale(1.1)",
                  cursor: "pointer",
                  transition:"transform 0.3s ease-in-out",
                  borderRadius:"14px"
                }} border={"2px solid transprent"}  width={{base:"100%", md:"35%"}} height={{base:"",md:"280px"}}>
                  <Image width={"100%"} height={"100%"} src='http://ollis.like-themes.com/wp-content/uploads/2018/02/main_ABOUT_02.jpg'/>
                </Box>
                <Box
                _hover={{
                  transform: "scale(1.1)",
                  cursor: "pointer",
                  transition:"transform 0.3s ease-in-out",
                  borderRadius:"14px"
                }} border={"2px solid transprent"}  width={{base:"100%", md:"35%"}} height={{base:"",md:"280px"}}>
                  <Image width={"100%"} height={"100%"} src='http://ollis.like-themes.com/wp-content/uploads/2018/02/main_ABOUT_03.jpg' />
                </Box>
              </Flex>
                    <Box>
                      <Button ml={{base:"8rem",md:"0rem"}} mt={{base:"2rem",md:"2.5rem"}} fontSize={"13px"} border={"1px solid gray"} padding={"12px 40px"}>READ MORE  </Button>
                    </Box>
            </Box>
            <Box  width={{base:"100%",md:"45%"}} border={"2px solid transprent"}>
              <Image display={{base:"none",md:"block"}} height={"630px"} width={"100%"} src='http://ollis.like-themes.com/wp-content/uploads/2018/02/main_ABOUT_BIG.jpg'/>
            </Box>
          </Flex>
        </Box>
    </Box>
    
    </>
  )
}

export default Fourth