/**
 * @file
 * Input component.
 *
 * Checkbox contains next attributes:
 * # value {string} - Input text
 * # id {string} - index text
 * # onChange {function} - Input text change handler
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, InputContainer } from './Input.style';

export function Input({ value, id, onChange }) {
  return (
    <Wrapper>
      <span>{id}.</span>
      <InputContainer onChange={onChange} value={value} />
    </Wrapper>
  );
}

Input.ptopTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
};
