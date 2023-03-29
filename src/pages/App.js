import React, { useEffect, useState } from 'react';
import '../App.css';
import { ChakraProvider, Grid, GridItem, Box, Text } from '@chakra-ui/react'
import Header from '../components/Header';
import WishList from '../components/WishList';
import CompletedBooks from '../components/CompletedBooks';


function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/books')
    .then((r) => r.json())
    .then((books) => setBooks(books))
  }, [])

  return (
    <ChakraProvider>
      <Grid
        padding='6'
        height='3xl'
        templateRows='repeat(7, 1fr)'
        templateColumns='repeat(3, 1fr)'
        gap={10}
      >
        <GridItem colSpan={3} rowSpan={1}>
          <Header books={books} />
        </GridItem>
        <GridItem colSpan={2} rowSpan={6}>
          <CompletedBooks books={books} />
        </GridItem>
        <GridItem colSpan={1} rowSpan={6}>
          <WishList books={books} />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
