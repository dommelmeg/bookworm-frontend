import React from "react";
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

const CommentCard = ({ reviews }) => {
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls()

    const handleDeleteBtn = () => {
      console.log('bye bitch')
    }

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
    reviews.map((review) => {
      return (
        <Editable
          textAlign='left'
          defaultValue={review.comment}
          fontSize='sm'
          isPreviewFocusable={false}
          key={review.id}
        >
          <EditablePreview />
          {/* Here is the custom input */}
          <Input as={EditableInput} />
          <EditableControls />
          <Divider paddingBottom='4' />
        </Editable>
      )
    })
  )
}

export default CommentCard