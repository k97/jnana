import Head from 'next/head';
import { Container, Box, Heading, Text } from "@chakra-ui/react"

import { Layout } from '../components/Layout/index';
import WorkTools from '../components/Work/tools'

import { CMS_NAME } from '../lib/constants';

const Tools = () => {


  return (
    <Layout>
      <Head>
        <title>Tools - {CMS_NAME}</title>
      </Head>
      <Container maxW="container.xl">
        <Box mt="75px">
          <Heading as="h2" fontSize={{ sm: "2xl", md: "4xl" }} fontWeight="800" mt={75} opacity="0.9">Tools</Heading>
          <Text fontSize={{ sm: "lg", md: "xl" }} fontWeight="400" mt={2} opacity="0.6" >A list of tools that I have designed to facilitate any design workflows</Text>
          <WorkTools />
        </Box>

      </Container>
    </Layout >
  )
}

export default Tools


