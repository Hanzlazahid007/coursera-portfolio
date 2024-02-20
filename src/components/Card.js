import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (<>
  <VStack 
  backgroundColor={"white"}
  borderRadius={10}
  align='stretch'
  spacing={5}
  >
    <Image height={350} borderRadius={10} src={imageSrc} /> 
    <VStack spacing={4} >
    <Heading 
    pl={4}
    alignSelf={"start"}
    color={"black"} 
    size="md"
    >{title}</Heading>

    <Text pl={4} pr={10} color={"grey"} fontSize='medium' >{description}</Text>
    <Text alignSelf={"start"} pl={4} pb={4} color={"black"} >See more <FontAwesomeIcon icon={faArrowRight} /></Text>
    </VStack>
    </VStack>
    </>
  );
};

export default Card;
