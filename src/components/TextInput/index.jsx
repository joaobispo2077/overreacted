import React from 'react';
import './styles.css';

export const TextInput = ({ searchValue, onInput }) => (
  <input
    type="search"
    className="text-input"
    value={searchValue}
    onInput={onInput}
    placeholder="Type your search"
  />
);
