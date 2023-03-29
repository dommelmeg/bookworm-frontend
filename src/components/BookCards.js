import React from "react";
import { Card, CardBody, Box, Stack, Text, Heading, Image } from '@chakra-ui/react'

const BookCards = ({ book }) => {

  
  // console.log(book.reviews)

  const reviews = book.reviews

  const sum = reviews.reduce(
    (acc, currVal) => acc + currVal.rating, 
    0,
  )

  const avgRating = Math.floor(sum/reviews.length)

//   const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
// const sum = objects.reduce(
//   (accumulator, currentValue) => accumulator + currentValue.x,
//   0,
// );

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
            <Text>{avgRating} Stars</Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default BookCards