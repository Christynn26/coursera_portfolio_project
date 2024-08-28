import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useEffect } from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.\
  useEffect(() => {
    console.log(imageSrc);
  },[])
  return (
    <HStack spacing={10}>
      <VStack rounded='md' bg='#fff'>
        <Image src={imageSrc} objectFit='cover' borderRadius='x1' rounded='md'/>
        <VStack p={3} align='start'>
          <VStack align='start'>
            <Heading as='h5' size='sm' color="#333">{title}</Heading>
            <Text fontSize='xs' color='#999'>{description}</Text>
          </VStack>
          <HStack fontSize='xs' color='#111'>
            <Text>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size='xs'/>
          </HStack>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default Card;
