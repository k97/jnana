import Link from 'next/link'
import { Container, Row } from './Layout/index'

const Footer = () => {
  return (
    <Container>
      <Row>
        <div className="col-4">
          <strong className="label">contact</strong>
          <div className="social-icon-wrapper">
            <Link href="/">
              <img src="/assets/github-icon.svg" />
            </Link>
            <Link href="/">
              <img src="/assets/twitter-icon.svg" />
            </Link>
            <Link href="/">
              <img src="/assets/mail-icon.svg" />
            </Link>
            <Link href="/">
              <img src="/assets/linkedin-icon.svg" />
            </Link>
          </div>
          <span className="label">Copyright &copy; 2020. No Tracking</span>

          <p>
            <Link href="/about">
              <a>About</a>
            </Link>
          </p>
          <p>
            <Link href="/recordings" >
              <a>Recordings</a>
            </Link>
          </p>

        </div>
      </Row>
    </Container>
  )
}

export default Footer
