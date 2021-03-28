import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import { Center, CircularProgress, Container, Heading, SimpleGrid, Box, Button } from "@chakra-ui/react"
import { Layout } from '../../components/Layout/index'

import PostHeader from '../../components/Post/post-header'
import PostTitle from '../../components/Post/post-title'
import PostBody from '../../components/Post/post-body'

import PostType from '../../types/post'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Head>
        <title>
          {post.title} | {CMS_NAME}
        </title>
        <meta property="og:image" content={post.ogImage.url} />
      </Head>

      <Container maxW="container.xl">
        {router.isFallback
          ? (<CircularProgress size="100px" thickness="4px" isIndeterminate />)
          : (
            <>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </>
          )}
      </Container>
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
