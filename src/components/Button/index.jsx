import { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
export class Button extends Component {
  render() {
    const { text, onClick, disabled = false } = this.props;
    return (
      <button disabled={disabled} className="button" onClick={onClick}>
        {text}
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
