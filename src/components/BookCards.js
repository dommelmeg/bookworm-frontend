import React from "react";
import { Card, CardBody, Box, Stack, Text, Heading, Image } from '@chakra-ui/react'
import BookDetailModal from "./BookDetailModal";

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
      <CardBody>
        <Stack 
          spacing='auto'
        >
          <Box>
            <Image
              src={book.done_reading ? book.image : null}
            />
            <Heading size='sm'>{book.title}</Heading>
            <Text size='sm'>{book.author}</Text>
            <Text><b>{avgRating} Stars</b></Text>
            <BookDetailModal />
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default BookCards