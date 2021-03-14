import Avatar from './avatar'
import DateFormater from './date-formater'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'
import { Heading, Text } from '@chakra-ui/react';

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <>
      <Heading fontSize="2xl" fontWeight="600" mt="10" mb="2">
        <Link as={`/articles/${slug}`} href="/articles/[slug]">
          {title}
        </Link>
      </Heading>
      <Text fontSize="lg" mb="2">
        <DateFormater dateString={date} />
      </Text>
      {coverImage && <CoverImage slug={slug} title={title} src={coverImage} />}
      <Text fontSize="2xl" mb="50">{excerpt}</Text>
    </>
  )
}

export default PostPreview
