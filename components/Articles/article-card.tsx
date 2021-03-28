
import Link from 'next/link'
import { Heading, Text, Divider, Box, useColorModeValue } from '@chakra-ui/react';

import DateFormater from '../date-formater'
import Author from '../../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const ArticleCard = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {

  const linkColor = useColorModeValue("gray.700", "brand.50");
  const linkHoverColor = useColorModeValue("brand.500", "brand.200");

  return (
    <Box >
      <Link as={`/articles/${slug}`} href={`/articles/${slug}`}>
        <Heading as="a" fontSize={{ sm: "xl", md: "2xl" }} color={linkColor} display="block" fontWeight="600" pt="30" mb="2" cursor="pointer" opacity="0.85" _hover={{ color: linkHoverColor, textDecoration: "none" }}>{title}</Heading>
      </Link>
      <Text fontSize={{ sm: "xl", md: "2xl" }} mb="0" opacity="0.75">{excerpt}</Text>

      <Text fontSize="lg" mt="2" opacity="0.65">
        <DateFormater dateString={date} />
      </Text>
      <Divider orientation="horizontal" pb="35" />
    </Box >
  )
}

export default ArticleCard
