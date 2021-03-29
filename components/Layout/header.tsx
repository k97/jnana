import { MouseEvent } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import {
  useToast,
  Container, Center, Flex, Box, Text, Spacer, Switch, FormControl, FormLabel, Tooltip, Image, Button, useColorMode, useColorModeValue,
  Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure, VStack, CloseButton
} from "@chakra-ui/react"

import { KarthikLogo, LockIcon, SunIcon, MoonIcon, MenuList } from '../../lib/config'
import { signOut, useSession } from 'next-auth/client'

const Header = ({ href, children }: any) => {
  const router = useRouter()
  const toast = useToast();
  const [session, loading]: any = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode();

  const borderColor = useColorModeValue("gray.100", "gray.700")
  const linkColor = useColorModeValue("brand.500", "brand.200")
  const closeBtnColor = useColorModeValue("gray.500", "gray.100")

  const MobileMenu = () => {
    return (
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px" p="8">
              <Flex className="klogo">
                <KarthikLogo />
                <Spacer />
                <CloseButton mt="2" fontSize="2xl" onClick={onClose} colorScheme={closeBtnColor} />
              </Flex>
            </DrawerHeader>
            <DrawerBody>
              <VStack>
                <MenuItem width="100%" isHomePageVisible={true} />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  const MenuItem = (props: any) => {
    const isHomeMenu = (item: any) => {
      let isVisible = true;
      if (item.name == "Home") {
        isVisible = props.isHomePageVisible;
      }
      return isVisible;
    }

    return (
      <>
        {MenuList.map((menu: any) => (
          <Box key={menu.id} mr="4" pt="6" pb="6" pl="4" pr="4" width={props.width} className="menu-item">
            {isHomeMenu(menu) && (<Link href={menu.link}>
              <Text fontSize="xl" fontWeight="bold" cursor="pointer" opacity="0.95" _hover={{ color: linkColor }} color={router.pathname == menu.link ? linkColor : ""}>{menu.name}</Text>
            </Link>)}
          </Box>
        ))
        }
      </>
    )
  }

  const onLockProjects = (e: any) => {
    toast({
      title: "Projects locked",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    signOut();
  }

  return (
    <Container maxW="container.xl" pt={4} pb="4" pr="0" pl="0">
      <>
        <MobileMenu />
      </>

      <Flex className="header-menu" maxWidth="container.xl" position="fixed" right="0" left="0" margin="0 auto" borderWidth="1px" borderColor={borderColor} rounded="lg" boxShadow="lg" zIndex="docked"  >
        <Box pt="5" pb="5" pl="5" >
          <Link href="/">
            <Center cursor="pointer" className="klogo">
              <KarthikLogo />
            </Center>
          </Link>
        </Box>
        <Spacer />

        <MenuItem isHomePageVisible={false} />

        {<Box mr="2" pt="6" pl="3" pr="3">
          <Tooltip label="Toggle Dark Mode">
            <Button size="sm" variant="ghost" onClick={toggleColorMode} fontSize="lg">
              {colorMode === "light" ? < MoonIcon /> : <SunIcon />}
            </Button>
          </Tooltip>
        </Box>}

        {session && (
          <Box mr="0" pt="6" pl="3" pr="6" >
            <Tooltip label="Lockdown projects">
              <Button size="sm" variant="ghost" onClick={onLockProjects} width="40px" position="relative" bottom="2px" className="lock-icon" >
                <LockIcon />
              </Button>
            </Tooltip>
          </Box>
        )}

        {<Box mr="2" p="6" className="menu-hamburger">
          <Button size="sm" variant="ghost" onClick={onOpen}>
            <svg fill="#666" viewBox="0 0 100 80" width="36" height="36">
              <rect width="100" height="7"></rect>
              <rect y="30" width="100" height="7"></rect>
              <rect y="60" width="100" height="7"></rect>
            </svg>
          </Button>
        </Box>}

      </Flex>
    </Container >
  )
}

export default Header
