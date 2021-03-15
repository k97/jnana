import Link from 'next/link'
import { Container, Button, Heading, Text, Grid, GridItem, Box, Image, Flex } from "@chakra-ui/react"

const HeroIntro = () => {
  return (
    <Container maxW="container.xl" pt={30}>
      <Flex>
        <Box width={{ base: "50%", sm: "100%", md: "100%", lg: "40%" }}>

          <Text fontSize="3xl" fontWeight="500" casing="uppercase" mt="20" mb="0" pb="0">Hello! I am</Text>
          <Heading as="h1" fontSize="6xl" fontWeight="900" mt="0" pt="0">Karthik</Heading>
          <Text fontSize="2xl" mt="5" mb="5">Designer based in Melbourne, who likes to code, create experiences that makes people’s lives easier.</Text>

          <Link href="/about">
            <Button colorScheme="blue" fontSize="xl" size="lg" >More about me</Button>
          </Link>
          <Text fontSize="2xl" mt="5">See few of my selective <Link href="/work"><a>work here</a></Link>, or If you want to read some interesting collation of <Link href="/articles"><a>articles here</a></Link>.</Text>
        </Box>

        <Box width={{ base: "5%", sm: "0%", md: "0%", lg: "5%" }} />

        <Box width={{ base: "55%", sm: "0%", md: "0%", lg: "55%" }}>
          <Image src="/assets/hero.svg" className="hero-static" />
        </Box>
      </Flex>
    </Container >
  )
}

export default HeroIntro
