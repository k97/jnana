import cn from 'classnames'
import Link from 'next/link'
import { Image } from "@chakra-ui/react"

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className="article-cover-img "
    />
  )
  return (
    <>
      {slug ? (
        <Link as={`/articles/${slug}`} href="/articles/[slug]">
          <a aria-label={title} className="no-bg">{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  )
}

export default CoverImage
