
import Head from 'next/head';
import { useState, useEffect } from "react"
import { Container, Heading, Text, Alert, Box, Grid, Divider, Center, CloseButton, } from "@chakra-ui/react"
import { signIn, signOut, useSession, getSession } from 'next-auth/client'

import { Layout } from '../components/Layout/index'
import WorkPreview from '../components/Work/work-preview'

import { getAllWork } from '../lib/work-api'
import { CMS_NAME } from '../lib/constants'

type Props = {
  allWork: any
}

const Work = ({ allWork }: Props) => {
  const [session, loading]: any = useSession()
  const [isActiveSession, setActiveSession]: any = useState(false);
  const [isAlertVisible, setAlertVisibility]: any = useState(true);

  useEffect(() => {
    const onCheckSessionStatus = async () => {
      const session = await getSession();
      if (session) {
        setActiveSession(true)
      }
    };
    onCheckSessionStatus();
  });


  return (
    <Layout>
      <Head>
        <title>Work - {CMS_NAME}</title>
      </Head>
      <Container maxW="container.xl">
        {isAlertVisible && (
          <Alert status="warning" variant="subtle" mt={75} borderWidth="0px" rounded="lg" boxShadow="md" pt="3" pb="4" pr="6" pl="6">
            <Box flex="1">
              <Heading as="h3" fontSize="2xl" fontWeight="600">Update:</Heading>
              <Text fontSize="xl" mt={2}>
                Personal projects are hard to juggle with day jobs and I'm trying my best to fit in all my projects soon, please check again later.
              </Text>
            </Box>
            <CloseButton position="absolute" right="10px" top="10px" onClick={() => setAlertVisibility(false)} />
          </Alert>
        )}


        <Heading as="h2" fontSize="4xl" fontWeight="800" color="gray.700" mt={6} >Select Projects</Heading>
        <Text fontSize="xl" fontWeight="400" mt={2} color="gray.600" >A curated list of projects that I have designed and developed over the years</Text>


        <Grid gap={8} mt="20px">
          {allWork.map((work: any) => (
            <WorkPreview
              key={work.slug}
              title={work.title}
              coverImage={work.coverImage}
              slug={work.slug}
              excerpt={work.excerpt}
              locked={work.author.private}
              tags={work.author.tags}
              sessionStatus={isActiveSession}
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
