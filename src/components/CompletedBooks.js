import React, { useContext } from "react";
import { Box, SimpleGrid, Text, HStack } from '@chakra-ui/react'
import BookCards from "./BookCards";
import AddBookModal from "./AddBookModal";
import { AllBooksContext } from "../context/allBooks";

const CompletedBooks = () => {
  const { completedBooks } = useContext(AllBooksContext)

  return(
    <Box>
      <HStack spacing='auto' height='full' >
        <Text fontSize='3xl'>Completed Books</Text>
        <AddBookModal />
      </HStack>

      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(175px, 1fr))'>
        {completedBooks.map((completedBook) => {
          return (
            <BookCards key={completedBook.id} book={completedBook} />
          )
        })}
      </SimpleGrid>
    </Box>
  )
}


export default CompletedBooks