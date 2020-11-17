/**
 * @file
 * Contains Home Page Component.
 */

import React from 'react';
import { HomeContainerStyled } from './Home.style';
import Button from '../components/ButtonWithArrow';

export function Home(props) {
  return (
    <HomeContainerStyled>
      <Button textsize='20'>btn</Button>
      <div>Home</div>
    </HomeContainerStyled>
  )
}
