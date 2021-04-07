import Link from 'next/link'
import { Container, Button, Heading, Text, Grid, GridItem, Box, Image, Flex } from "@chakra-ui/react"
import { HeroImage } from './hero-image'

const HeroIntro = () => {
  return (
    <Container maxW="container.xl" pt={{ base: "0", sm: "0", md: 30 }} mt={{ base: -50, sm: -50, md: 0 }}>
      <Flex>
        <Box width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "40%" }}>

          <Text fontSize={{ sm: "2xl", md: "3xl" }} fontWeight="500" casing="uppercase" mb="0" pb="0">Hello! I am</Text>
          <Heading as="h1" fontSize={{ sm: "5xl", md: "6xl" }} fontWeight="900" mt="0" pt="0">Karthik</Heading>
          <Text fontSize={{ sm: "xl", md: "2xl" }} mt="5" mb="6">Generalist product designer based in Melbourne, who likes to code, create experiences that makes people’s lives better</Text>

          <Link href="/about">
            <Button colorScheme="brand" fontSize="xl" size="lg" shadow="xl" _hover={{ shadow: "sm", background: "brand.400" }} >More about me</Button>
          </Link>
          <Text fontSize={{ sm: "xl", md: "2xl" }} mt="6">See few of my selective <Link href="/work" ><a>work here</a></Link>, or If you want to read some interesting collation of <Link href="/articles"><a>articles here</a></Link>.</Text>
        </Box>

        <Box width={{ base: "5%", sm: "0%", md: "0%", lg: "5%" }} />

        <Box width={{ base: "0%", sm: "0%", md: "0%", lg: "55%" }} >
          <Box className="hero-static" position="absolute" mt={{ base: 0, sm: 0, md: -75 }}>
            <HeroImage />
          </Box>
        </Box>

      </Flex>
    </Container >
  )
}

export default HeroIntro
