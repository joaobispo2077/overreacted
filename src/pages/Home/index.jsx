import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../api/PostCard';
import PostList from '../../components/PostList';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allPosts: [],
      posts: [],
      page: {
        initialPost: 0,
        pagination: 99,
      },
      searchTitle: ""
    };
  }


  async componentDidMount() {
    const { page } = this.state;

    const postsWithPhotos = await loadPosts();

    this.setState({
      posts: postsWithPhotos.slice(page.initialPost, page.pagination),
      allPosts: postsWithPhotos
    });
  }


  handlePaginate = () => {
    const { page, allPosts, posts } = this.state;

    const nextPage = page.initialPost + page.pagination;
    const nextPosts = allPosts.slice(nextPage, nextPage + page.pagination);
    posts.push(...nextPosts);

    this.setState({
      posts,
      page: { ...page, initialPost: nextPage }
    });
    console.log('clicooou', this.state.page);
  }

  handleFilterPerTitle = (event) => {
    const searchTitle = event.target.value.trim();
    console.log(searchTitle);

    const { allPosts, posts } = this.state;

    const postsFilteredByTitle = allPosts
      .filter(post =>
        post.title.toLowerCase()
          .includes(searchTitle.toLowerCase()));

    const filteredPost = !!postsFilteredByTitle ? postsFilteredByTitle : posts;

    this.setState({ filteredPost, searchTitle });
  }

  render() {
    const { page, allPosts, searchTitle, filteredPost = this.state.posts } = this.state;

    const noMorePosts = page.initialPost + page.pagination >= allPosts.length;

    return (
      <section className="container">

        <div className="search-container">
          {!!searchTitle && (
            <h1>Searching: {searchTitle}</h1>
          )}

          <TextInput
            type="search"
            searchValue={searchTitle}
            onInput={this.handleFilterPerTitle}
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
              onClick={this.handlePaginate}
              text="Load more posts"
            />
          )}

        </div>
      </section >
    )
  }
}

export default Home;
