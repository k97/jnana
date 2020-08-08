import { ReactNode, FunctionComponent } from 'react'

type Props = {
  children?: ReactNode
}

export const Container: FunctionComponent = ({ children }: Props) => {
  return <div className="container">{children}</div>
}

export const Row: FunctionComponent = ({ children }: Props) => {
  return <div className="row">{children}</div>
}

