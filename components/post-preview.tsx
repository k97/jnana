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
      <Heading as="h5">
        <Link as={`/articles/${slug}`} href="/articles/[slug]">
          {title}
        </Link>
      </Heading>
      <Text mb="2" fontSize="sm">
        <DateFormater dateString={date} />
      </Text>
      {coverImage && <CoverImage slug={slug} title={title} src={coverImage} />}
      <Text mb="4" fontSize="md">{excerpt}</Text>
    </>
  )
}

export default PostPreview
