import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import { MainLayout } from '../src/layouts';

const Post = (props) => {
  const { show } = props;
  return (
    <MainLayout>
      <h1>{show.name}</h1>
      <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
      <img src={show.image.medium} alt={show.image.medium} />
    </MainLayout>
  );
};

Post.getInitialProps = async (context) => {
  const { id } = context.ctx.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  return { show };
};

export default Post;

Post.propTypes = {
  show: PropTypes.object.isRequired,
};
