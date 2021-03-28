
import Head from 'next/head';
import { Container, Heading, Text } from "@chakra-ui/react"
import { Layout } from '../components/Layout/index';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';

import { getAllPosts } from '../lib/api';
import { CMS_NAME } from '../lib/constants';
import Post from '../types/post';

type Props = {
  allPosts: Post[]
}

const Articles = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <Layout>
      <Head>
        <title>Articles - {CMS_NAME}</title>
      </Head>

      <Container maxW="container.xl">
        <Heading as="h2" fontSize={{ sm: "2xl", md: "4xl" }} fontWeight="800" mt={75} opacity="0.9">Articles & References</Heading>
        <Text fontSize="xl" fontWeight="400" mt={2} opacity="0.6" >List of journals about digital products</Text>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout >
  )
}

export default Articles

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])
  return {
    props: { allPosts },
  }
}
