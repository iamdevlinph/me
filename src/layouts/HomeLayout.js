import PropTypes from 'prop-types';
import { Head, Navbar } from '../components';

const HomeLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <Head />
      <Navbar />
      {children}
    </div>
  );
};

export default HomeLayout;

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

// import Link from 'next/link';

// export default () => (
//   <div>
//     <Link href="/">
//       {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//       <a>home</a>
//     </Link>
//     {' '}
//     <Link href="/about">
//       {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//       <a>about</a>
//     </Link>
//   </div>
// );
