import React, { useState } from "react"
import wormLogo from '../images/wormLogo.png'
import { Box, Image, Input, Link, HStack, Text, InputGroup, InputLeftElement, Switch } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

const Header = ({ books }) => {
  const [numBooksRead, setNumBooksRead] = useState(0)

  const totalBooksRead = books.filter((book) => book.done_reading === true).length

  return (
    <HStack spacing='auto' height='full' >
      <Image
        src={wormLogo}
        alt='worm logo'
        width='20'
      />
      <Text fontSize='3xl' >
            {/* Make this wording change based on ## of books */}
            <b>Wow, you've read {totalBooksRead} books so far!</b>
      </Text>
      <Box h='40px'>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<Search2Icon color='gray.300' />}
          />
          <Input type='text' placeholder='Search' width='sm' />
        </InputGroup>
      </Box>
        <Switch size='md' />
    </HStack>
  )
}

export default Header
