import React from "react";
import { Box, Image, Input, Link, SimpleGrid, Text, HStack, Button } from '@chakra-ui/react'
import BookCards from "./BookCards";

const CompletedBooks = () => {
  return(
    <Box boxShadow='md' p='6' rounded='md' bg='white'>
      <HStack spacing='auto' height='full' >
        <Text fontSize='3xl'>Completed Books</Text>
        <Button variant='ghost'>+</Button>
      </HStack>
      <hr></hr>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
        
      </SimpleGrid>
    </Box>
  )
}

export default CompletedBooks