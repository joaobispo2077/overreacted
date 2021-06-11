import React from 'react'

export const PostCard = ({ id, title, body, cover }) => (
  <li className="post" >
    <img src={cover} alt={title} />
    <div className="post-content">
      <h1>{id} - {title}</h1>
      <p>{body}</p>
    </div>
  </li>
);

