import Link from 'next/link'

import { Container, Row } from './Layout/index';

const Header = () => {
  return (
    <Container>
      <Row>
        <div className="col-12">
          <Link href="/">
            <img src="/assets/logo.svg" alt="K97 Logo" className="logo" />
          </Link>
        </div>
      </Row>
    </Container>
  )
}

export default Header
