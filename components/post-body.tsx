
import { Box } from "@chakra-ui/react"

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <Box fontSize="2xl" mt="50">
      <div
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Box>
  )
}

export default PostBody
