
import Head from 'next/head'
import { Layout, Container, Row } from '../components/Layout/index'
import { CMS_NAME, GOOGLE_DRIVE_RESUME } from '../lib/constants'

const About = () => {

  return (
    <div className="about-page">
      <style global jsx>{`
      html {
        height: 100%;
      }
    `}</style>
      <Layout>
        <Head>
          <title>About - {CMS_NAME}</title>
        </Head>
        <Container>
          <Row>
            <div className="about-content col-6">
              <h1 className="ff-hero">About </h1>
              <p>My full name is Karthikeyan Rajendran and I like to think myself as part designer and a part coder. I have been tinkering with web ever since I started using it and I enjoy spending my time on designing and building products, both physical &amp; digital.</p>

              <p>Right now, I'm working as Product Designer at <a href="https://telstrahealth.com/" target="_blank">Telstra Health ↗</a> in Melbourne, designing and building digital products for virtual healthcare.
              </p>

              <p>Before Telstra Health, I was working with <a href="https://www.emirates.com/au/english/about-us/">Emirates Airlines ↗</a> across different teams to deliver products used by the flight crew and passengers. I started my foray as product designer at FastTrack360 cloud systems.</p>

              <p>I share my perspectives on things that are interesting <a href="/articles">here</a> and if you are looking for my resume, <a href={GOOGLE_DRIVE_RESUME} target="_blank">it's here ↗</a>.</p>

            </div>
          </Row>
        </Container>
      </Layout>
    </div>
  )
}

export default About


