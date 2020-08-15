
import Head from 'next/head';
import { Layout, Container, Row } from '../components/Layout/index';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';

import { getAllPosts } from '../lib/api';
import { CMS_NAME } from '../lib/constants';
import Post from '../types/post';

type Props = {
  allPosts: Post[]
}

const Articles = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <div className="articles-page">
      <Layout>
        <Head>
          <title>Artciles - {CMS_NAME}</title>
        </Head>
        <div className="articles-page-body">
          <Container>
            <Row>
              <div className="col-12">
                {heroPost && (
                  <HeroPost
                    title={heroPost.title}
                    coverImage={heroPost.coverImage}
                    date={heroPost.date}
                    author={heroPost.author}
                    slug={heroPost.slug}
                    excerpt={heroPost.excerpt}
                  />
                )}
                {morePosts.length > 0 && <MoreStories posts={morePosts} />}</div>
            </Row>
          </Container>
        </div>
      </Layout>
    </div>
  )
}

export default Articles

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])
  return {
    props: { allPosts },
  }
}
