import Link from 'next/link'
import { useState, useEffect } from "react";
import { Container, Flex, Box, Text, Spacer, UnlockIcon } from "@chakra-ui/react"
import { signOut, useSession } from 'next-auth/client';

const Header = () => {

  const [session, loading]: any = useSession();


  return (
    <Container>
      <Flex>
        <Box p="2">
          <Link href="/">
            <img src="/assets/logo.svg" alt="K97 Logo" className="logo" />
          </Link>
        </Box>
        <Spacer />
        <Box mr="4">
          <Link href="/about" >
            <Text>About</Text>
          </Link>
        </Box>
        <Box mr="4">
          <Link href="/work" >
            <Text>Work</Text></Link>
        </Box>
        <Box mr="4">
          <Link href="/articles" >
            <Text>Articles</Text></Link>
        </Box>
        {session && (
          <Box mr="4">
            <Text onClick={signOut} >Lock Projects</Text>
          </Box>
        )}
        <Box mr="4">
          <Link href="/articles" >
            <Text>Darkmode</Text></Link>
        </Box>
      </Flex>
    </Container >
  )
}

export default Header
