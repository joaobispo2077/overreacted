import { useState, useEffect, useCallback } from 'react';

import PostList from '../../components/PostList';
import { loadPosts } from '../../api/PostCard';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

import './styles.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllposts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [pageInitialPost, setPageInitialPost] = useState(0);
  const [pagination] = useState(5);
  const [filteredPost, setFilteredPost] = useState([]);

  const noMorePosts = pageInitialPost + pagination >= allPosts.length;

  const handlePaginate = () => {
    const nextPage = pageInitialPost + pagination;
    const nextPosts = allPosts.slice(nextPage, nextPage + pagination);
    const newPost = posts.concat(...nextPosts);


    setPageInitialPost(nextPage);
    setPosts(newPost);
    setFilteredPost(newPost);
    console.log('clicooou', nextPage);
  }

  const handleFilterPerTitle = (event) => {
    const searchingTitle = event.target.value.trim();
    console.log(searchTitle);

    const postsFilteredByTitle = allPosts
      .filter(post =>
        post.title.toLowerCase()
          .includes(searchingTitle.toLowerCase()));

    const filteredPostBySearchingTitle = !!postsFilteredByTitle ? postsFilteredByTitle : posts;

    setFilteredPost(filteredPostBySearchingTitle);
    setSearchTitle(searchingTitle);
  }

  const handleLoadPosts = useCallback(async (initialPost, pagination) => {
    const postsWithPhotos = await loadPosts();

    const postsWithPagination = postsWithPhotos.slice(initialPost, pagination);

    setFilteredPost(postsWithPagination);
    setPosts(postsWithPagination);
    setAllposts(postsWithPhotos);
  }, []);


  useEffect(() => {
    console.log('hayooo');
    handleLoadPosts(0, pagination);
  }, [handleLoadPosts, pagination]);

  return (
    <section className="container">

      <div className="search-container">
        {!!searchTitle && (
          <h1>Searching: {searchTitle}</h1>
        )}

        <TextInput
          type="search"
          searchValue={searchTitle}
          onInput={handleFilterPerTitle}
        />
      </div>

      {filteredPost.length > 0 && (
        <PostList posts={filteredPost} />
      )}

      {filteredPost.length === 0 && (
        <p>Post não encontrado</p>
      )}
      <div className="button-container">

        {!searchTitle && (
          <Button
            disabled={noMorePosts}
            onClick={handlePaginate}
            text="Load more posts"
          />
        )}

      </div>
    </section >
  )

}

export default Home;
