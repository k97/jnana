import Link from 'next/link'

const HeroText = () => {
  return (
    <section className="homepage-content">
      <div className="col-5">
        <strong >Hello! I am</strong>
        <h1 className="ff-hero">Karthik</h1>

        <p className="p-large">Designer based in Melbourne, who likes to code, create experiences that makes people’s lives easier.

          <Link href="/about">
            <img src="/assets/next.svg" className="arrow-icon d-inline-block align-middle" />
          </Link>
        </p>

        <p className="p-normal">See few of my selective <Link href="/work">work here</Link>, or If you want to read some interesting collation of <Link href="/articles">articles here</Link>.</p>
      </div>
      <div className="col-7">
        <img src="/assets/hero.svg" className="hero-static" />
      </div>

    </section>
  )
}

export default HeroText
