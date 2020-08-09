import Link from 'next/link'
import { Container, Row } from './index'

const Footer = () => {
  return (
    <Container>
      <Row>
        <section className="col-4">
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
          <span className="small-text">Copyright &copy; 2020. No Tracking</span>
        </section>
      </Row>
    </Container>
  )
}

export default Footer
