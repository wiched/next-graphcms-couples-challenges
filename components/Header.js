import Link from 'next/link'

const Header = ({ pathname }) => (
  <header>

    <nav className="deep-orange darken-1">
      <div className="nav-wrapper ">
        <a href="/" className="brand-logo center">Couples Challenges</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li className={pathname === '/' && 'active'}>
            <Link prefetch href='/index'>
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
    button:focus {
      background-color: transparent;
    }
    @media (max-width: 992px) {
      .brand-logo {
        display: none !important;
      }
      .hide-on-med-and-down {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important
      }
      nav ul.left {
        float: none !important;
      }
    }
    `}</style>
  </header>
)

export default Header
