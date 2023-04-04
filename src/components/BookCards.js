import React from "react";
import { Card, CardBody, Box, Stack, Text, Heading, Image, CardFooter, Flex } from '@chakra-ui/react'
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
            <Heading paddingTop={book.done_reading? 3 : 0} size='sm'>{book.title}</Heading>
            <Text size='sm'>{book.author}</Text>
          </Box>
        </CardBody>
        <CardFooter>
          <Stack>
            <Flex>
              {!avgRating && <em>No Reviews Yet</em>}
              {avgRating > 0 && <StarIcon color='yellow.500' />}
              {avgRating > 1 && <StarIcon color='yellow.500' />}
              {avgRating > 2 && <StarIcon color='yellow.500' />}
              {avgRating > 3 && <StarIcon color='yellow.500' />}
              {avgRating > 4 && <StarIcon color='yellow.500' />}
            </Flex>
            <BookDetailModal book={book} />
          </Stack>
        </CardFooter>
      </Stack>
    </Card>
  )
}

export default BookCards