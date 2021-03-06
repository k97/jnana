
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
          <Box width={{ base: "100%", sm: "100%", md: "100%", lg: "60%", xl: "60%" }} fontSize={{ sm: "xl", md: "2xl" }}>
            <Heading as="h2" fontSize={{ sm: "2xl", md: "4xl" }} fontWeight="800" opacity="0.9" mt="40px">About</Heading>

            <Text mt="8" mb="8">My full name is Karthikeyan Rajendran, a design thinker and strategist, who loves to solve problems with a focus on <a href="https://en.wikipedia.org/wiki/Human-centered_design" target="_blank">HCD ↗</a> and functional design. Good solutions help build traction with end-users and grow businesses. I enjoy spending my time designing solutions for products that creates value.</Text>

            <Text mb="8">I have experience in designing for health, travel, big data, sports and entertainment business domains ranging from startups to enterprises. Right now, I'm working as a product designer at <a href="https://telstrahealth.com/" target="_blank">Telstra Health ↗</a> in Melbourne, designing and building digital products for virtual healthcare.</Text>

            <Text mb="8">Before Telstra Health, I was working across <a href="https://www.emirates.com/au/english/about-us/">Emirates Airlines ↗</a> with different teams to deliver products used by the flight crew and customers. I started my trade as a product designer at FastTrack360 cloud systems.</Text>

            <Text mb="8">If you are looking for my resume, <a href={GOOGLE_DRIVE_RESUME} target="_blank">it's here ↗</a>.</Text>

            <Link href={GOOGLE_DRIVE_RESUME_DOWNLOAD} _hover={{ textDecoration: 'none' }}>
              <Button colorScheme="brand" fontSize="xl" size="lg" shadow="xl" ml="2" _hover={{ shadow: "sm", background: "brand.400" }} >Download Resume</Button>
            </Link>

            <Divider mt="50px" />

            <Heading as="h2" fontSize={{ sm: "xl", md: "3xl" }} fontWeight="700" mt="50px" opacity="0.85">I provide useful design solutions through:</Heading>
            <UnorderedList mt="5" lineHeight="tall">
              <ListItem>Ideation, research and synthesis</ListItem>
              <ListItem>Prototyping and UX testing</ListItem>
              <ListItem>UI/UX design and development</ListItem>
              <ListItem>Stakeholder engagement and presentation</ListItem>
              <ListItem>Journey mapping</ListItem>
              <ListItem>Product strategy</ListItem>
            </UnorderedList>

            <Text mt="5" fontWeight="bold" opacity="0.85">for mobile apps, web apps and websites, or any digital products.</Text>

          </Box>

          <Box width={{ base: "0%", sm: "0%", md: "0%", lg: "2%" }} />

          <Box width={{ base: "0%", sm: "0%", md: "0%", lg: "38%", xl: "38%" }} >
            <Image src="https://k97static.s3-ap-southeast-2.amazonaws.com/v8/karthik-circle.png" className="hero-static" alt="Karthik sitting down" mt={{ base: 0, sm: 0, md: 150 }} />
          </Box>

        </Flex>
      </Container >
    </Layout >
  )
}

export default About


