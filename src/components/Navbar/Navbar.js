import Link from 'next/link';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import './Navbar.scss';

const Navbar = (props) => {
  const { router } = props;
  const PAGES = ['about', 'blog', 'portfolio'];
  const urls = PAGES.map(val => (
    <Link href={`/${val}`} key={val}>
      <span className={`link ${router.route === `/${val}` && 'active-link'}`}>{val}</span>
    </Link>
  ));
  return (
    <div className="navbar">
      <Link href="/">
        <img className="navbar--logo" src="/static/favicon.png" alt="logo" />
      </Link>
      <div className="navbar--links">
        {urls}
      </div>
    </div>
  );
};

export default withRouter(Navbar);

Navbar.propTypes = {
  router: PropTypes.object.isRequired,
};
