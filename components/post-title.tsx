import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-center ff-head mt-0 mb-2">
      {children}
    </h1>
  )
}

export default PostTitle
