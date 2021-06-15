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

  it('should render input search, posts and load more ', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('Post não encontrado');

    await waitForElementToBeRemoved(noMorePosts);
    screen.debug();
  });
});
