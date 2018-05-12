import Link from 'next/link'

const Header = ({ pathname }) => (
  <header>
    <nav className="cyan">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo center">Couples Challenges</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li className={pathname === '/' && 'active'}>
            <Link prefetch href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link prefetch href='/#challenges'>
              <a className={pathname.includes('/post') && 'active'}><button href="#challenges">Challenges</button></a>
            </Link>
          </li>
          <li>
            <Link prefetch href='/#about'>
              <a className={pathname === '/about' && 'active'}><button href="#about">About</button></a>
            </Link>
          </li>
          <li>
            <Link prefetch href='/#contact'><a className={pathname === '/contact' && 'active'}>
              <button href="#contact">Contact Us</button>
            </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <style jsx>{`

    `}</style>
  </header>
)

export default Header
