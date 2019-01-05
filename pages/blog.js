/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import { MainLayout } from '../src/layouts';

const Blog = (props) => {
  const { shows } = props;
  return (
    <MainLayout>
      <h1>Batman TV Shows</h1>
      <ul>
        {shows.map(({ show }) => (
          <li key={show.id}>
            <Link as={`/post/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

Blog.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  return {
    shows: data,
  };
};

export default Blog;

Blog.propTypes = {
  shows: PropTypes.array.isRequired,
};
