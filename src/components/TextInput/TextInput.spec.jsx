import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextInput } from ".";

describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    const searchValue = 'testing';

    render(<TextInput onInput={fn} searchValue={searchValue} />);

    const input = screen.getByPlaceholderText(/Type your search/i);

    expect(input).toHaveValue(searchValue);
  });

  it('should call onInput function on each key pressed', () => {
    const fn = jest.fn();

    render(<TextInput onInput={fn} />);

    const searchValue = 'testing text input';

    const input = screen.getByPlaceholderText(/Type your search/i);

    userEvent.type(input, searchValue);

    expect(fn).toHaveBeenCalledTimes(searchValue.length);
  });

  it('should match snapshot', () => {
    const { container } = render(<TextInput />);

    expect(container.firstChild).toMatchSnapshot();
  });
});