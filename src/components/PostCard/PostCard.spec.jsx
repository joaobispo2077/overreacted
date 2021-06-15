import { render, screen } from '@testing-library/react';
import { PostCard } from '.';

const createMockPostCardProps = () => {
  const postCardSut = {
    title: 'title 1',
    body: 'body 1',
    id: 1,
    cover: 'img/img.png',
  };

  return postCardSut;
};

describe('<PostCard />', () => {
  it('should render PostCard', () => {
    const mockPostCardProps = createMockPostCardProps();
    render(<PostCard {...mockPostCardProps} />);

    expect(screen.getByAltText(mockPostCardProps.title)).toHaveAttribute(
      'src',
      mockPostCardProps.cover,
    );
    expect(
      screen.getByRole('heading', {
        name: `${mockPostCardProps.id} - ${mockPostCardProps.title}`,
      }),
    ).toBeInTheDocument();
  });

  it('shoud match snapshot', () => {
    const mockPostCardProps = createMockPostCardProps();
    const { container } = render(<PostCard {...mockPostCardProps} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
