import Head from 'next/head';
import { Container, Box } from "@chakra-ui/react"

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
          <WorkTools />
        </Box>

      </Container>
    </Layout >
  )
}

export default Tools


