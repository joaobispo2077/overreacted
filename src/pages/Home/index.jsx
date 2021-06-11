import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../api/PostCard';
import PostList from '../../components/PostList';
import { Button } from '../../components/Button';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allPosts: [],
      posts: [
      ],
      page: {
        initialPost: 0,
        pagination: 99,
      }
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

  render() {
    const { posts, page, allPosts } = this.state;
    const noMorePosts = page.initialPost + page.pagination >= allPosts.length;

    return (
      <section className="container">
        <PostList posts={posts} />
        <div className="button-container">
          <Button
            disabled={noMorePosts}
            onClick={this.handlePaginate}
            text="Load more posts"
          />
        </div>
      </section >
    )
  }
}

export default Home;
