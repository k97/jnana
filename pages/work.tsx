
import Head from 'next/head';
import { Layout, Container, Row } from '../components/Layout/index';
import WorkPreview from '../components/Work/work-preview'

import { getAllWork } from '../lib/work-api';
import { CMS_NAME } from '../lib/constants';


type Props = {
  allWork: any
}

const Work = ({ allWork }: Props) => {
  return (
    <div className="work-page">
      <Layout>
        <Head>
          <title>Work - {CMS_NAME}</title>
        </Head>
        <div className="work-page-body">
          <Container>
            <Row>
              <div className="col-12"><h1 className="ff-head m-0">Selective Projects</h1></div>
              {allWork.map((work: any) => (
                <WorkPreview
                  key={work.slug}
                  title={work.title}
                  coverImage={work.coverImage}
                  slug={work.slug}
                  excerpt={work.excerpt}
                />
              ))}
            </Row>
          </Container>
        </div>
      </Layout>
    </div>
  )
}

export default Work

export const getStaticProps = async () => {
  const allWork = getAllWork([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allWork },
  }
}
