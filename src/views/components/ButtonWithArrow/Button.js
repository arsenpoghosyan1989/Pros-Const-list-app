/**
 * @file
 * ButtonWithArrow ButtonWithArrow component.
 *
 * Checkbox contains next attributes:
 * # text {string} - Button text
 * # textsize {number} - Button text font size
 * # direction {string} - Button arrow direction
 * # space {number} - Space between text and arrow
 * # rotate {number} - rotate arrow
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer } from './Button.style';

export function Button({children, ...rest}) {
  return (
    <ButtonContainer textsize={rest.textsize} rotate={rest.rotate}>
      {children}
    </ButtonContainer>
  );
}

Button.ptopTypes = {
  textsize: PropTypes.string,
  rotate: PropTypes.number,
};
