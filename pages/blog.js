import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { MainLayout } from '../src/layouts';

const PostLink = (props) => {
  const { title, id } = props;
  return (
    <li>
      <Link as={`/blog/${id}`} href={`/post?title=${title}`}>
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <a>{title}</a>
        {/* eslint-enable jsx-a11y/anchor-is-valid */}
      </Link>
    </li>
  );
};

PostLink.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default () => (
  <MainLayout>
    <span>Hello people</span>
    <p>This is the blog page</p>
    <ul>
      <PostLink title="Hello Next.js" id="hello-nextjs" />
      <PostLink title="Learn Next.js is awesome" id="learn-nextjs-is-awesome" />
      <PostLink title="Deploy apps with Zeit" id="deploy-apps-with-zeit" />
    </ul>
  </MainLayout>
);
