
import Head from 'next/head'
import Header from '../components/header'
import { Layout, Container, Row } from '../components/Layout/index'
import { CMS_NAME } from '../lib/constants'

const About = () => {

  return (
    <>
      <Layout>
        <Head>
          <title>About - {CMS_NAME}</title>
        </Head>
        <Header />
        <Container>
          <Row>
            <div className="col-12">
              <h1>About Page</h1>
            </div>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export default About


