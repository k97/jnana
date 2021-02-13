import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'

import { getWorkBySlug, getAllWork } from '../../lib/work-api'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'

import { Layout, Container, Row } from '../../components/Layout/index'

type Props = {
  work: any
}

const work = ({ work }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !work?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Head>
        <title>
          {work.title} | {CMS_NAME}
        </title>
        <meta property="og:image" content={work.ogImage.url} />
      </Head>
      <section className="work-page-body">
        <Container>
          <Row>
            <div className="col-12">
              {router.isFallback
                ? (<h1 className="text-center ff-head mb-1">Loading…</h1>)
                : (
                  <>
                    <h1 className="text-center ff-head mb-1">{work.title}</h1>
                    <div className="work-content" dangerouslySetInnerHTML={{ __html: work.content }} />
                  </>
                )
              }
            </div>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default work

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {

  const work = getWorkBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(work.content || '')

  return {
    props: {
      work: {
        ...work,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const works = getAllWork(['slug'])

  return {
    paths: works.map((works) => {
      return {
        params: {
          slug: works.slug,
        },
      }
    }),
    fallback: false,
  }
}