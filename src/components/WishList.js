import React from "react"
import { Box, Image, Input, Link, SimpleGrid, Text, HStack, Button } from '@chakra-ui/react'
import BookCards from "./BookCards"

const WishList = ({ books }) => {
  return(
    <Box boxShadow='md' p='6' rounded='md' bg='white'> 
      <HStack spacing='auto' height='full' >
        <Text fontSize='3xl'>Wish List</Text>
        <Button variant='ghost'>+</Button>
      </HStack>
      
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {books.filter((book) => book.done_reading === false).map((completedBook) => {
          return (
            <BookCards key={completedBook.id} book={completedBook} />
          )
        })}
      </SimpleGrid>
    </Box>
  )
}

export default WishList