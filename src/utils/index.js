/**
 * @file
 * Contains functions.
 */

export const dFlex = ({ justify, align, self, flex_size, direction }) => {
    return `
      display: flex;
      ${justify ? `justify-content: ${justify};` : ''}
      ${align ? `align-items: ${align};` : ''}
      ${self ? `align-self: ${self};` : ''}
      ${flex_size ? `flex: ${flex_size};` : ''}
      ${direction ? `flex-direction: ${direction};` : ''}
    `;
  };