import { MouseEvent } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import { Container, Center, Flex, Box, Text, Spacer, Switch, FormControl, FormLabel, Tooltip, Image, Button, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { signOut, useSession } from 'next-auth/client';
import { useToast } from "@chakra-ui/react";

const Header = ({ href, children }: any) => {
  const router = useRouter()
  const [session, loading]: any = useSession();
  const toast = useToast();

  const { colorMode, toggleColorMode } = useColorMode();

  const KarthikLogo = () => {
    return (
      <svg width="40" height="40" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.6429 20.9286L18 23.75V30H11V5H18V15.3929L27.6786 5H35.4643L25.25 16.0714L36 30H27.7857L20.6429 20.9286Z" fill="#333" />
        <path d="M46 44V34H38.8739V37.7908H7.12607V34H0L0 44H46Z" fill="#333" />
        <circle cx="42" cy="26" r="4" fill="#333" />
      </svg>
    )
  }

  const MoonIcon = () => {
    return (
      <svg stroke="currentColor" fill="#699CF8" strokeWidth="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path></svg>
    )
  }
  const SunIcon = () => {
    return (
      <svg stroke="currentColor" fill="#FFC700" strokeWidth="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path></svg>
    )
  }


  // className={router.pathname == "/about" ? "active" : ""}
  const onLockProjects = (e: any) => {
    toast({
      title: "Projects locked",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    signOut();
  }

  const borderColor = useColorModeValue("gray.100", "gray.700")
  const linkColor = useColorModeValue("brand.500", "brand.200")

  return (
    <Container maxW="container.xl" pt={4} pb="4" pr="0" pl="0">
      <Flex className="header-background" maxWidth="container.xl" position="fixed" right="0" left="0" margin="0 auto" borderWidth="1px" borderColor={borderColor} rounded="lg" boxShadow="lg" zIndex="docked"  >
        <Box pt="5" pb="5" pl="5" >
          <Link href="/">
            <Center cursor="pointer" className="klogo">
              <KarthikLogo />
            </Center>
          </Link>
        </Box>
        <Spacer />
        <Box mr="4" pt="6" pb="6" pl="4" pr="4" >
          <Link href="/about">
            <Text fontSize="xl" fontWeight="bold" cursor="pointer" opacity="0.95" _hover={{ color: linkColor }} color={router.pathname == "/about" ? linkColor : ""}>About</Text>
          </Link>
        </Box>
        <Box mr="4" pt="6" pb="6" pl="4" pr="4" >
          <Link href="/work" >
            <Text fontSize="xl" fontWeight="bold" cursor="pointer" opacity="0.95" _hover={{ color: linkColor }} color={router.pathname == "/work" ? linkColor : ""}>Work</Text></Link>
        </Box>
        <Box mr="4" pt="6" pb="6" pl="4" pr="4" >
          <Link href="/tools" >
            <Text fontSize="xl" fontWeight="bold" cursor="pointer" opacity="0.95" _hover={{ color: linkColor }} color={router.pathname == "/tools" ? linkColor : ""}>Tools</Text>
          </Link>
        </Box>
        <Box mr="4" pt="6" pb="6" pl="4" >
          <Link href="/articles" >
            <Text fontSize="xl" fontWeight="bold" cursor="pointer" opacity="0.95" _hover={{ color: linkColor }} color={router.pathname == "/articles" ? linkColor : ""}>Articles</Text>
          </Link>
        </Box>

        {<Box mr="2" p="6" >
          <Tooltip label="Toggle Dark Mode">
            <Button size="sm" variant="ghost" onClick={toggleColorMode} fontSize="lg">
              {colorMode === "light" ? < MoonIcon /> : <SunIcon />}
            </Button>
          </Tooltip>
        </Box>}


      </Flex>
    </Container >
  )
}

export default Header

// {session && (
//   <Box mr="0" pt="6" pl="3" pr="6" >
//     <Tooltip label="Lockdown projects">
//       <Button size="sm" variant="ghost" onClick={onLockProjects} width="40px" position="relative" bottom="2px" >
//         <LockIcon />
//       </Button>
//     </Tooltip>
//   </Box>
// )}
