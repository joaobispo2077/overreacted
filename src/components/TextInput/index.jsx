import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export const TextInput = ({ searchValue = '', onInput = () => { } }) => (
  <input
    type="search"
    className="text-input"
    value={searchValue}
    onInput={onInput}
    placeholder="Type your search"
  />
);

TextInput.propTypes = {
  searchValue: PropTypes.string,
  onInput: PropTypes.func,
};
