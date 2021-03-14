import { csrfToken } from 'next-auth/client'
import { Layout, Container, Row } from './Layout/index'

export default function LockPassphrase({ csrfToken }: any) {
  return (

    <Container>
      <Row>
        <section className="col-12">

          <h1 className="mt0 mb0 black-60">Private Information</h1>
          <p className="lh-copy mt2 measure black-50">Please enter the passphrase to proceed to the project.</p>

          <form className="db w-100 passphrase-form" method='post' action='/api/auth/callback/credentials'>
            <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
            <input name="username" type="text" className="mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph2 border-box" required />
            <button className="input-reset w-100 w-auto-ns bg-blue f2 ph4" type="submit">
              Submit
            </button>
          </form>

          <div className="lh-copy mt3 mb4 black-60">
            <small className="f6">
              Some of the projects are locked down in adherence to the respective NDA(s).
              I intend to share these work only if required for referential purposes.
                <a className="ka-link dim" href="mailto:k97@outlook.in?subject=Access to Karthik's Portfolio">Drop me a message here,</a> to receive the passphrase.
            </small>
          </div>
        </section>
      </Row>
    </Container>
  )
}

LockPassphrase.getInitialProps = async (context: any) => {
  return {
    csrfToken: await csrfToken(context)
  }
}
