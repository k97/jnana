import Avatar from './avatar'
import DateFormater from './date-formater'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Author from '../types/author'

import { Center, Heading, Text } from "@chakra-ui/react"
type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <Center height={{ base: "50px", sm: "50px", md: "50px" }} >
        <Heading fontSize={{ sm: "2xl", md: "4xl" }} fontWeight="900" >
          {title}
        </Heading>
      </Center >
      <Center>
        <Text fontSize={{ sm: "lg", md: "xl" }}>
          <DateFormater dateString={date} />
        </Text>
      </Center >
      <>
        { coverImage && <CoverImage title={title} src={coverImage} />}
      </>
    </>
  )
}

export default PostHeader
