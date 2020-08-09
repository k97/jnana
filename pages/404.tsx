import Error from 'next/error'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <section className="text-center">
        <h1 className="ff-hero">404 Not Found</h1>
        <p className="small-text">
          Personal projects are hard to juggle with day jobs and I'm trying my best to fit in all the pages soon, please check again later.
        </p>
        <p>
          <Link href="/">
            <a>Go to Homepage</a>
          </Link>
        </p>
        <iframe src="https://giphy.com/embed/mq5y2jHRCAqMo" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
      </section>
    </>
  )
}
