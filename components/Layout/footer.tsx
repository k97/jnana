import Link from 'next/link'
import { Container, Row } from './index'

const Footer = () => {

  const yearVal = new Date().getFullYear();
  return (
    <Container>
      <Row>
        <section className="col-4">
          <strong className="label">contact</strong>
          <div className="social-icon-wrapper">
            <a href="https://twitter.com/k97co" target="_blank">
              <img src="/assets/twitter-icon.svg" />
            </a>
            <a href="mailto:karthik97live@gmail.com?subject=Hello Karthik!">
              <img src="/assets/mail-icon.svg" />
            </a>
            <a href="https://github.com/k97" target="_blank">
              <img src="/assets/github-icon.svg" />
            </a>
            <a href="https://www.linkedin.com/in/rajendrankarthikeyan" target="_blank">
              <img src="/assets/linkedin-icon.svg" />
            </a>
          </div>
          <span className="small-text">Copyrights &copy; {yearVal}. No Tracking</span>
        </section>
      </Row>
    </Container>
  )
}

export default Footer
