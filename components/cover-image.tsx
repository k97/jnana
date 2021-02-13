import cn from 'classnames'
import Link from 'next/link'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className="article-cover-img "
    />
  )
  return (
    <div className="">
      {slug ? (
        <Link as={`/articles/${slug}`} href="/articles/[slug]">
          <a aria-label={title} className="no-bg">{image}</a>
        </Link>
      ) : (
          image
        )}
    </div>
  )
}

export default CoverImage
