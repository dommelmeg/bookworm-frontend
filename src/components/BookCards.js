import React from "react";
import { Card, CardBody, Box, Stack, Text, Heading, Image, CardFooter, Flex } from '@chakra-ui/react'
import BookDetailModal from "./BookDetailModal";
import Stars from "./Stars";

const BookCards = ({ book }) => {

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
            <Image src={book.done_reading ? book.image : null} />
            <Heading paddingTop={book.done_reading? 3 : 0} size='sm'>{book.title}</Heading>
            <Text size='sm'>{book.author}</Text>
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