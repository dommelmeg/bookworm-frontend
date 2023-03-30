import React, { useState } from "react"
import wormLogo from '../images/wormLogo.png'
import { Box, Image, Input, Link, HStack, Text, InputGroup, InputLeftElement, Switch } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

const Header = ({ books }) => {

  

  return (
    <HStack spacing='auto' height='full' >
      <Image
        src={wormLogo}
        alt='worm logo'
        width='20'
      />
      
      <Box h='40px'>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<Search2Icon color='gray.300' />}
          />
          <Input type='text' placeholder='Search' width='sm' />
        </InputGroup>
      </Box>
        <Switch size='md' colorScheme='teal' />
    </HStack>
  )
}

export default Header
