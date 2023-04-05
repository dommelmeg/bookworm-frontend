import React, { useContext } from "react"
import { Box, Image, Input, Link, SimpleGrid, Text, HStack, Button } from '@chakra-ui/react'
import BookCards from "./BookCards"
import AddBookModal from "./AddBookModal"
import { AllBooksContext } from "../context/allBooks"

const WishList = () => {
  const { wishListBooks } = useContext(AllBooksContext)

  return(
    <Box boxShadow='base' p='6' rounded='lg' bg='white'> 
      <HStack spacing='auto' height='full' >
        <Text fontSize='3xl'>Wish List</Text>
        <AddBookModal />
      </HStack>
      
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(150px, 1fr))'>
        {wishListBooks.map((completedBook) => {
          return (
            <BookCards key={completedBook.id} book={completedBook} />
          )
        })}
      </SimpleGrid>
    </Box>
  )
}

export default WishList