
import Link from 'next/link'
import { Heading, Text, Divider } from '@chakra-ui/react'

import PostPreview from './post-preview'
import Post from '../types/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <>
      <Heading fontSize={{ sm: "xl", md: "3xl" }} fontWeight="800" mt="4" mb="2" opacity="0.75">
        Previous Articles
      </Heading>
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </>
  )
}

export default MoreStories
