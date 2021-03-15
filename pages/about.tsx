
import Head from 'next/head'
import { Container, Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react"
import { Layout } from '../components/Layout/index'
import { CMS_NAME, GOOGLE_DRIVE_RESUME } from '../lib/constants'


const About = () => {

  return (
    <Layout>
      <Head>
        <title>About - {CMS_NAME}</title>
      </Head>
      <Container maxW="container.xl">
        <Box width={{ base: "50%", sm: "100%", md: "100%", lg: "50%" }}>
          <Heading as="h2" fontSize="4xl" fontWeight="800" mt={75} color="gray.900">About</Heading>

          <Text fontSize="2xl" mt="8" mb="8" color="gray.900">My full name is Karthikeyan Rajendran, a generalist designer, who loves to solve design problems with a focus on <a href="https://en.wikipedia.org/wiki/Human-centered_design" target="_blank">HCD ↗</a> and product requirements.
          Good design solutions help build traction or grow business & revenue, and I enjoy spending my time on designing solutions for products that creates value.</Text>

          <Text fontSize="2xl" mb="8" color="gray.900">Right now, I'm working as Product Designer at <a href="https://telstrahealth.com/" target="_blank">Telstra Health ↗</a> in Melbourne, designing and building digital products for virtual healthcare.</Text>

          <Text fontSize="2xl" mb="8" color="gray.600">Before Telstra Health, I was working with <a href="https://www.emirates.com/au/english/about-us/">Emirates Airlines ↗</a> across different teams to deliver products used by the flight crew and passengers. I started my foray as product designer at FastTrack360 cloud systems.</Text>

          <Text fontSize="2xl" mb="8" color="gray.600">I share my perspectives on things that are interesting <a href="/articles">here</a> and if you are looking for my resume, <a href={GOOGLE_DRIVE_RESUME} target="_blank">it's here ↗</a>.</Text>

        </Box>
      </Container >
    </Layout >
  )
}

export default About


