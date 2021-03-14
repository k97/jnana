import { ReactNode } from 'react'
import { Heading, Center } from '@chakra-ui/react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <Center mt="100">
      <Heading as="h2" >
        {children}
      </Heading>
    </Center>
  )
}

export default PostTitle
