
import { Text } from "@chakra-ui/react"

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <Text fontSize="sm" mt="50">
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Text>
  )
}

export default PostBody
