import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../api/PostCard';
import PostList from '../../components/PostList';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [
      ],
      counter: 0
    };
  }


  async componentDidMount() {
    const postsWithPhotos = await loadPosts();
    this.setState({ posts: postsWithPhotos });
  }

  render() {
    const { posts } = this.state;


    return (
      <section className="container">
        <PostList posts={posts} />
      </section >
    )
  }
}

export default Home;
