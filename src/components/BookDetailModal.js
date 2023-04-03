import React from "react";
import { 
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Image,
  Text,
  Grid,
  Divider,
  ModalCloseButton, 
  Button, 
  useDisclosure, 
  GridItem 
} from '@chakra-ui/react'
import CommentCard from "./CommentCard";
import { StarIcon } from '@chakra-ui/icons'



const BookDetailModal = ({ book }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)

  const reviews = book.reviews
  const sum = reviews.reduce(
    (acc, currVal) => acc + currVal.rating, 
    0,
  )
  const avgRating = Math.floor(sum/reviews.length)

  return (
    <>
      <Button mt={4} onClick={onOpen}>
        More Details
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{book.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid
              templateRows='repeat(2, 1fr)'
              templateColumns='repeat(3, 1fr)'
              gap={3}
            >
              <GridItem colSpan={1} rowSpan={1}>
                <Image 
                  src={book.image}
                />
              </GridItem>

              <GridItem colSpan={2} rowSpan={1}>
                <Box>
                  <Text fontSize='xs'>
                    Author
                  </Text>
                  <Text fontSize='lg' >
                    {book.author}
                  </Text>
                </Box>
                
                <Divider />

                <Box>
                  <Text fontSize='xs'>
                    Genre
                  </Text>
                  <Text fontSize='lg'>
                    {book.genre}
                  </Text>
                </Box>
              </GridItem>

              <GridItem colSpan={3} rowSpan={1}>
                <Text fontSize='xs'>
                  Average Rating: {avgRating} <StarIcon color='yellow.500' />
                </Text>
                <CommentCard reviews={reviews} />
              </GridItem>
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost'>Edit</Button>
            <Button variant='ghost'>Delete Book</Button>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default BookDetailModal