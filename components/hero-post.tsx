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

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <>
      <div className="article-cover ">
        {coverImage && <CoverImage title={title} src={coverImage} slug={slug} />}
      </div>
      <Heading size="md" mt="50" mb="2">
        <Link as={`/articles/${slug}`} href="/articles/[slug]">
          <a className="ff-head no-bg">{title}</a>
        </Link>
      </Heading>
      <Text fontSize="sm">
        <DateFormater dateString={date} />
      </Text>
      <Text fontSize="md" className="">{excerpt}</Text>
    </>
  )
}

export default HeroPost
