import { useRouter } from 'next/router'
import { useState, useRef, useEffect } from "react"
import { signIn, signOut, useSession, getSession, csrfToken } from 'next-auth/client'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Link from 'next/link'
import mediumZoom from 'medium-zoom'

import { Center, CircularProgress, Container, Heading, Image, Flex, Box, Button } from "@chakra-ui/react"

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
  const contentRef = useRef(null)


  if (!router.isFallback && !work?.slug) {
    return <ErrorPage statusCode={404} />
  }

  useEffect(() => {
    const showLockScreen = async () => {
      const session = await getSession();
      if (work.author.private && !session) {
        signIn()
      }
    };
    showLockScreen();
    setTimeout(() => {
      const ele: any = contentRef.current;
      if (ele && ele.textContent.length > 0) {
        ele.click()
      }
    }, 1000);

  });


  const handleToggleBody = () => {
    const ele: any = contentRef.current;

    if (ele && ele.textContent.length > 0) {
      const images: any = ele.querySelectorAll('img');
      mediumZoom(images);
    }
  }


  return (
    <Layout>
      <Head>
        <title>
          {work.title} | {CMS_NAME}
        </title>
        <meta property="og:image" content={work.ogImage.url} />
      </Head>

      <Container maxW="container.xl" >
        {router.isFallback
          ? (<CircularProgress size="100px" thickness="4px" isIndeterminate />)
          : (
            (work.author.private && !session) ? (
              <Center h="400px"><CircularProgress size="100px" thickness="4px" isIndeterminate /></Center>
            ) : (
              <>
                <Link href="/work">
                  <Button mt="5" fontSize="xl" fontWeight="400" size="lg">← &nbsp;&nbsp;Work</Button>
                </Link>

                <Flex mt="5">
                  <Center>
                    <Image src={work.coverImage} alt={`Cover Image for ${work.title}`} rounded="2xl" width="120px" mr="4" />
                  </Center>
                  <Box flex="1">
                    <Heading fontSize="5xl" color="gray.700" fontWeight="900" pt="5" pb="5" letterSpacing="-1.05px">{work.title}</Heading>
                  </Box>
                </Flex>

                <Box mt="5" fontSize="2xl">
                  <div className="markdown-content" ref={contentRef} onClick={handleToggleBody} dangerouslySetInnerHTML={{ __html: work.content }} />
                </Box>
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

  const content = await markdownToHtml(work.content || '');


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

