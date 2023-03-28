import React from "react"
import wormLogo from '../images/wormLogo.png'
import { Box, Image, Input, Link, HStack, Text, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

const Header = () => {
  return (
    <HStack spacing='auto' height='full' >
      <Image
        src={wormLogo}
        alt='worm logo'
        width='20'
      />
      <Text fontSize='3xl' >
            {/* Make this wording change based on ## of books */}
            <b>Yikes, you haven't read any books...</b>
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
    </HStack>
  )
}

export default Header
