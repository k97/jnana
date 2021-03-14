import Error from 'next/error'
import Link from 'next/link'
import { Container, Center, Button, Heading, Text } from "@chakra-ui/react"

export default function NotFound() {
  return (
    <>
      <Center>
        <Container>
          <Heading as="h2" size="xl" className="ff-hero" mt={50}>404 Not Found</Heading>
          <h1 className="ff-head"></h1>
          <Text className="small-text">
            Personal projects are hard to juggle with day jobs and I'm trying my best to fit in all the pages soon, please check again later.
        </Text>
          <Button>
            <Link href="/">
              <a>Go to Homepage</a>
            </Link>
          </Button>
          <iframe src="https://giphy.com/embed/11PVuEm7Osdjoc" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        </Container>
      </Center>
    </>
  )
}
