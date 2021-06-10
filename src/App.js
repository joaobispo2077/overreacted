import './App.css';
import { Component } from 'react';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [
      ],
      counter: 0
    };
  }

  timeoutUpdate = null;


  componentDidMount() {
    this.handleTimeout();
  }

  componentDidUpdate() {
    clearTimeout(this.timeoutUpdate);
    this.handleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeout = () => {
    const { counter } = this.state;
    this.timeoutUpdate = setTimeout(() => {

      this.setState({
        posts: [
          {
            id: 1,
            title: 'dfasdf',
            body: 'dasfkjasdfk'
          },
          {
            id: 2,
            title: 'jdgjae',
            body: '85408'
          },
          {
            id: 3,
            title: '0405404',
            body: 'asdfasdfds'
          },
        ],
        counter: Number(counter) + 1
      })
    }, 1000);
  }

  render() {
    const { posts, counter } = this.state;


    return (
      <div className="App">
        <h1>counter: {counter}</h1>
        <ul>

          {posts.map(post => (
            <li key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </li>
          )
          )}
        </ul>
      </div >
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
