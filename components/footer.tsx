import Link from 'next/link'
import { Container, Row } from './Layout/index'

const Footer = () => {
  return (
    <Container>
      <Row>
        <div className="col-4">
          <p className="label type-white">contact</p>
          <p>
            <Link href="/about">
              <a>About</a>
            </Link>
          </p>
          <p>
            <Link href="/recordings">
              <a>Recordings</a>
            </Link>
          </p>
          <p>
            <a title="Work">Github</a>
          </p>
        </div>
      </Row>
    </Container>
  )
}

export default Footer
