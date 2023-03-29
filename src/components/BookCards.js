import React from "react";
import { Card, CardBody, Box, Stack, Text, Heading, Image } from '@chakra-ui/react'

const BookCards = ({ book }) => {
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
            <Image />
            <Heading size='sm'>{book.title}</Heading>
            <Text size='sm'>{book.author}</Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default BookCards