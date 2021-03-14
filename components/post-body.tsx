
import { Text } from "@chakra-ui/react"

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <Text fontSize="2xl" mt="50">
      <div
        className="work-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Text>
  )
}

export default PostBody
