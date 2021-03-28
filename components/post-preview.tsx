import Avatar from './avatar'
import DateFormater from './date-formater'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'
import { Heading, Text, Divider, Box, useColorModeValue } from '@chakra-ui/react';

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
  const backgroundHoverColor = useColorModeValue("brand.50", "gray.700");
  return (
    <Box _hover={{ background: backgroundHoverColor, rounded: "xl", shadow: "sm" }}>
      <Link as={`/articles/${slug}`} href={`/articles/${slug}`}>
        <Heading as="h3" fontSize={{ sm: "xl", md: "2xl" }} fontWeight="600" pt="35" mb="2" cursor="pointer" opacity="0.85">{title}</Heading>
      </Link>
      <Text fontSize="lg" mb="2" opacity="0.65">
        <DateFormater dateString={date} />
      </Text>
      <Link as={`/articles/${slug}`} href={`/articles/${slug}`} >
        <>{coverImage && <CoverImage slug={slug} title={title} src={coverImage} />}
          <Text fontSize={{ sm: "xl", md: "2xl" }} mb="0" cursor="pointer" opacity="0.75">{excerpt}</Text></>
      </Link>

      <Divider orientation="horizontal" pb="35" />
    </Box >
  )
}

export default PostPreview
