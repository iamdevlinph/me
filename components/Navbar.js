import Link from 'next/link';

export default () => (
  <div>
    <Link href="/">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>home</a>
    </Link>
    {' '}
    <Link href="/about">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>about</a>
    </Link>
  </div>
);
