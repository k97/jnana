
import Head from 'next/head'
import { Layout, Container, Row } from '../components/Layout/index'
import { CMS_NAME } from '../lib/constants'

const About = () => {

  return (
    <>
      <Layout>
        <Head>
          <title>About - {CMS_NAME}</title>
        </Head>
        <Container>
          <Row>
            <div className="col-6">
              <h1 className="ff-hero">About </h1>
              <p>My full name is Karthikeyan Rajendran and I like to think myself as part designer and a part coder. I have been tinkering with web ever since I started using it and I enjoy spending my time on designing and building products, both physical &amp; digital.</p>
              <p>Right now, I'm working as Product Designer at <a href="https://telstrahealth.com/" target="_blank">Telstra Health</a> in Melbourne, designing and building digital products that helps virtual healthcare.
              </p>
              <p>I share my prespectives on things that are interesting <a href="/recordings">here</a> and if you are looking for my resume, <a href="/resume">it's here</a>.
              </p>
            </div>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export default About


