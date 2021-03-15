import Avatar from './avatar'
import DateFormater from './date-formater'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'
import { Box, Heading, Text } from '@chakra-ui/react';

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
    <Box color="gray.600" _hover={{ background: 'brand.50', rounded: "xl", shadow: "sm" }}>
      <Link as={`/articles/${slug}`} href={`/articles/${slug}`}>
        <Heading as="h3" fontSize="2xl" fontWeight="600" pt="35" mb="2" cursor="pointer">{title}</Heading>
      </Link>
      <Text fontSize="lg" mb="2">
        <DateFormater dateString={date} />
      </Text>
      <Link as={`/articles/${slug}`} href={`/articles/${slug}`} >
        <>{coverImage && <CoverImage slug={slug} title={title} src={coverImage} />}
          <Text fontSize="2xl" mb="0" cursor="pointer">{excerpt}</Text></>
      </Link>

    </Box >
  )
}

export default HeroPost
