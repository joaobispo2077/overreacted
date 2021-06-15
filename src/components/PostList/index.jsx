import React from 'react';
import PropTypes from 'prop-types';

import { PostCard } from '../PostCard';
import './styles.css';

export default function PostList({ posts = [] }) {
  return (
    <ul className="posts">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          id={post.id}
          cover={post.cover}
        />
      ))}
    </ul>
  );
}

PostList.defaultProps = {
  posts: [],
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
    }),
  ),
};
