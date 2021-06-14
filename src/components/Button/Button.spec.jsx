import userEvent from '@testing-library/user-event';
import { Button } from '.';
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
});