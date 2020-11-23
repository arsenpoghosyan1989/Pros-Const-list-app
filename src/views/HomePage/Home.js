/**
 * @file
 * Contains Home Page Component.
 */

import React from 'react';
import Header from '../components/Header';
import Block from '../components/Block';
import { HomeContainerStyled, ProsConsContainer } from './Home.style';

const Home = ({ pros, cons }) => {
  return (
    <HomeContainerStyled>
      <Header title='Should I eat at McDonalds?' />
      <ProsConsContainer styles={{ height: '40px' }}>
        <Block styles={{ marginR: '1px', justify: 'center' }}>PROS</Block>
        <Block>CONS</Block>
      </ProsConsContainer>
      <ProsConsContainer styles={{ height: '400px', marginT: '0.5px' }}>
        <Block
          type='pros'
          styles={{
            marginR: '1px',
          }}
        />
        <Block type='cons' />
      </ProsConsContainer>
    </HomeContainerStyled>
  );
};

export default Home;
