import React, { useState, useContext } from "react";
import { AllBooksContext } from "../context/allBooks";
import { 
  Box,
  Text,
  Button, 
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Input,
  Flex,
} from '@chakra-ui/react'

const AddCommentAccordian = ({ bookId }) => {
  const [commentInput, setCommentInput] = useState('')
  const [ratingInput, setRatingInput] = useState(1)
  const { books, setBooks } = useContext(AllBooksContext)

  const handleRatingChange = (e) => {
    setRatingInput(e)
  }

  const handleCommentChange = (e) => {
    setCommentInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      rating: ratingInput,
      comment: commentInput,
      book_id: bookId,
    }

    fetch('http://localhost:9292/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((r) => r.json())
      .then(() => fetch('http://localhost:9292/books')
        .then((r) => r.json())
        .then((books) => setBooks(books)))

    setRatingInput()
    setCommentInput('')
  }

  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
              Add a Review
            </Box>
            +
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>

        <Text fontSize='xs'>Rating</Text>
        <NumberInput 
          defaultValue={1} min={1} max={5}
          value={ratingInput}
          onChange={handleRatingChange}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <Box paddingTop={2}>
          <Text fontSize='xs'>Comment</Text>
          <Input 
            placeholder='Leave a comment'
            value={commentInput}
            onChange={handleCommentChange}
          />
        </Box>

        <Flex>
          <Button 
            marginTop='2'
            onClick={handleSubmit}
          >
            Save
          </Button>
          <AccordionButton 
            fontSize='xs' 
            marginTop='2'
          >
            Cancel
          </AccordionButton>
        </Flex>

        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default AddCommentAccordian