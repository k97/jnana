
import Head from 'next/head'

import Header from '../components/header'

import Layout from '../components/layout'
import { Container, Row } from '../components/Layout/index'

import { CMS_NAME } from '../lib/constants'

const Index = () => {

  return (
    <>
      <Layout>
        <Head>
          <title>Homepage - {CMS_NAME}</title>
        </Head>
        <Header />
        <Container>
          <Row>
            <div className="col-12">
              <strong>Hello! I am</strong>
              <h1>Karthik</h1>
              <p className="x-large">
                Designer based in Melbourne, who likes to code,  create experienes that makes people’s lives easier.</p>
              <p className="x-large">See few of my selective work here, or I record things that I find interesting here.</p>
            </div>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export default Index


