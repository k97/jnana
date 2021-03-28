import Error from 'next/error'
import Link from 'next/link'
import { Container, Button, Heading, Text } from "@chakra-ui/react"

export default function NotFound() {
  return (
    <>
      <Container maxW="container.md">
        <Heading as="h2" fontSize={{ sm: "2xl", md: "4xl" }} fontWeight="800" color="gray.700" mt={50} mb={5}>404 Not Found</Heading>
        <Text fontSize={{ sm: "lg", md: "xl" }}>
          Personal projects are hard to juggle with day jobs and I'm trying my best to fit in all the pages soon, please check again later.
        </Text>
        <Link href="/">
          <Button size="lg" fontSize="xl" colorScheme="brand" width="200px" mt={4} mb="4">Go to Homepage</Button>
        </Link>
        <iframe src="https://giphy.com/embed/11PVuEm7Osdjoc" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
      </Container>
    </>
  )
}
