import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import './Navbar.scss';

const setActiveLink = (curRoute, nav) => {
  let linkClass = 'link';
  switch (curRoute) {
    case '/blog':
    case '/post':
      if (nav === '/blog') {
        linkClass += ' active-link';
      }
      break;
    default:
      if (curRoute === nav) {
        linkClass += ' active-link';
      }
  }
  return linkClass;
};

const Navbar = (props) => {
  const { router } = props;
  const PAGES = ['about', 'blog', 'portfolio'];
  const urls = PAGES.map(val => (
    <Link href={`/${val}`} key={val}>
      <span className={setActiveLink(router.route, `/${val}`)}>{val}</span>
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
