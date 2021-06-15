import { render, screen } from "@testing-library/react";
import PostList from '.';

const createMockPosts = () => {
  const mockPosts = [
    {
      id: 1,
      title: 'title 1',
      body: 'body 1',
      cover: 'img/img1.png'
    },
    {
      id: 2,
      title: 'title 2',
      body: 'body 2',
      cover: 'img/img2.png'
    },
    {
      id: 3,
      title: 'title 3',
      body: 'body 3',
      cover: 'img/img3.png'
    },
  ];

  return mockPosts;
};


describe('<PostList />', () => {
  it('should render posts', () => {
    const mockPosts = createMockPosts();
    render(<PostList posts={mockPosts} />);

    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText(/title/i)).toHaveLength(3);
    expect(screen.getByRole('img', { name: /title 3/i })).toHaveAttribute('src', 'img/img3.png');
  });

  it('should match snapshot', () => {
    const mockPosts = createMockPosts();
    const { container } = render(<PostList posts={mockPosts} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});