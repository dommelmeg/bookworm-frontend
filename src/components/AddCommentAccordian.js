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
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react'

const AddCommentAccordian = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    // <Button size='sm' variant='ghost' onClick={onOpen}> + </Button>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default AddCommentAccordian