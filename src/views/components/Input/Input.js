/**
 * @file
 * Input component.
 *
 * Checkbox contains next attributes:
 * # value {string} - Input text
 * # id {string} - index text
 * # type {string} - cons or pros
 * # add {function} - Input new handler
 * # change {function} - Input left handler
 * # remove {function} - Input empty handler
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, InputContainer } from './Input.style';
import { add, change, remove } from '../../../redux/actions';
import { connect } from 'react-redux';

const Input = ({
  value: initialValue,
  type,
  id,
  index,
  add,
  change,
  remove,
  ...rest
}) => {
  const [value, setValue] = useState(initialValue);
  const onBlur = () => {
    if (initialValue !== value && initialValue !== '') {
      value === '' ? remove({ type, id }) : change({ type, id, value });
    }
    if (initialValue !== value && initialValue === '') {
      add({ value, id: (Math.ceil(Math.random() * 100000) + ''), type})
      setValue('');
    }
  };

  return (
    <Wrapper>
      <span>{index + 1}.</span>
      <InputContainer
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onBlur={onBlur}
        {...rest}
      />
    </Wrapper>
  );
}

Input.ptopTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  add: PropTypes.func,
  change: PropTypes.func,
  remove: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (info) => {
      dispatch(add(info));
    },
    change: (info) => {
      dispatch(change(info));
    },
    remove: (info) => {
      dispatch(remove(info));
    },
  };
};

export default connect('', mapDispatchToProps)(Input);