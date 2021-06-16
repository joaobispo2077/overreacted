import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import Home from '.';

const handlers = [
  rest.get('*jsonplaceholder.typicode.com*', async (req, res, ctx) => {
    console.log('Intercepting request from post api...');
    return res(
      ctx.json([
        {
          id: 1,
          title: 'title 1',
          body: 'body 1',
          url: 'img/img1',
        },
        {
          id: 2,
          title: 'title 2',
          body: 'body 2',
          url: 'img/img2',
        },
        {
          id: 3,
          title: 'title 3',
          body: 'body 3',
          url: 'img/img3',
        },
        {
          id: 4,
          title: 'title 4',
          body: 'body 4',
          url: 'img/img4',
        },
        {
          id: 5,
          title: 'title 5',
          body: 'body 5',
          url: 'img/img5',
        },
        {
          id: 6,
          title: 'title 6',
          body: 'body 6',
          url: 'img/img6',
        },
        {
          id: 7,
          title: 'title 7',
          body: 'body 7',
          url: 'img/img7',
        },
      ]),
    );
  }),
];

const server = setupServer(...handlers);

describe('<Home />', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('should render input search, posts and load more', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('Post não encontrado');

    expect.assertions(3);
    await waitForElementToBeRemoved(noMorePosts);

    const inputSearch = screen.getByPlaceholderText(/type your search/i);
    expect(inputSearch).toBeInTheDocument();

    const images = screen.getAllByRole('img', { name: /title/i });
    expect(images).toHaveLength(5);

    const button = screen.getByRole('button', { name: /load more posts/i });
    expect(button).toBeInTheDocument();
  });
});
