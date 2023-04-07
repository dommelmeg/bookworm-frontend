import React, { useState } from "react"
import wormLogo from '../images/wormLogo.png'
import { Box, Image, Input, Link, HStack, Text, InputGroup, InputLeftElement, Switch, useColorMode } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import logoDark from '../images/bookwormLogoDark.png'
import logoLight from '../images/bookwormLogoLight.png'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack spacing='auto'  height='full' >
      <Image
        src={colorMode === 'light' ? logoLight : logoDark}
        alt='worm logo'
        width='20'
      />
      
      <Box h='40px'>
        {/* <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<Search2Icon color='gray.300' />}
          />
          <Input type='text' placeholder='Search' width='sm' />
        </InputGroup> */}
      </Box>
        <Switch size='md' colorScheme='teal' onChange={toggleColorMode} />
    </HStack>
  )
}

export default Header
