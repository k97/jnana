import PostPreview from './post-preview'
import Post from '../types/post'
import { Heading, Text } from '@chakra-ui/react';

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <>
      <Heading as="h3" mt="10" mb="4">
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
