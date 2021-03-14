import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getSession, csrfToken } from 'next-auth/client';
import Head from 'next/head'
import ErrorPage from 'next/error'

import { Center, CircularProgress, Container, Heading, Text } from "@chakra-ui/react"

import { getWorkBySlug, getAllWork } from '../../lib/work-api'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'

import { Layout } from '../../components/Layout/index'

type Props = {
  work: any
}

const work = ({ work }: Props) => {
  const router = useRouter()
  const [session, loading]: any = useSession()

  if (!router.isFallback && !work?.slug) {
    return <ErrorPage statusCode={404} />
  }

  useEffect(() => {
    const showLockScreen = async () => {
      const session = await getSession();
      if (!session) {
        signIn()
      }
    };
    showLockScreen();
  });

  return (
    <Layout>
      <Head>
        <title>
          {work.title} | {CMS_NAME}
        </title>
        <meta property="og:image" content={work.ogImage.url} />
      </Head>

      <Container>

        {router.isFallback
          ? (<CircularProgress size="100px" thickness="4px" isIndeterminate />)
          : (
            (work.author.private && !session) ? (
              <Center h="400px"><CircularProgress size="100px" thickness="4px" isIndeterminate /></Center>
            ) : (
              <>
                <Center h="200px"><Heading >{work.title}</Heading></Center>
                <Text className="work-content" dangerouslySetInnerHTML={{ __html: work.content }} />
              </>
            )
          )
        }

      </Container>
    </Layout >
  )
}

export default work

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {

  const work = getWorkBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(work.content || '')

  return {
    props: {
      work: {
        ...work,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const works = getAllWork(['slug'])

  return {
    paths: works.map((works) => {
      return {
        params: {
          slug: works.slug,
        },
      }
    }),
    fallback: false,
  }
}

