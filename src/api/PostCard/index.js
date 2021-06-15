export const loadPosts = async () => {
  // fetch('https://jsonplaceholder.typicode.com/posts')
  // .then(response => response.json())
  // .then(posts => this.setState({ posts }));
  const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts');
  const photosPromise = fetch('https://jsonplaceholder.typicode.com/photos');

  const [postsResponse, photosResponse] = await Promise.all([
    postsPromise,
    photosPromise,
  ]);

  const posts = await postsResponse.json();
  const photos = await photosResponse.json();

  const postsWithPhotos = posts.map((post, index) =>
    Object.assign({}, post, { cover: photos[index].url }),
  );
  console.log(postsWithPhotos);
  return postsWithPhotos;
};
