
import Head from 'next/head';
import { Layout } from '../components/Layout/index';
import { Container, Heading, Text, Alert, Box, Grid, } from "@chakra-ui/react"
import WorkPreview from '../components/Work/work-preview'

import { getAllWork } from '../lib/work-api';
import { CMS_NAME } from '../lib/constants';

type Props = {
  allWork: any
}

const Work = ({ allWork }: Props) => {
  return (
    <Layout>
      <Head>
        <title>Work - {CMS_NAME}</title>
      </Head>
      <Container maxW="container.xl">
        <Heading as="h2" fontSize="4xl" fontWeight="800" mt={50} >Selective Projects</Heading>
        <Alert status="warning" variant="subtle" mt={10} mb={10} borderWidth="0px" rounded="lg" boxShadow="xs" p="6">
          <Box flex="1">
            <Heading as="h3" fontSize="2xl" fontWeight="600" >Update:</Heading>
            <Text fontSize="xl" mt={2} mb={2}>
              Personal projects are hard to juggle with day jobs and I'm trying my best to fit in all my projects soon, please check again later.
            </Text>
          </Box>
        </Alert>

        <Grid templateColumns="repeat(12, 1fr)" gap={8}>
          {allWork.map((work: any) => (
            <WorkPreview
              key={work.slug}
              title={work.title}
              coverImage={work.coverImage}
              slug={work.slug}
              excerpt={work.excerpt}
            />
          ))}
        </Grid>
      </Container>
    </Layout >
  )
}

export default Work

export const getStaticProps = async () => {
  const allWork = getAllWork([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allWork },
  }
}
