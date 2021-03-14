import Head from 'next/head'
import Link from 'next/link'
import { Container } from "@chakra-ui/react"
import { Layout } from '../components/Layout/index'

import HeroText from '../components/Hero/text';

import { CMS_NAME } from '../lib/constants'

const Index = () => {

  return (
    <>
      <style global jsx>{`
        html {
          height: 100%;
          background-image: radial-gradient(circle at top left, rgba(174, 170, 203, 0.95) 0%, rgba(166, 202, 236, 0.95) 15%, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0) 100%),
            radial-gradient(circle at top center, rgba(224, 130, 167, 0.95) 20%, rgba(255, 255, 255, 0) 50%),
            radial-gradient(circle at top right, rgba(238, 90, 86, 0.95) 8%, rgba(254, 186, 77, 0.95) 20%, rgba(252, 224, 114, 0.95) 30%, rgba(238, 242, 215, 0.7) 45%, rgba(255, 255, 255, 0) 50%);
          background-position: top center;
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: fixed;
          height: 100%;
        }
      `}</style>
      <div className="homepage">
        <Layout>
          <Head>
            <title>{CMS_NAME}</title>
          </Head>
          <Container>
            <HeroText />
          </Container>
        </Layout>
      </div>
    </>
  )
}

export default Index


