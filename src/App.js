import './App.css';
import { Component } from 'react';
import { PostCard } from './components/PostCard';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [
      ],
      counter: 0
    };
  }



  componentDidMount() {
    this.loadPosts();
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  loadPosts = async () => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    // .then(posts => this.setState({ posts }));
    const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosPromise = fetch('https://jsonplaceholder.typicode.com/photos');

    const [postsResponse, photosResponse] = await Promise.all([postsPromise, photosPromise]);

    const posts = await postsResponse.json();
    const photos = await photosResponse.json();

    const postsWithPhotos = posts.map((post, index) => Object
      .assign({}, post, { cover: photos[index].url }))
    console.log(postsWithPhotos);
    this.setState({ posts: postsWithPhotos });
  }

  render() {
    const { posts } = this.state;


    return (
      <section className="container">
        <ul className="posts">

          {posts.map(post =>
            <PostCard
              title={post.title}
              body={post.body}
              id={post.id}
              cover={post.cover}
            />
          )}
        </ul>
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
