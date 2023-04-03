import React from "react";
import { Card, CardBody, Box, Stack, Text, Heading, Image, CardFooter } from '@chakra-ui/react'
import BookDetailModal from "./BookDetailModal";
import { StarIcon } from '@chakra-ui/icons'

const BookCards = ({ book }) => {
  const reviews = book.reviews
  const sum = reviews.reduce(
    (acc, currVal) => acc + currVal.rating, 
    0,
  )
  const avgRating = Math.floor(sum/reviews.length)

  return (
    <Card 
      size='sm'
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <Stack 
        spacing='auto'
      >
        <CardBody>
          <Box>
            <Image
              src={book.done_reading ? book.image : null}
            />
            <Heading size='sm'>{book.title}</Heading>
            <Text size='sm'>{book.author}</Text>
          </Box>
        </CardBody>
        <CardFooter>
          <Stack>
            <Text><b>{avgRating} <StarIcon color='yellow.500' /></b></Text>
            <BookDetailModal book={book} />
          </Stack>
        </CardFooter>
      </Stack>
    </Card>
  )
}

export default BookCards