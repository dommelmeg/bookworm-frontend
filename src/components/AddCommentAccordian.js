import React, { useState } from "react";
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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Input,
} from '@chakra-ui/react'

const AddCommentAccordian = () => {
  const [comment, setComment] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleChange = () => {
    setComment(comment)
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
        <NumberInput defaultValue={0} min={0} max={5}>
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
          />
        </Box>

        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default AddCommentAccordian