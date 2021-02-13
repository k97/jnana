import Avatar from './avatar'
import DateFormater from './date-formater'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section>
      <div className="article-cover ">
        {coverImage && <CoverImage title={title} src={coverImage} slug={slug} />}
      </div>
      <div className="article-list-item">
        <div>
          <h3 className="mb-1">
            <Link as={`/articles/${slug}`} href="/articles/[slug]">
              <a className="ff-head no-bg">{title}</a>
            </Link>
          </h3>
          <div className="small-text">
            <DateFormater dateString={date} />
          </div>
        </div>
        <div>
          <p className="">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}

export default HeroPost
