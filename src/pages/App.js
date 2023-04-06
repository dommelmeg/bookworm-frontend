import React, { useEffect, useState, useContext } from 'react';
import '../App.css';
import { ChakraProvider, Grid, GridItem, Box, Text, Alert, AlertIcon } from '@chakra-ui/react'
import Header from '../components/Header';
import WishList from '../components/WishList';
import CompletedBooks from '../components/CompletedBooks';
import {  AllBooksContext } from '../context/allBooks';


function App() {
  const { books, setBooks } = useContext(AllBooksContext)

  useEffect(() => {
    fetch('http://localhost:9292/books')
    .then((r) => r.json())
    .then((books) => setBooks(books))
  }, [])

  const getAlertComment = () => {
    const totalBooksRead = books.filter((book) => book.done_reading === true).length

    let text

    if (totalBooksRead <= 0) {
      text = `Yikes, I thought you liked to read... you've only read ${totalBooksRead} books...`
    } else if (totalBooksRead > 0 && totalBooksRead <= 5) {
      text = `You're on the road to greatness, you've read ${totalBooksRead} books so far!`
    } else if (totalBooksRead > 5 && totalBooksRead <= 25) {
      text = `Wow, great job! You've read ${totalBooksRead} books so far!`
    } else if (totalBooksRead > 25 && totalBooksRead <= 50) {
      text = `Amazing! You've read ${totalBooksRead} books so far!`
    } else if (totalBooksRead > 50 && totalBooksRead <= 100) {
      text = `ROCKSTAR, keep it up! You've read ${totalBooksRead} books so far!`
    } else if (totalBooksRead > 100) {
      text = `Okay, we can't even keep up with you! You've read ${totalBooksRead} books so far!`
    } else {
      text = 'Keep on reading you little bookworm!'
    }
    return text
  }
  
  return (
      <ChakraProvider>

        <Grid
          padding='10'
          paddingTop='6'
          height='3xl'
          templateRows='repeat(7, 1fr)'
          templateColumns='repeat(3, 1fr)'
          gap={10}
          >
          <GridItem colSpan={3} rowSpan={1}>
            <Header />
          </GridItem>

          <GridItem colSpan={2} rowSpan={1}>
            <Alert status='info' colorScheme='gray'>
              <AlertIcon />
              {getAlertComment()}
            </Alert>
          </GridItem>

          <GridItem colSpan={1} rowSpan={6}>
            <WishList />
          </GridItem>

          <GridItem colSpan={2} rowSpan={6}>
            <CompletedBooks />
          </GridItem>
        </Grid>

      </ChakraProvider>
  );
}

export default App;
