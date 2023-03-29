import React, { useEffect, useState } from "react";
import { Box, Image, Input, Link, SimpleGrid, Text, HStack, Button } from '@chakra-ui/react'
import BookCards from "./BookCards";
import AddBookModal from "./AddBookModal";

const CompletedBooks = ({ books }) => {

  return(
    <Box>
      <HStack spacing='auto' height='full' >
        <Text fontSize='3xl'>Completed Books</Text>
        <AddBookModal />
      </HStack>

      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(175px, 1fr))'>
        {books.filter((book) => book.done_reading === true).map((completedBook) => {
          return (
            <BookCards key={completedBook.id} book={completedBook} />
          )
        })}
      </SimpleGrid>
    </Box>
  )
}


export default CompletedBooks