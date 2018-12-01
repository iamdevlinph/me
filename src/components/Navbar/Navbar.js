import Link from 'next/link';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import './Navbar.scss';

const Navbar = (props) => {
  const { router } = props;
  return (
    <div className="navbar">
      <Link href="/">
        <img className="navbar--logo" src="/static/favicon.png" alt="logo" />
      </Link>
      <div className="navbar--links">
        <Link href="/about">
          <span className={`link ${router.route === '/about' && 'active-link'}`}>about</span>
        </Link>
        <Link href="/portfolio">
          <span className={`link ${router.route === '/portfolio' && 'active-link'}`}>portfolio</span>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Navbar);

Navbar.propTypes = {
  router: PropTypes.node.isRequired,
};
