import './App.css';
import { Component } from 'react';
import { PostCard } from './components/PostCard';
import { loadPosts } from './api/PostCard';
import PostList from './api/PostList';


class App extends Component {

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

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
