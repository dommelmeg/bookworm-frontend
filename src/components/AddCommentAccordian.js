import React, { useState } from "react";
import { 
  Box,
  Text,
  Button, 
  useDisclosure, 
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

const AddCommentAccordian = () => {
  const [commentInput, setCommentInput] = useState('')
  const [ratingInput, setRatingInput] = useState(1)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleRatingChange = (e) => {
    setRatingInput(e)
  }

  const handleCommentChange = (e) => {
    setCommentInput(e.target.value)
  }

  const handleSubmit = () => {
    console.log(commentInput)
    console.log(ratingInput)
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