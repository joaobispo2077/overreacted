import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const PostCard = ({ id, title, body, cover }) => (
  <li className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h1>
        {id} - {title}
      </h1>
      <p>{body}</p>
    </div>
  </li>
);

PostCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};
