import React from "react";
import CommentCard from "./CommentCard";
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
  GridItem,
  Flex
} from '@chakra-ui/react'
import { StarIcon, DeleteIcon } from '@chakra-ui/icons'



const BookDetailModal = ({ book }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)

  const reviews = book.reviews
  const sum = reviews.reduce(
    (acc, currVal) => acc + currVal.rating, 
    0,
  )
  const avgRating = Math.floor(sum/reviews.length)

  const handleDoneReadingClick = () => {
    console.log(book.done_reading)
  }

  const handleDeleteButton = () => {
    fetch(`http://localhost:9292/books/${book.id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then((r) => r.json())
    //FIX THIS FILTER OUT THIS BOOK & UPDATE STATE & USE CONTEXT YA DUMMY
    .then((deletedBook) => console.log(deletedBook));
  }

  return (
    <>
      <Button mt={4} onClick={onOpen} size='sm' >
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
                  <Text fontSize='lg'>
                    {book.author}
                  </Text>
                </Box>
                
                <Box paddingTop={3}>
                  <Text fontSize='xs'>
                    Genre
                  </Text>
                  <Text fontSize='lg'>
                    {book.genre}
                  </Text>
                  {book.done_reading ? null : <Button marginTop={4} onClick={handleDoneReadingClick}>Done Reading!</Button>}
                </Box>
              </GridItem>

              <GridItem colSpan={3} rowSpan={1}>
                <Text fontSize='xl'><b>Comments</b> 
                  <Button size='sm' variant='ghost' onClick={onOpen}> + </Button>
                </Text>
                <Flex>
                  {!avgRating && <em>No Reviews Yet</em>}
                  {avgRating > 0 && <StarIcon color='yellow.500' />}
                  {avgRating > 1 && <StarIcon color='yellow.500' />}
                  {avgRating > 2 && <StarIcon color='yellow.500' />}
                  {avgRating > 3 && <StarIcon color='yellow.500' />}
                  {avgRating > 4 && <StarIcon color='yellow.500' />}
                </Flex>
                <Divider paddingTop={2} />
                <CommentCard reviews={reviews} />
              </GridItem>
            </Grid>
          </ModalBody>

          <ModalFooter>
            {/* <Button variant='ghost'>Edit Book</Button> */}
            <Button colorScheme='teal' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button margin={2} variant='ghost' onClick={handleDeleteButton} ><DeleteIcon /></Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default BookDetailModal