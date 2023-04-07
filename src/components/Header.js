import React from "react"
import { Image, HStack, Switch, useColorMode } from '@chakra-ui/react'
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
      <Switch size='md' colorScheme='teal' onChange={toggleColorMode} />
    </HStack>
  )
}

export default Header
