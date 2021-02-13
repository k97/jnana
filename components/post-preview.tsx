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

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div className="article-list-item">
      <h3 className="mb-0">
        <Link as={`/articles/${slug}`} href="/articles/[slug]">
          <a className="no-bg">{title}</a>
        </Link>
      </h3>
      <div className="small-text">
        <DateFormater dateString={date} />
      </div>
      <div className="mb-0">
        {coverImage && <CoverImage slug={slug} title={title} src={coverImage} />}
      </div>
      <p className="mb-4">{excerpt}</p>
    </div>
  )
}

export default PostPreview
