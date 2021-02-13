import Head from 'next/head'
import Link from 'next/link'

import { Layout, Container, Row } from '../components/Layout/index'

import HeroText from '../components/Hero/text';

import { CMS_NAME } from '../lib/constants'

const Index = () => {

  return (
    <>
      <style global jsx>{`
        html {
          height: 100%;
        }
      `}</style>
      <div className="homepage">
        <Layout>
          <Head>
            <title>{CMS_NAME}</title>
          </Head>
          <Container>
            <Row>
              <HeroText />
            </Row>
          </Container>
        </Layout>
      </div>
    </>
  )
}

export default Index


