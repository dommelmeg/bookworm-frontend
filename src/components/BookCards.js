import React from "react";
import { Card, CardBody, Box, Stack, Text, Heading, Image, CardFooter } from '@chakra-ui/react'
import BookDetailModal from "./BookDetailModal";
import Stars from "./Stars";

const BookCards = ({ book }) => {
  const { done_reading, image, title, author } = book

  return (
    <Card 
      size='sm'
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <Stack spacing='auto'>
        <CardBody>
          <Box>
            <Image src={done_reading ? image : null} />
            <Heading paddingTop={done_reading? 3 : 0} size='sm'>{title}</Heading>
            <Text size='sm'>{author}</Text>
          </Box>
        </CardBody>
        <CardFooter>
          <Stack>
            <Stars book={book} />
            <BookDetailModal book={book} />
          </Stack>
        </CardFooter>
      </Stack>
    </Card>
  )
}

export default BookCards