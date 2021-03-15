import { MouseEvent } from 'react';
import Link from 'next/link'
import { useState, useEffect } from "react";
import { Container, Center, Flex, Box, Text, Spacer, Switch, FormControl, FormLabel, Tooltip, Image, Button } from "@chakra-ui/react"
import { signOut, useSession } from 'next-auth/client';
import { useToast } from "@chakra-ui/react";

const Header = () => {
  const [session, loading]: any = useSession();
  const toast = useToast();

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
      <Flex className="header-background" borderWidth="1px" borderColor="gray.100" rounded="lg" boxShadow="lg" zIndex="docked"  >
        <Box pt="5" pb="5" pl="5" >
          <Link href="/">
            <Center cursor="pointer">
              <svg width="40" height="40" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.6429 20.9286L18 23.75V30H11V5H18V15.3929L27.6786 5H35.4643L25.25 16.0714L36 30H27.7857L20.6429 20.9286Z" fill="#333" />
                <path d="M46 44V34H38.8739V37.7908H7.12607V34H0L0 44H46Z" fill="#333" />
                <circle cx="42" cy="26" r="4" fill="#333" />
              </svg>
            </Center>
          </Link>
        </Box>
        <Spacer />
        <Box mr="3" p="6" >
          <Link href="/about" >
            <Text fontSize="xl" fontWeight="bold" cursor="pointer" color="brand.800" _hover={{ color: "brand.500" }}>About</Text>
          </Link>
        </Box>
        <Box mr="3" p="6" >
          <Link href="/work" >
            <Text fontSize="xl" fontWeight="bold" cursor="pointer" color="brand.800" _hover={{ color: "brand.500" }}>Work</Text></Link>
        </Box>
        <Box mr="0" p="6" >
          <Link href="/articles" >
            <Text fontSize="xl" fontWeight="bold" cursor="pointer" color="brand.800" _hover={{ color: "brand.500" }}>Articles</Text>
          </Link>
        </Box>

        {/* <Box mr="3" p="6" >
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="toggle-mode" mb="0" fontSize="xl">Toggle mode </FormLabel>
            <Switch id="toggle-mode" />
          </FormControl>
        </Box> */}

        {session && (
          <Box mr="0" p="6" >
            <Tooltip label="Lockdown projects">
              <Button size="sm" variant="ghost" onClick={onLockProjects} >
                <Image src="/assets/lock.svg" htmlWidth="16px" opacity="0.8" position="relative" bottom="2px" />
              </Button>
            </Tooltip>
          </Box>
        )}

      </Flex>
    </Container >
  )
}

export default Header
