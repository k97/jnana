import Link from 'next/link'
import { useState, useEffect } from "react";
import { Container, Center, Flex, Box, Text, Spacer, Switch, FormControl, FormLabel, Tooltip, Image } from "@chakra-ui/react"
import { signOut, useSession } from 'next-auth/client';

const Header = () => {
  const [session, loading]: any = useSession();

  return (
    <Container maxW="container.xl" pt={4} pb="4" pr="0" pl="0">
      <Flex className="header-background" borderWidth="1px" rounded="lg" boxShadow="lg"  >
        <Box pt="5" pb="5" pl="5" >
          <Link href="/">
            <Center w="40px">
              <Image src="/assets/logo.svg" alt="K97 Logo" className="logo" />
            </Center>
          </Link>
        </Box>
        <Spacer />
        <Box mr="3" p="6" >
          <Link href="/about" >
            <Text fontSize="xl" fontWeight="bold">About</Text>
          </Link>
        </Box>
        <Box mr="3" p="6" >
          <Link href="/work" >
            <Text fontSize="xl" fontWeight="bold">Work</Text></Link>
        </Box>
        <Box mr="3" p="6" >
          <Link href="/articles" >
            <Text fontSize="xl" fontWeight="bold">Articles</Text>
          </Link>
        </Box>

        {/* <Box mr="3" p="6" >
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="toggle-mode" mb="0" fontSize="xl">Toggle mode </FormLabel>
            <Switch id="toggle-mode" />
          </FormControl>
        </Box> */}

        {session && (
          <Box mr="4" p="6" >
            <Tooltip label="Lockdown projects">
              <Text onClick={signOut} >
                <Image src="/assets/lock.svg" htmlWidth="35px" />
              </Text>
            </Tooltip>
          </Box>
        )}

      </Flex>
    </Container >
  )
}

export default Header
