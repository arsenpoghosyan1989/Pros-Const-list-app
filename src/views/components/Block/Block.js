/**
 * @file
 * Block component.
 *
 * Checkbox contains next attributes:
 * # type {string} - cons or pros
 */

import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import { connect } from 'react-redux';
import { BlockContainer } from './Block.style';

const Block = ({ type, pros, cons, children, styles }) => {
  const array = type === 'pros' ? pros : type === 'cons' ? cons : [];
  const combinedStyles = Object.assign(
    {
      justify: 'flex-start',
      direction: 'column',
      overflow: 'auto',
    },
    styles
  );

  return (
    <BlockContainer styles={combinedStyles}>
      {children
        ? children
        : array?.map(({ value, id }, index) => (
            <Input
              value={value}
              key={id}
              id={id}
              index={index}
              type={type}
            />
          ))}
    </BlockContainer>
  );
};

Block.ptopTypes = {
  type: PropTypes.string,
};

const mapStateToProps = ({ pros, cons }) => {
  return { pros, cons };
};

export default connect(mapStateToProps)(Block);
