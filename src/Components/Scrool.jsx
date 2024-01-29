"use client"
import { Box } from "@chakra-ui/react";
import { useRef ,useEffect} from "react";

const Scrool = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;

    if (container && text) {
      const scrollWidth = text.clientWidth - container.clientWidth;
      const animationDuration = scrollWidth * 10; // Adjust the duration as needed

      text.style.animation = `scroll ${animationDuration}ms linear infinite`;

      return () => {
        // Clean up animation on component unmount
        text.style.animation = "none";
      };
    }
  }, []);

  return (
    <Box ref={containerRef} overflow="hidden" w="100%">
      <Box ref={textRef} whiteSpace="nowrap">
        This is scrolling text in Chakra UI.
      </Box>
    </Box>
  );
};

export default Scrool;
