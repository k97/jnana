import Link from 'next/link'
import { Container, SimpleGrid, Box, Text, Image } from "@chakra-ui/react"

const Footer = () => {

  const yearVal = new Date().getFullYear();
  return (
    <Container maxW="container.xl" mt="100">
      <SimpleGrid columns={5} spacing={0} className="social-icon-wrapper">
        <Box>
          <a href="https://twitter.com/k97co" target="_blank">
            <Image src="/assets/twitter-icon.svg" />
          </a>
        </Box>
        <Box>
          <a href="mailto:karthik97live@gmail.com?subject=Hello Karthik!">
            <Image src="/assets/mail-icon.svg" />
          </a>
        </Box>
        <Box>
          <a href="https://github.com/k97" target="_blank">
            <Image src="/assets/github-icon.svg" />
          </a>
        </Box>
        <Box>
          <a href="https://www.linkedin.com/in/rajendrankarthikeyan" target="_blank">
            <Image src="/assets/linkedin-icon.svg" />
          </a>
        </Box>
      </SimpleGrid>
      <Text fontSize="xl" mt="5" mb="10">Copyrights &copy; {yearVal}. Alpha build</Text>
    </Container >
  )
}

export default Footer
