/**
 * @file
 * Header component.
 *
 * Checkbox contains next attributes:
 * # title {string} - Header text
 */

import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContainer } from './Header.style';

export function Header({ title }) {
  return <HeaderContainer>{title}</HeaderContainer>;
}

Header.ptopTypes = {
  title: PropTypes.string,
};
