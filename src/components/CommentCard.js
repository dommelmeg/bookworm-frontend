import React, { useContext, useState } from "react";
import { 
  Editable,
  useEditableControls,
  EditableInput,
  EditableTextarea,
  EditablePreview, 
  IconButton,
  ButtonGroup,
  Flex,
  Input,
  Divider
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { AllBooksContext } from "../context/allBooks";

const CommentCard = ({ review }) => {
  const { setBooks, books } = useContext(AllBooksContext)
  const [editCommentInput, setEditCommentInput] = useState('')

  const handleSubmitClick = () => {
    fetch(`http://localhost:9292/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: editCommentInput,
      }),
    })
    .then((r) => r.json())
    .then(() => fetch('http://localhost:9292/books')
        .then((r) => r.json())
        .then((books) => setBooks(books)))
  }

  const handleDeleteBtn = () => {
    fetch(`http://localhost:9292/reviews/${review.id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then((r) => r.json())
    .then(() => fetch('http://localhost:9292/books')
        .then((r) => r.json())
        .then(() => setBooks(books)))
  }

  const handleCommentChange = (e) => {
    setEditCommentInput(e.target.value)
  }
  
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls()
      
    return isEditing ? (
      <ButtonGroup justifyContent='left' size='xs'>
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent='left' gap='2' >
        <IconButton size='xs' icon={<EditIcon />} {...getEditButtonProps()} />
        <IconButton size='xs' icon={<DeleteIcon />} onClick={handleDeleteBtn} />
      </Flex>
    )
  }
  
  return (
    <Editable
      textAlign='left'
      defaultValue={review.comment}
      fontSize='sm'
      isPreviewFocusable={false}
      key={review.id}
      onSubmit={handleSubmitClick}
      >
      <EditablePreview />
      <Input 
        as={EditableInput}
        value={editCommentInput}
        onChange={handleCommentChange}
      />
      <EditableControls />
      <Divider paddingBottom='4' />
    </Editable>
  )
}

export default CommentCard