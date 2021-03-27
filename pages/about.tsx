
import Head from 'next/head'
// import Link from 'next/link'
import { Container, Box, Flex, Link, GridItem, Heading, Text, Image, Button, Divider, UnorderedList, ListItem } from "@chakra-ui/react"
import { Layout } from '../components/Layout/index'
import { CMS_NAME, GOOGLE_DRIVE_RESUME, GOOGLE_DRIVE_RESUME_DOWNLOAD } from '../lib/constants'


const About = () => {

  return (
    <Layout>
      <Head>
        <title>About - {CMS_NAME}</title>
      </Head>
      <Container maxW="container.xl">
        <Flex>
          <Box width={{ base: "50%", sm: "100%", md: "100%", lg: "50%" }}>
            <Heading as="h2" fontSize="4xl" fontWeight="800" mt={75} color="gray.900">About</Heading>

            <Text fontSize="2xl" mt="8" mb="8" color="gray.900">My full name is Karthikeyan Rajendran, a design generalist, who loves to solve problems with a focus on <a href="https://en.wikipedia.org/wiki/Human-centered_design" target="_blank">HCD ↗</a> and functional design. Good design solutions help build traction with end-users and grow business. I enjoy spending my time on designing solutions for products that creates value.</Text>

            <Text fontSize="2xl" mb="8" color="gray.900">I have experience in designing for with health, travel, big data, sports and entertainment businesses. Right now, I'm working as Product Designer at <a href="https://telstrahealth.com/" target="_blank">Telstra Health ↗</a> in Melbourne, designing and building digital products for virtual healthcare.</Text>

            <Text fontSize="2xl" mb="8" color="gray.600">Before Telstra Health, I was working across <a href="https://www.emirates.com/au/english/about-us/">Emirates Airlines ↗</a> with different teams to deliver products used by the flight crew and customers. I started my trade as product designer at FastTrack360 cloud systems.</Text>

            <Text fontSize="2xl" mb="8" color="gray.600">If you are looking for my resume, <a href={GOOGLE_DRIVE_RESUME} target="_blank">it's here ↗</a>.</Text>

            <Link href={GOOGLE_DRIVE_RESUME_DOWNLOAD} _hover={{ textDecoration: 'none' }}>
              <Button colorScheme="brand" fontSize="xl" size="lg" shadow="xl" ml="2" _hover={{ shadow: "sm", background: "brand.400" }} >Download Resume</Button>
            </Link>

            <Divider mt="50" />

            <Heading as="h2" color="gray.600" fontSize="3xl" fontWeight="700" mt={50}>I provide useful design solutions through:</Heading>
            <UnorderedList mt="5" fontSize="2xl" lineHeight="tall">
              <ListItem>Ideation, research and synthesis</ListItem>
              <ListItem>Prototyping and UX testing</ListItem>
              <ListItem>UX/UI design</ListItem>
              <ListItem>Stakeholder engagement and presentation</ListItem>
              <ListItem>Journey mapping</ListItem>
              <ListItem>Product strategy</ListItem>
            </UnorderedList>

            <Text fontSize="2xl" mt="5">for mobile apps, web apps and websites, or any digital products.</Text>
          </Box>


        </Flex>
      </Container >
    </Layout >
  )
}

export default About


