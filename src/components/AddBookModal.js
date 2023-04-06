import React, { useState, useContext } from "react";
import { AllBooksContext } from "../context/allBooks";
import { Input, Modal, useDisclosure, Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, ModalFooter, Checkbox } from '@chakra-ui/react'

const AddBookModal = () => {
  const [titleInput, setTitleInput] = useState('')
  const [authorInput, setAuthorInput] = useState('')
  const [genreInput, setGenreInput] = useState('')
  const [imageInput, setImageInput] = useState('')
  const [hasReadInput, setHasReadInput] = useState(false)

  const { books, setBooks } = useContext(AllBooksContext)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const handleTitleChange = (e) => {
    setTitleInput(e.target.value)
  }

  const handleAuthorChange = (e) => {
    setAuthorInput(e.target.value)
  }

  const handleGenreChange = (e) => {
    setGenreInput(e.target.value)
  }

  const handleImageChange = (e) => {
    setImageInput(e.target.value)
  }

  const handleCheckboxChange = () => {
    setHasReadInput(!hasReadInput)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      title: titleInput,
      author: authorInput,
      genre: genreInput,
      image: imageInput,
      done_reading: hasReadInput,
    }

    fetch('http://localhost:9292/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((r) => r.json())
      .then((newBook) => setBooks([...books, newBook]))

    setTitleInput('')
    setAuthorInput('')
    setGenreInput('')
    setImageInput('')
    setHasReadInput(false)
    onClose()
  }

  return (
    <>
      <Button variant='ghost' onClick={onOpen}> + </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a New Book</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input 
                ref={initialRef} 
                placeholder='Title' 
                onChange={handleTitleChange}
                type="text"
                value={titleInput}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Author</FormLabel>
              <Input 
                placeholder='Author'
                onChange={handleAuthorChange}
                type="text"
                value={authorInput}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Genre</FormLabel>
              <Input 
                placeholder='Genre' 
                onChange={handleGenreChange}
                type="text"
                value={genreInput}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Image URL</FormLabel>
              <Input 
                placeholder='Image URL' 
                onChange={handleImageChange}
                type="text"
                value={imageInput}
              />
            </FormControl>

            <FormControl mt={4}>
              <Checkbox 
                colorScheme='teal' 
                onChange={handleCheckboxChange}
              >
                I have finished reading this book
              </Checkbox>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button 
              colorScheme='teal' 
              mr={3}
              onClick={handleSubmit}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddBookModal