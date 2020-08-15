import Link from 'next/link'
import WorkImage from './work-image'

type Props = {
  title: string
  coverImage: string
  excerpt: string
  slug: string
}

const WorkPreview = ({
  title,
  coverImage,
  excerpt,
  slug,
}: Props) => {
  return (
    <section className="col-6">
      <Link as={`/work/${slug}`} href="/work/[slug]">
        <div className="work-card">
          <h3 className="m-0">{title}</h3>
          <div className="cover-image-wrapper text-center">
            {coverImage && <img src={coverImage} alt={`Cover Image for ${title}`} />}
          </div>
          <p>{excerpt}</p>
        </div>
      </Link>
    </section>
  )
}

export default WorkPreview
