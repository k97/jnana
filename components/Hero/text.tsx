import Link from 'next/link'

const HeroText = () => {
  return (
    <section className="homepage">
      <div className="col-5">
        <strong >Hello! I am</strong>
        <h1 className="ff-hero">Karthik</h1>

        <p className="p-large">Designer based in Melbourne, who likes to code, create experienes that makes people’s lives easier.

        <Link href="/about">
          <img src="/assets/next.svg" className="arrow-icon d-inline-block align-middle" />
        </Link>
        </p>
        <p className="p-normal">See few of my selective work here, or I record things that I find interesting <Link href="/recordings">here</Link>.</p>
      </div>


    </section>
  )
}

export default HeroText
