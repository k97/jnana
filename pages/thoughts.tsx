
import Head from 'next/head';
import { Container, Heading, Text } from "@chakra-ui/react"
import { Layout } from '../components/Layout/index'
import ArticlesList from '../components/Articles/articles-list'

import { getAllPosts } from '../lib/api';
import { CMS_NAME } from '../lib/constants';
import Post from '../types/post';

type Props = {
  postCollection: Post[]
}

const Articles = ({ postCollection }: Props) => {
  const heroPost = postCollection[0]
  const morePosts = postCollection.slice(1)
  return (
    <Layout>
      <Head>
        <title>Articles - {CMS_NAME}</title>
      </Head>

      <Container maxW="container.xl">
        <Heading as="h2" fontSize={{ sm: "2xl", md: "4xl" }} fontWeight="800" mt={75} opacity="0.9">Articles & References</Heading>
        <Text fontSize="xl" fontWeight="400" mt={2} opacity="0.6" >List of journals about digital products</Text>
        <ArticlesList items={postCollection} />
      </Container>
    </Layout >
  )
}

export default Articles

export const getStaticProps = async () => {
  const postCollection = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])
  return {
    props: { postCollection },
  }
}
