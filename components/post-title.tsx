import { ReactNode } from 'react'
import { Heading, Center } from '@chakra-ui/react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <Heading fontSize="4xl" fontWeight="900" >
      {children}
    </Heading>
  )
}

export default PostTitle
