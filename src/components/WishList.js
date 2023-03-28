import React from "react"
import { Box, Image, Input, Link, SimpleGrid, Text, HStack, Button } from '@chakra-ui/react'
import BookCards from "./BookCards"

const WishList = () => {
  return(
    <Box boxShadow='md' p='6' rounded='md' bg='white'> 
      <HStack spacing='auto' height='full' >
        <Text fontSize='3xl'>Wish List</Text>
        <Button variant='ghost'>+</Button>
      </HStack>
      <hr></hr>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
        <Link>
          - Harry Potter
        </Link>
        <Link>
          - Lord of the Rings
        </Link>
      </SimpleGrid>
    </Box>
  )
}

export default WishList