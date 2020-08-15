import Avatar from './avatar'
import DateFormater from './date-formater'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-6 text-center small-text">
        <DateFormater dateString={date} />
      </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        { coverImage && <CoverImage title={title} src={coverImage} /> }
      </div>
    </>
  )
}

export default PostHeader
