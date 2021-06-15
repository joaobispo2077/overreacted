import { Button } from '.';
import userEvent from '@testing-library/user-event';
const { render, screen, fireEvent } = require("@testing-library/react");

describe('<Button />', () => {
  it('should render the button with text "Load more"', () => {
    render(<Button text="Load more" />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should call on click function', () => {
    const mockOnClick = jest.fn();

    render(<Button text="Load more" onClick={mockOnClick} />);

    const button = screen.getByRole('button', { name: /load more/i });

    userEvent.click(button) // naturally event
    fireEvent.click(button); // just trigger event

    expect(mockOnClick).toHaveBeenCalledTimes(2);
  });

  it('should be disabled when disabled is true', () => {
    render(<Button text="Load more" disabled={true} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeDisabled();
  });

  it('should be disabled when disabled is false', () => {
    render(<Button text="Load more" disabled={false} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeEnabled();
  });

  it('shoud match snapshot', () => {
    const mockOnClick = jest.fn();
    const { container } = render(<Button text="Load more" onClick={mockOnClick} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});