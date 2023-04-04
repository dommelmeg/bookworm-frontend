import React from "react"
import { StarIcon } from '@chakra-ui/icons'
import { Flex } from '@chakra-ui/react'

const Stars = ({ book }) => {
  const reviews = book.reviews
  const sum = reviews.reduce(
    (acc, currVal) => acc + currVal.rating, 
    0,
  )
  const avgRating = Math.floor(sum/reviews.length)

  return (
    <Flex>
      {!avgRating && <em>No Reviews Yet</em>}
      {avgRating > 0 && <StarIcon color='yellow.500' />}
      {avgRating > 1 && <StarIcon color='yellow.500' />}
      {avgRating > 2 && <StarIcon color='yellow.500' />}
      {avgRating > 3 && <StarIcon color='yellow.500' />}
      {avgRating > 4 && <StarIcon color='yellow.500' />}
    </Flex>
  )

}

export default Stars