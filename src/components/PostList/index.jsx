import React from 'react'
import { PostCard } from '../PostCard'
import './styles.css';

export default function PostList({ posts = [] }) {
  return (
    <ul className="posts">
      {posts.map(post =>
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          id={post.id}
          cover={post.cover}
        />
      )}
    </ul>
  )
}
