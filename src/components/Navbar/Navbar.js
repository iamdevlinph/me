import Link from 'next/link';
import './Navbar.scss';

export default () => (
  <div className="navbar">
    <Link href="/">
      <img className="navbar--logo" src="/static/favicon.png" alt="logo" />
    </Link>
    <Link href="/about">
      <span>about</span>
    </Link>
    <Link href="/portfolio">
      <span>portfolio</span>
    </Link>
  </div>
);
