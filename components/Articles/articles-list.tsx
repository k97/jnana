
import Link from 'next/link'
import { Heading, Text, Divider } from '@chakra-ui/react'

import ArticleCard from './article-card'
import Post from '../../types/post'

type Props = {
  items: Post[]
}


const ArticlesList = ({ items }: Props) => {
  return (
    <>
      {items.map((post) => (
        <ArticleCard
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

export default ArticlesList
