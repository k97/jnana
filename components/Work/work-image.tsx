import cn from 'classnames'
import Link from 'next/link'

type Props = {
  title: string
  src: string
  slug?: string
}

const WorkImage = ({ title, src, slug }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className="article-cover-img"
    />
  )
  return (
    <div className="">
      {slug ? (
        <a aria-label={title} className="no-bg">{image}</a>
      ) : (
        image
      )}
    </div>
  )
}

export default WorkImage
