import React from 'react'

export const PostCard = ({ title, body, cover }) => (
  <li className="post" >
    <img src={cover} alt={title} />
    <div className="post-content">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  </li>
);

