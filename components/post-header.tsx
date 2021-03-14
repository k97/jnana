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
      <Center height="100px">
        <Heading fontSize="4xl" fontWeight="900" >
          {title}
        </Heading>
      </Center >
      <Center>
        <Text fontSize="xl">
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
