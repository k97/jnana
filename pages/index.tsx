import Head from 'next/head'
import Link from 'next/link'
import { Container } from "@chakra-ui/react"
import { Layout } from '../components/Layout/index'

import HeroIntro from '../components/Hero/intro';

import { CMS_NAME } from '../lib/constants'

const Index = () => {

  return (
    <>
      <style global jsx>{`
        html {
          height: 100%;
          background-image: radial-gradient( circle 1158px at 6.4% 48.8%,  rgba(195,241,245,1) 0%, rgba(255,255,255,1) 90.2% );
          background-position: top center;
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }
        .header-background {
          border: none;
          backdrop-filter: none;
          box-shadow: none!important;
          position: relative!important;
        }
      `}</style>
      <div className="homepage">
        <Layout>
          <Head>
            <title>{CMS_NAME}</title>
          </Head>
          <HeroIntro />
        </Layout>
      </div>
    </>
  )
}

export default Index


