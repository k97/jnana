
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
        <Box>
          <Heading as="h2" fontSize={{ sm: "2xl", md: "4xl" }} fontWeight="800" color="gray.700" mt={6} >Select Projects</Heading>
          <Text fontSize={{ sm: "lg", md: "xl" }} fontWeight="400" mt={2} color="gray.600" >A curated list of projects that I have designed and developed over the years</Text>

          <Box gap={8} mt="20px">
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
          </Box>
        </Box>
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
