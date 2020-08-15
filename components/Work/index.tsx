import WorkPreview from './work-preview'

type Props = {
  works: any
}

const MoreStories = ({ works }: Props) => {

  return (
    <section>
      <h1 className="ff-head">
        Selective Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {works.map((work: any) => (
          <WorkPreview
            key={work.slug}
            title={work.title}
            coverImage={work.coverImage}
            slug={work.slug}
            excerpt={work.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
