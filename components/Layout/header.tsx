import Link from 'next/link'
import { Container, Row } from './index';

const Header = () => {
  return (
    <div className="app-header">
      <Container>
        <Row>
          <div className="col-3 col-4-sm">
            <Link href="/">
              <img src="/assets/logo.svg" alt="K97 Logo" className="logo" />
            </Link>
          </div>
          <div className="col-9 col-8-sm">
            <ul className="app-menulist">
              <li className="app-menulist--about"><Link href="/about">About</Link></li>
              <li className="app-menulist--work"><Link href="/work">Work</Link></li>
              <li className="app-menulist--line"><Link href="/articles">Articles</Link></li>
            </ul>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Header
