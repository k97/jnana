import { ReactNode, FunctionComponent } from 'react'
import Meta from './meta'
import Header from './header'
import Footer from './footer'

type Props = {
  preview?: boolean
  children?: ReactNode
}

export const Container: FunctionComponent = ({ children }: Props) => {
  return <div className="container">{children}</div>
}

export const Row: FunctionComponent = ({ children }: Props) => {
  return <div className="row">{children}</div>
}


export const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <header><Header /></header>
      <main>{children}</main>
      <footer><Footer /></footer>
    </>
  )
}
